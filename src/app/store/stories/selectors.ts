import { Story } from ".";
import { AppState } from "..";

export function selectTopStories(state: AppState): number[]{
    return state.stories.topStories;
}

export function selectStories(): (state: AppState) => Story[]{
    return (state: AppState) => {
        return state.stories.storiesList;
    }
}