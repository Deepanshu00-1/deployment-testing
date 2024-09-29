import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if(state.value <= 19 && state.value >= 0){
        state.value += 1
      }

    },
    decrement: (state) => {
      if(state.value <=20 && state.value >=1){
        state.value -= 1
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    toggleBtn: (state)=>{
      state.value = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,toggleBtn } = counterSlice.actions

export default counterSlice.reducer