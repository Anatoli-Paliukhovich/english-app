import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { materialsData } from "../../data";
type Material = {
  id: number;
  title: string;
  author1: string;
  author2: string;
  src: string;
  href: string;
};

type MaterialState = {
  materials: Material[]; // Ключ - название файла, значение - URL файла
  isLoading: boolean;
};

const initialState: MaterialState = {
  materials: materialsData,
  isLoading: false,
};

const materialSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {
    setMaterials: (state, action: PayloadAction<Material[]>) => {
      state.materials = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setMaterials, setLoading } = materialSlice.actions;
export default materialSlice.reducer;
