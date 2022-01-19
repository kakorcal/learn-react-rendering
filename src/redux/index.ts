import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer, { RootState } from './rootReducer';
import rootActions from './rootActions';

export type State = RootState;
export const actions = rootActions;

// https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm
const devtools = process.env.NODE_ENV === 'development' ? devToolsEnhancer({}) : undefined;
 
export const store = createStore(rootReducer, devtools);

