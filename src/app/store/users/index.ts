import { Action } from "redux";

export interface UsersState {
    usersData: User[],
}

export interface User {
    about: string,
    created: Date,
    delay: number,
    id: string,
    karma: number,
    submitted: number[]
}

export const initialStoriesState: UsersState = {
    usersData: []
}

export interface UsersAction extends Action {
    payload: any;
}

export const UsersActions = {
    SET: Symbol('users/set'),
    GET_USER: Symbol('users/get user'),
};

export function usersReducer(state: UsersState = initialStoriesState, action: UsersAction ): UsersState{
    switch (action.type) {
        case UsersActions.SET: {
            let usersData: User[] = [...state.usersData];
            const user: User | undefined = usersData.find(userData => userData.id === action.payload.id);
            if(!user){
                usersData.push(action.payload as User)
            }
            return {...state, usersData: usersData};
        }
        case UsersActions.GET_USER: {
            return state;
          }
        default:
            return state;
    }
}
