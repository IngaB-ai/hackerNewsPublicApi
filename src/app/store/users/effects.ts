import { UsersActions } from ".";
import { getUser } from "./actions";

// @ts-ignore
export function usersEffects(action, dispatch, getState): void {
    if (action.type === UsersActions.GET_USER) {
        dispatch(getUser(action.payload));
    }
}