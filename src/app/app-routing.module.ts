import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesComponent } from './components/stories/stories.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'stories', component: StoriesComponent },
  { path: 'user/:username', component: UserComponent },
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
  { path: '**', redirectTo: '/stories', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
