import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    score: 0,
    gameOver: false
  },
  reducers: {
    resetScore: (state) => {
      state.score = 0;
    },
    incrementScore: (state, action) => {
      state.score += action.payload;
    },
    setGameOver: (state) => {
      state.gameOver = true;
    },
    resetGameOver: (state) => {
      state.gameOver = false;
    }
  },
})

export const { resetScore, incrementScore, setGameOver, resetGameOver } = gameSlice.actions;

export default gameSlice.reducer;
