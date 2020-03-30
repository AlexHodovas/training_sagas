import { put, takeEvery, all, call } from 'redux-saga/effects'

function* helloSaga() {
  yield console.log("Hello Sagas!");
}

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* sagaWorker() {
  yield call(delay, 1000);



  try {

    const storageItem  = localStorage.getItem('TEST_ITEM');

    if(storageItem) {
      const parsedItem = JSON.parse(storageItem);
      /* NEW ACTION  */
      yield put({type: 'SET_STORAGE_ITEM', payload : parsedItem })
    }

  } catch  (e) {
    console.error(`Error occurred, ${e}`)
  }


}

function* sagaWatcher() {
  /* action from component  */
  yield takeEvery('GET_STORAGE_ITEM', sagaWorker)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    sagaWatcher()
  ])
}
