import { combineReducers } from 'redux';

import playbackReducer, { PlaybackState } from './playback/reducers';
import tracksReducer, { TracksState } from './tracks/reducers';

export type RootState = {
  playback: PlaybackState;
  tracks: TracksState;
};

export default combineReducers({
  playback: playbackReducer,
  tracks: tracksReducer,
});
