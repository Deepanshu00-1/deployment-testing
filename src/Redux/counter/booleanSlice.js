import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const booleanSlice = createSlice({
  name: 'boolean',
  initialState,
  reducers: {
    toggle: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value;
    },
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle, setTrue, setFalse } = booleanSlice.actions

export default booleanSlice.reducer