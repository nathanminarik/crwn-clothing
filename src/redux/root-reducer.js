import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './cart';
import { directoryReducer } from './directory';
import { shopReducer } from './shop';
import { userReducer } from './user';

const persistConfig = {
    key: 'root',
    storage,
    // We don't need to include user, since firebase auth is handling it.
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    user: userReducer
});

export const rootReducerPersisted = persistReducer(persistConfig, rootReducer);
