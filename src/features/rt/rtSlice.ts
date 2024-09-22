import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rtData } from "../../data2";
export type RT = {
  id: number;
  title: string;
  variant: string;
  href: string;
};

type RTState = {
  rt: RT[];
  isLoading: boolean;
};

const initialState: RTState = {
  rt: rtData,
  isLoading: false,
};

const rtSlice = createSlice({
  name: "rt",
  initialState,
  reducers: {
    setRT: (state, action: PayloadAction<RT[]>) => {
      state.rt = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setRT, setLoading } = rtSlice.actions;
export default rtSlice.reducer;
