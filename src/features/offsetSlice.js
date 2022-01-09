import { createSlice } from '@reduxjs/toolkit';

export const offsetSlice = createSlice({
  name: 'offset',
  initialState: {
    top: 0,
    left: 0,
  },
  reducers: {
    changeOffsetLeft: (state, action) => {
      state.left = action.payload
    },
    changeOffsetTop: (state, action) => {
        state.top = action.payload
      },
  },
})

export const { changeOffsetLeft, changeOffsetTop } = offsetSlice.actions;

export default offsetSlice.reducer;
