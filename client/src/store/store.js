import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import menuReducer from '../features/menu/menuSlice'
import userReducer from '../features/user/userSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})