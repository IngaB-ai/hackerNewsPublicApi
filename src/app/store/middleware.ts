export function createEffectsMiddleware(effects: any = []): any {
    // @ts-ignore
    return ({ dispatch, getState }) => next => action => {
        const nextState = next(action);
        effects.forEach((effect: any) => effect(action, dispatch, getState));
        return nextState;
    };
}