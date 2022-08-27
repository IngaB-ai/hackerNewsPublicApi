import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import thunk from 'redux-thunk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer, AppState } from './store';
import { AppInitAction } from './store/actions';
import { createEffectsMiddleware } from './store/middleware';
import { storiesEffects } from './store/stories/effects';
import { usersEffects } from './store/users/effects';
import { StoriesComponent } from './components/stories/stories.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(
    ngRedux: NgRedux<AppState>,
  ) {

    let enhancer: any = [];
    if (typeof window !== 'undefined') {
      const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
      if (reduxDevTools !== undefined) {
        enhancer = [...enhancer, reduxDevTools({ serialize: true })];
      }
    }

    let initState: AppState = { stories: { storiesList: [], topStories: []}, users: {usersData: []} };
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('stories')) {
      // @ts-ignore
      initState = {stories: JSON.parse(sessionStorage.getItem('stories'))};
    }

    ngRedux.configureStore(appReducer, initState, [ thunk, createEffectsMiddleware([ storiesEffects, usersEffects ])], enhancer);
    ngRedux.dispatch(AppInitAction());

    ngRedux.subscribe(() => {
      const statehasChanged = JSON.stringify(ngRedux.getState().stories) !== sessionStorage.getItem('stories');
      if (statehasChanged) {
        sessionStorage.setItem('stories', JSON.stringify(ngRedux.getState().stories));
      }
    });
  }
}
