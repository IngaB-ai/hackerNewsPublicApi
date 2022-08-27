import { UsersActions } from './index'

export function getUser(username: string): any {
    // @ts-ignore
    return async (dispatch, getState) => {
        
        const res = await (await fetch(`https://hacker-news.firebaseio.com/v0/user/${username}.json`, {
            method: 'GET'
        })).json();
        dispatch({ type: UsersActions.SET, payload: res})
    }
}

export const actionGetUser = (username: string): any => {
    return ({
      type: UsersActions.GET_USER,
      payload: username
    });
  };
 