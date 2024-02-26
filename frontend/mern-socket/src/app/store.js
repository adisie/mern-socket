import {configureStore} from '@reduxjs/toolkit'

// reducers
// users reducer
import usersReducer from '../features/users/usersSlice'
// store
export const store = configureStore({
    reducer: {
            // users reducer
            users: usersReducer, 
    }
})