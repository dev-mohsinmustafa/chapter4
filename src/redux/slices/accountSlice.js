import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  amount: 1,
}



// additional api
// First, create the thunk

// this is also action creator  
export const getUserAccount = createAsyncThunk(
  // action name
  'account/getUser',
  async (userId, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/accounts/${userId}`)
      console.log(data.amount);
      return data.amount;
    } catch (error) { 
      console.log(error);
    }
  }
)
// es ko yaha se export krke account comp me use kya



export const accountSlice = createSlice({
  // createSlice 1 api hai jis ke ander object hai jis me pehle property hai name
  // ye apke actions ke names check kre ga jo hamne type.js me banaye thy
  // jo ap actions  ka name rkhna chahty hai to ye us me aye ga

  name: 'account',
  //   account/increment

  initialState,
  reducers: {
    increment: (state, action) => {
      state.amount += 1  // immer library =+ 
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },

    // additional
    extraReducers: (builder) => {
      builder.addCase(getUserAccount.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.pending = false;
      })
      .addCase(getUserAccount.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        state.error = action.error.message ;
      });
    }


  },
})

// Action creators are generated for each case reducer function
// action ye khud bana deta hai hamne nai banane
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer