import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ceData } from "../../data2";
export type CE = {
  id: number;
  title: string;
  variant: string;
  href: string;
};

type CEState = {
  ce: CE[];
  isLoading: boolean;
};

const initialState: CEState = {
  ce: ceData,
  isLoading: false,
};

const ceSlice = createSlice({
  name: "ce",
  initialState,
  reducers: {
    setRT: (state, action: PayloadAction<CE[]>) => {
      state.ce = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setRT, setLoading } = ceSlice.actions;
export default ceSlice.reducer;
