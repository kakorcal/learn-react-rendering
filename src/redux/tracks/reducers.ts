import { createReducer, ActionType } from 'typesafe-actions';

import { Tracks, TrackIds, SortType } from '../../types';
import { name, tracks, currentSortType, sortTypes } from '../seed';
import * as actions from './actions';

export type TracksActions = ActionType<typeof actions>;

export interface TracksState {
  ids: TrackIds;
  name: string;
  annotations: Tracks,
  currentSortType: SortType;
  sortTypes: SortType[];
}

export const INITIAL_STATE: TracksState = {
  ids: tracks.map(({ id }) => id),
  name,
  annotations: tracks.reduce((obj: Tracks, track) => {
    obj[`${track.id}`] = track;
    return obj;
  }, {}),
  currentSortType,
  sortTypes,
};

export default createReducer<TracksState, TracksActions>(INITIAL_STATE)
  .handleAction(actions.sort, (state, action) => {
    return {
      ...state,
      currentSortType: action.payload.sortType,
    };
  });
