import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

const axios = Axios.create({
   baseURL: '',
}
)


export const loginAsync = createAsyncThunk('auth/loginAsync', async (credential, {dispatch, rejectedWithValue})=>{
      try{
         dispatch(getLoginRequest())
         const {data} = await axios.post('api/login', credential)
         
         
         
         

      }
      catch(error){
        return rejectedWithValue('Login Failed')
      }

      finally{
         dispatch(clearError())
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
            state.loading = false
         },
         getLogoutSuccess: (state, action)=>{
            state.loading = false
            state.isAuthenticated = false
            
         },
        
    }
})

export const {getLoginRequest, getLoginSuccess, getLoginFail, clearError, getLogoutSuccess} = authSlice.actions