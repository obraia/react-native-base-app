import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@obraia/async-storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import themeReducer from '../shared/reducers/theme';
import storageReducer from '../modules/settings/reducers/storage';
import notificationsReducer from '../modules/settings/reducers/notifications';

const reducers = combineReducers({
  theme: themeReducer,
  storage: storageReducer,
  notifications: notificationsReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };