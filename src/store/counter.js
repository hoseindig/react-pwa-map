import { createSlice } from "@reduxjs/toolkit";

// Counter
const initialCounterState = { counter: 0, toggle: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementCustom: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggleCounter: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const counteActions = counterSlice.actions;
export default counterSlice.reducer;
