import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { specData } from "../../data2";
export type Material = {
  id: number;
  title: string;
  author1: string;
  author2: string;
  src: string;
  href: string;
};

type MaterialState = {
  specification: Material[]; // Ключ - название файла, значение - URL файла
  isLoading: boolean;
};

const initialState: MaterialState = {
  specification: specData,
  isLoading: false,
};

const specificationSlice = createSlice({
  name: "specification",
  initialState,
  reducers: {
    setMaterials: (state, action: PayloadAction<Material[]>) => {
      state.specification = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setMaterials, setLoading } = specificationSlice.actions;
export default specificationSlice.reducer;
