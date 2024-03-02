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
import {placeApi} from "./entity/Place/api/PlaceApi.ts";
import {fileApi} from "./entity/File/api/FileApi.ts";
import {fileSlice} from "./entity/File/slices/fileSlice.ts";
import {tourApi} from "./entity/Tours/api/TourApi.ts";
import {tourSlice} from "./entity/Tours/slices/tourSlice.ts"; // defaults to localStorage for web


const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [placeApi.reducerPath]: placeApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
    [fileSlice.reducerPath]: fileSlice.reducer,
    [tourApi.reducerPath]: tourApi.reducer,
    [tourSlice.reducerPath]: tourSlice.reducer
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
            .concat(placeApi.middleware)
            .concat(fileApi.middleware)
            .concat(tourApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector