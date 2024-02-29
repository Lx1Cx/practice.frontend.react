import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authApi} from "./entity/Auth/api/AuthApi.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {userSlice} from "./entity/Auth/slices/userSlice.ts";
import { persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,

} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {placeApi} from "./entity/Place/api/PlaceApi.ts"; // defaults to localStorage for web


const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [placeApi.reducerPath]: placeApi.reducer
})

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(authApi.middleware)
            .concat(placeApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector