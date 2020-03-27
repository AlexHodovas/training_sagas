import { RUN_TIMER } from "../actions";

const runTaskReducer = (state = false, action) => {
  switch (action.type) {
    case RUN_TIMER:
      return !state;

    default:
      return state;
  }
};

export default runTaskReducer;