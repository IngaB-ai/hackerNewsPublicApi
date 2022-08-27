import { StoriesActions } from ".";
import { APP_INIT } from "../actions";
import { getPreviewStoryDetails, getTopStories } from "./actions";

// @ts-ignore
export function storiesEffects(action, dispatch, getState): void {
    if (action.type === APP_INIT) {
        dispatch(getTopStories());
    }
    if (action.type === StoriesActions.SET_TOP_STORIES) {
        dispatch(getPreviewStoryDetails());
    }
}
