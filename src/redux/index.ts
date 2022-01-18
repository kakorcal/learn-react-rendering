import { createStore } from 'redux';
import rootReducer, { RootState } from './rootReducer';
import rootActions from './rootActions';

export type State = RootState;
export const actions = rootActions;

export const INITIAL_ROOT_STATE: RootState = {
  playback: {
    id: null,
    status: 'NO_SOURCE',
    currentTime: -1,
    endTime: -1,
    volume: 50,
  },
};
 
export const store = createStore(rootReducer, INITIAL_ROOT_STATE);

