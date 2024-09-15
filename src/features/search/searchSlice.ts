import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
  searchQuery: string;
  value: string;
};

const initialState: SearchState = {
  searchQuery: "",
  value: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setSearchQuery, setValue } = searchSlice.actions;
