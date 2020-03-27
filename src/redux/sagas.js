import { put, takeEvery, all, call } from 'redux-saga/effects'

function* helloSaga() {
  yield console.log("Hello Sagas!");
}

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* sagaWorker() {
  yield call(delay, 1000);
  const appState = ////;
  //1
  // JSON.parse(localStorage.getItem("stateApp"));
  //2 
  //yield call(localStorage.getItem, "stateApp")
  //3
  //localStorage.getItem("stateApp")
  yield put({type: 'SET_APP_STATE', appState })
}

function* sagaWatcher() {
  yield takeEvery('SET_APP_STATE', sagaWorker)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    sagaWatcher()
  ])
}