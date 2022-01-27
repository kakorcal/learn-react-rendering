import { all, delay, fork } from 'redux-saga/effects';

function* hello() {
  yield delay(5000);

  console.log('HELLLLO');
}

function* rootSaga() {
  yield all([fork(hello)]);
}

export default rootSaga;
