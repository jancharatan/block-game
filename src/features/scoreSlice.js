import { createSlice } from '@reduxjs/toolkit';

export const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    score: 0
  },
  reducers: {
    resetScore: (state) => {
      state.score = 0;
    },
    incrementScore: (state, action) => {
        state.score += action.payload;
    },
  },
})

export const { resetScore, incrementScore } = scoreSlice.actions;

export default scoreSlice.reducer;
