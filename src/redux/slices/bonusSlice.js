import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  points: 1,
}



// additional 2

export const incrementByAmount = createAction("account/incrementByAmount")



export const bonusSlice = createSlice({
  name: 'bonus',

  //   bonus/increment
  initialState,
  reducers: {
    // switch case me action ye khud bana deta hai increment
    increment: (state,) => {
      state.points += 1  // immer library =+ 
    },
  },

  // additonal 2
  // agr hamne jo condition lagaye the ke agr amount kise ne 100 se uper jama krwaye hai to 1 bonus 
  // point add kr do us me to yaha ese direct ne hoga 
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      // state.points++; dono same hai
      if (action.payload >= 100){
        state.points += 1;
      }
      else{
        state.points += 1;
      }
      
    })
  }

})

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer