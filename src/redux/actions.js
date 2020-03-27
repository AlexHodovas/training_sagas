//types
export const RUN_TIMER = 'RUN_TIMER';
export const ADD_ONE_TO_TIMER = 'ADD_ONE_TO_TIMER';

//actions
export const runTimer = () => ({ type: RUN_TIMER });
export const addOneToTimer = (value) => ({ type: ADD_ONE_TO_TIMER, value });