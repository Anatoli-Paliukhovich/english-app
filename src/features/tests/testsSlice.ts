import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { testCards } from "../../data";

type CardState = {
  id: number;
  title: string;
  description: string;
  url: string;
  quiz: QuizState[];
};

export type QuizState = {
  id: number;
  question: string;
  answers: string[];
  answerR: string;
};

type TestsState = {
  isOpen: boolean;
  testData: CardState[];
  index: number;
  lock: boolean;
  score: number;
  result: boolean;
  currentTest: CardState;
  searchQuery: string;
};

const initialState: TestsState = {
  isOpen: false,
  testData: testCards,
  index: 0,
  lock: false,
  score: 0,
  result: false,
  searchQuery: "",
  currentTest: {
    id: 1,
    title: "",
    description: "",
    url: "",
    quiz: [
      {
        id: 1,
        question: "What is the capital of your country?",
        answers: ["London", "Moskow", "Minsk", "Pinsk"],
        answerR: "Pinsk",
      },
    ],
  },
};
const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
    setLock: (state, action: PayloadAction<boolean>) => {
      state.lock = action.payload;
    },
    setScore: (state, action: PayloadAction<(prev: number) => number>) => {
      state.score = action.payload(state.score);
    },
    setResult: (state, action: PayloadAction<boolean>) => {
      state.result = action.payload;
    },
    setCurrentTest: (state, action: PayloadAction<CardState>) => {
      state.currentTest = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export default testsSlice.reducer;
export const {
  setIsOpen,
  setIndex,
  setLock,
  setScore,
  setResult,
  setCurrentTest,
  setSearchQuery,
} = testsSlice.actions;
