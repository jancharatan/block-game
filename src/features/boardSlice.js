import { createSlice } from '@reduxjs/toolkit';

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    currentBoard: [
        [false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false], 
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false]],
  },
  reducers: {
    changeBoard: (state, action) => {
      state.currentBoard = action.payload
    },
  },
})

export const { changeBoard } = boardSlice.actions;

export default boardSlice.reducer;
