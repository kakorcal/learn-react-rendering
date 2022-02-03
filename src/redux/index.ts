import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer, { RootState } from './rootReducer';
import rootActions from './rootActions';
import rootSaga from './rootSaga';
import rootSelectors from './rootSelectors';

export type State = RootState;
export const actions = rootActions;
export const selectors = rootSelectors;

const sagaMiddleware = createSagaMiddleware();

// https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm
const devtools = process.env.NODE_ENV === 'development' ? devToolsEnhancer({}) : undefined;
 
function initializeStore() {
  return createStore(rootReducer,
    compose(
      applyMiddleware(sagaMiddleware), 
      devtools ? devtools : (f: any) => f
    )
  );
}

function initializeSagas() {
  return sagaMiddleware.run(rootSaga);
}

export default { initializeStore, initializeSagas };
