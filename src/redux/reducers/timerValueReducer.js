import { ADD_ONE_TO_TIMER } from "../actions";

const timerValueReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_ONE_TO_TIMER:
      return state + action.value;

    default:
      return state;
  }
};

export default timerValueReducer;