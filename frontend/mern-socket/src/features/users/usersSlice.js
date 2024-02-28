import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// user from local storage
const userFromLocalStorage = JSON.parse(localStorage.getItem('user'))
// initial state
const initialState = {
    usersDirection: 'LOGIN',
    isUserPending: false,
    user: userFromLocalStorage ? userFromLocalStorage : null,
    users: [],
    errors: null,
}

// login
export const login = createAsyncThunk('users/login',async data => {
    try{
        const response = await axios.post('/api/users/login',data) 
        return response.data
    }catch(err){
        return err.response.data
    }
})

// signup
export const signup = createAsyncThunk('users/signup',async data => {
    try{
        const response = await axios.post('/api/users/signup',data)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// logout
export const logout = createAsyncThunk('users/logout',async () => {
    try{
        const response = await axios.get('/api/users/logout')
        return response.data
    }catch(err){
        return err.response.data
    }
})

// all  users
export const getAllUsers = createAsyncThunk('users/getAllUsers',async () => {
    try{
        const response = await axios.get('/api/users/all-users')
        return response.data
    }catch(err){
        return err.response.data
    }
})

// users slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // set users direction
        setUsersDirection: (state,action) => {
            state.usersDirection = action.payload
        },
        // reset errors and user pending status
        resetErrorsAndIsUserPending: state => {
            state.errors = null 
            state.isUserPending = false
        },
    },
    extraReducers: builder => {
        builder 
            // cases
            // login
            // pending
            .addCase(login.pending,state => {
                state.isUserPending = true
            })
            // fulfilled
            .addCase(login.fulfilled,(state,action)=>{
                state.isUserPending = false 
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.errors = null
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors 
                }
            })
            // rejectde
            .addCase(login.rejected,state => {
                state.isUserPending = false
                console.log('user login rejected case')
            })
            // signup
            // pending
            .addCase(signup.pending,state => {
                state.isUserPending = true
            })
            // fulfilled
            .addCase(signup.fulfilled,(state,action)=>{
                state.isUserPending = false
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.errors = null
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors
                }
            })
            // rejected
            .addCase(signup.rejected,state => {
                state.isUserPending = false 
                console.log('user signup rejected case')
            })
            // logout
            // fulfilled
            .addCase(logout.fulfilled,(state,action)=>{
                if(action.payload.message === 'user logged out successfully'){
                    state.user = null
                    localStorage.removeItem('user')
                }
            })
            // rejected
            .addCase(logout.rejected,state => {
                console.log('user logout rejected case')
            })

            // all users
            // fulfilled case
            .addCase(getAllUsers.fulfilled,(state,action)=> {
                if(action.payload.users){
                    state.users = action.payload.users
                }
            })
            // rejected 
            .addCase(getAllUsers.rejected,()=> {
                console.log('get all users rejected case')
            })
    },
})

// selectors
// users direction 
export const selectUsersDirection = state => state.users.usersDirection
// isUser pending
export const selectIsUserPending = state => state.users.isUserPending 
// user
export const selectUser = state => state.users.user 
// errors
export const selectErrors = state => state.users.errors 
// users
export const selectUsers = state => state.users.users

// exports
// actions
export const {
    setUsersDirection,
    resetErrorsAndIsUserPending,
} = usersSlice.actions
// reducer
export default usersSlice.reducer