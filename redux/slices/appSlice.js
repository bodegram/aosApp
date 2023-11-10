import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAppIntro: true,
    autoLogout: false,
    biometricLogin: true,
    biometricPay: false,
    showBalance: true
}


const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers:{
        disableAppIntro: (state)=>{
            state.showAppIntro = false
        },
        setAutoLogout: (state)=>{
           state.autoLogout = !state.autoLogout
        },
        setBiometricLogin: (state)=>{
            state.biometricLogin = !state.biometricLogin
         },
         setBiometricPay: (state)=>{
            state.biometricPay = !state.biometricPay
         },
         setShowBalance: (state)=>{
            state.showBalance = !state.showBalance
         },
    }
})

export const {disableAppIntro, setAutoLogout, setBiometricLogin, setBiometricPay, setShowBalance} = appSlice.actions
export default appSlice