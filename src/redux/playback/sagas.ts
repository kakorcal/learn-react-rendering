import { all, select, fork, put, call, takeLatest, delay } from 'redux-saga/effects';
// import { howl, howler } from 'howler';

import * as actions from './actions';
import selectors from '../rootSelectors';

function* onTune(action: ReturnType<typeof actions.tune>): Generator {
  yield delay(3000);

  const annotation = yield select(selectors.tracks.selectAnnotationById, action.payload.id);
  console.log('TUNE', annotation);
}

function* initSagas() {
  yield all([
    takeLatest(actions.tune, onTune),
  ]);
}

export default initSagas;
