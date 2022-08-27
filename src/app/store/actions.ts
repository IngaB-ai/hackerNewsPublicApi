import { Action } from 'redux';

export const APP_INIT = Symbol('init');
export function AppInitAction(): Action {
    return { type: APP_INIT };
}