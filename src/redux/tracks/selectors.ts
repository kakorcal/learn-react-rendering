import { State } from '../index';
import { Track } from '../../types';

export const selectIds = (state: State) => {
  return state.tracks.ids;
};

export const selectAnnotations = (state: State) => {
  return state.tracks.annotations;
};

export const selectAnnotationById = (state: State, id: string): Track => {
  return state.tracks.annotations[id];
};

export const selectCurrentSortType = (state: State) => {
  return state.tracks.currentSortType;
};

