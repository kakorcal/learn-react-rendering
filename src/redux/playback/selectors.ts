import { State } from '../index';

export const selectId = (state: State) => {
  return state.playback.id;
};

export const selectStatus = (state: State) => {
  return state.playback.status;
};

export const selectCurrentTime = (state: State) => {
  return state.playback.currentTime;
};

export const selectEndTime = (state: State) => {
  return state.playback.endTime;
};

export const selectVolume = (state: State) => {
  return state.playback.volume;
};