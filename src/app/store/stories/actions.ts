import { StoriesActions } from ".";
import { selectTopStories } from "./selectors";

export function getTopStories(): any {
    // @ts-ignore
    return async (dispatch, getState) => {
        const topStories = selectTopStories(getState());
        if( topStories.length > 0 ) return;

        const res = await (await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`, {
            method: 'GET'
        })).json();
        dispatch({ type: StoriesActions.SET_TOP_STORIES, payload: res})
    }
}

export function getStoryById(id: number){ 
    // @ts-ignore
    return async (dispatch, getState) => {
        const res = await (await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
            method: 'GET'
        })).json();
        dispatch({ type: StoriesActions.SET_STORY, payload: res})
    }
}

export function getPreviewStoryDetails(){ 
    // @ts-ignore
    return async (dispatch, getState) => {
        const storyIds = selectTopStories(getState()).splice(0,10);
        storyIds.forEach((id:number) => { dispatch(getStoryById(id)) })
    }
}