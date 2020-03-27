import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from "./sagas";
import runTimerReducer from "./reducers/runTimerReducer";
import timerValueReducer from "./reducers/timerValueReducer";

// selectors
export const getIsTimerRunning = state => state.isTimerRunning;
export const getTimerValue = state => state.timerValue;

const rootReducer = combineReducers({
  isTimerRunning: runTimerReducer,
  timerValue: timerValueReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;
