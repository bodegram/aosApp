import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const loginAsync = createAsyncThunk('auth/loginAsync', (credential, {dispatch, rejectedWithValue})=>{
      try{

      }
      catch(error){
        return rejectedWithValue('Login Failed')
      }
})

const initialState = {
    isAuthenticated: false,
    loading: false,
    error: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
         getLoginRequest: (state, action)=>{
            state.loading = true
         },
         getLoginSuccess: (state, action)=>{
            state.loading = false
            state.isAuthenticated = true
         },
         getLoginFail: (state, action)=>{
            state.error = true
            state.loading = false
            state.message = action.payload
         }, 
         clearError: (state, action)=>{
            state.message = ''
            state.error = false
         }
    }
})

export const {getLoginRequest, getLoginSuccess, getLoginFail, clearError} = authSlice.actions