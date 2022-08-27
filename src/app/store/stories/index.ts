import { Action } from "redux";

export interface StoriesState {
    topStories: number[],
    storiesList: Story[]
}

export interface Story {  
    by?: string,
    descendants?: number,
    id?: number,
    kids?: number[],
    score?: number,
    time?: Date,
    title?: number,
    type?: string,
    url?: string
}

export const initialStoriesState: StoriesState = {
    topStories: [],
    storiesList: []
}

export interface StoriesAction extends Action {
    payload: any;
}

export const StoriesActions = {
    SET: Symbol('Stories/set'),
    SET_TOP_STORIES: Symbol('Stories/set top stories'),
    SET_STORY: Symbol('Stories/set single story'),
};

export function storiesReducer(state: StoriesState = initialStoriesState, action: StoriesAction ): StoriesState{
    switch (action.type) {
        case StoriesActions.SET: {
          return { ...state, ...action.payload};
        }
        case StoriesActions.SET_TOP_STORIES: {
            return { ...state, topStories: action.payload};
        }
        case StoriesActions.SET_STORY: {
            let stories: Story[] = [ ...state.storiesList ];
            const story: Story | undefined = stories.find(story => story.id === action.payload.id);
            if(!story){
                let s = action.payload;
                s.time = new Date(s.time *1000);
                stories.push(s as Story);
            }
            //@ts-ignore
            stories.sort((a,b) => (a.score < b.score) ? 1 : ((a.score > b.score) ? -1 : 0))
            return { ...state, storiesList: stories};
        }
        default:
            return state;
    }
}
