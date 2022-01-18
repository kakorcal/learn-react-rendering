import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

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

// https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm
const devtools = process.env.NODE_ENV === 'development' ? devToolsEnhancer({}) : undefined;
 
export const store = createStore(rootReducer, INITIAL_ROOT_STATE, devtools);

