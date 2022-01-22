import { State } from '../index';

export const selectIds = (state: State) => {
  return state.tracks.ids;
};

export const selectAnnotations = (state: State) => {
  return state.tracks.annotations;
};

export const selectCurrentSortType = (state: State) => {
  return state.tracks.currentSortType;
};

