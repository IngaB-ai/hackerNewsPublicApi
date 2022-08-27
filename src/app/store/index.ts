import { combineReducers, createStore } from "redux";
import { storiesReducer, StoriesState } from "./stories";
import { usersReducer, UsersState } from "./users";

export interface AppState {
    stories: StoriesState;
    users: UsersState;
}

export const appReducer = combineReducers<AppState>({
    stories: storiesReducer,
    users: usersReducer,
  });
  
export const store = createStore(appReducer);