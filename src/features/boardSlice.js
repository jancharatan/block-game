import { createSlice } from '@reduxjs/toolkit';

const emptyBoard = [
  [false, false, false, false, false, false, false, false, false], 
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false], 
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false]
]

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    currentBoard: emptyBoard,
  },
  reducers: {
    changeBoard: (state, action) => {
      state.currentBoard = action.payload
    },
    resetBoard: (state) => {
      state.currentBoard = emptyBoard
    },
  },
})

export const { changeBoard, resetBoard } = boardSlice.actions;

export default boardSlice.reducer;
