import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type HeaderState = {
  isBurger: boolean;
  isScrolled: boolean;
};

const initialState: HeaderState = {
  isBurger: false,
  isScrolled: false,
};
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setBurger: (state, action: PayloadAction<boolean>) => {
      state.isBurger = action.payload;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
  },
});

export default headerSlice.reducer;
export const { setBurger, setScrolled } = headerSlice.actions;
