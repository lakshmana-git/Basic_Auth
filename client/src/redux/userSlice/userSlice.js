import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentaUser : null,
    loading : false,
    error : false,
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        //functions to change the state
         
        signInStart :(state)=>{
            state.laoding = true

        },
        signInSuccess :(state,action)=>{
            state.createSlice = action.payload
            state.loading = false;
            state.error = false
        },
        signInFailure : (state,action)=>{
            state.laoding = false
            state.error = action.payload

        }

    }
})


export const {signInFailure,signInStart,signInSuccess} = userSlice.actions;

export default userSlice.reducer