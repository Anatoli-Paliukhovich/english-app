import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type HeaderState = {
  isBurger: boolean;
};

const initialState: HeaderState = {
  isBurger: false,
};
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setBurger: (state, action) => {
      state.isBurger = action.payload;
    },
  },
});

export default headerSlice.reducer;
export const { setBurger } = headerSlice.actions;
