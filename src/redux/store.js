import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import { rootReducerPersisted } from './root-reducer';

const middlewares = [ logger ];
export const store = createStore(rootReducerPersisted, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
