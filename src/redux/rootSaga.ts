import { all, delay, fork } from 'redux-saga/effects';

import playbackSaga from './playback/sagas';


function* rootSaga() {
  yield all([
    fork(playbackSaga),
  ]);
}

export default rootSaga;
