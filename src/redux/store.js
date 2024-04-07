import { configureStore } from '@reduxjs/toolkit'
import tournamentsReducer from './features/tournamentsSlice' 
import { tournamentsApi } from './services/tournamentsApi';
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer : {
        tournamentsReducer,
        [tournamentsApi.reducerPath] : tournamentsApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([tournamentsApi.middleware])
})

setupListeners(store.dispatch)

export const RootState = store.getState();
export const AppDispatch = store.dispatch;