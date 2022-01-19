import { createReducer, ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type PlaybackActions = ActionType<typeof actions>;

export interface PlaybackState {
  id: number | null;
  status: 'PLAYING' | 'PAUSED' | 'LOADING' | 'NO_SOURCE';
  currentTime: number;
  endTime: number;
  volume: number;
}

export const INITIAL_STATE: PlaybackState = {
  id: null,
  status: 'NO_SOURCE',
  currentTime: -1,
  endTime: -1,
  volume: 50,
};

export default createReducer<PlaybackState, PlaybackActions>(INITIAL_STATE)
  .handleAction(actions.tune, (state, action) => {
    return {
      ...state,
      volume: action.payload.id,
    };
  });
