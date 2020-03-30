import { ADD_ONE_TO_TIMER } from "../actions";

const defaultState = {
  LSItem : null,
  time: 0
};

const timerValueReducer = (state = 0, action) => {
  switch (action.type) {
    // case ADD_ONE_TO_TIMER:
    //   return state + action.value;

    case 'SET_STORAGE_ITEM':
      return {
        ...state,
        LSItem: action.payload
      };

    default:
      return state;
  }
};

export default timerValueReducer;
