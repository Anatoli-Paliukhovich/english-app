import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { olympiadsData } from "../../data";
export type Material = {
  id: number;
  title: string;
  author1: string;
  author2: string;
  src: string;
  href: string;
};

type MaterialState = {
  olympiads: Material[];
  isLoading: boolean;
};

const initialState: MaterialState = {
  olympiads: olympiadsData,
  isLoading: false,
};

const olympiadSlice = createSlice({
  name: "olympiads",
  initialState,
  reducers: {
    setMaterials: (state, action: PayloadAction<Material[]>) => {
      state.olympiads = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setMaterials, setLoading } = olympiadSlice.actions;
export default olympiadSlice.reducer;
