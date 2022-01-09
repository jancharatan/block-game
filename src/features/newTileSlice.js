import { createSlice } from '@reduxjs/toolkit';

export const newTileSlice = createSlice({
  name: 'newTile',
  initialState: {
    newTiles: ["", "", ""]
  },
  reducers: {
    changeFirst: (state, action) => {
        state.newTiles[0] = action.payload
    },
    changeSecond: (state, action) => {
        state.newTiles[1] = action.payload
    },
    changeThird: (state, action) => {
        state.newTiles[2] = action.payload
    },
  },
})

export const { changeFirst, changeSecond, changeThird } = newTileSlice.actions;

export default newTileSlice.reducer;
