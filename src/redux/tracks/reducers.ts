import { createReducer, ActionType } from 'typesafe-actions';

import { Tracks, TrackIds, SortType } from '../../types';
import { tracks } from '../seed';
import * as actions from './actions';

export type TracksActions = ActionType<typeof actions>;

export interface TracksState {
  ids: TrackIds;
  annotations: Tracks,
  sortType: SortType;
}

export const INITIAL_STATE: TracksState = {
  ids: tracks.map(({ id }) => id),
  annotations: tracks.reduce((obj: Tracks, track) => {
    obj[`${track.id}`] = track;
    return obj;
  }, {}),
  sortType: 'DATE-ADDED-NEWEST',
};

export default createReducer<TracksState, TracksActions>(INITIAL_STATE)
  .handleAction(actions.sort, (state, action) => {
    return {
      ...state,
      sortType: action.payload.sortType,
    };
  });
