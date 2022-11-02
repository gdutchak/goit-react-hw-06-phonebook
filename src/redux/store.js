import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { contactSlice } from './sliceContact';


const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const persistConfig = {
    key: 'contact',
    storage,
    blacklist: ['filter']
}

export const store = configureStore({
    reducer: persistReducer(persistConfig, contactSlice.reducer),
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export const { addContact, addFilter, deleteContact } = contactSlice.actions;
export const persistor = persistStore(store);