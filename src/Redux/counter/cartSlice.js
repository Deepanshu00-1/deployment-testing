import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const cartSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        addItem: (state,newItem)=>{
            state.value = state.value.push(newItem)
            console.log(state.value);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItem } = cartSlice.actions
  
export default cartSlice.reducer

