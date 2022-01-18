import { combineReducers } from 'redux';

import playbackReducer, { PlaybackState } from './playback/reducers';

export type RootState = {
  playback: PlaybackState;
};

export default combineReducers({
  playback: playbackReducer,
});;

