import { createSlice } from '@reduxjs/toolkit';
import tileList from '../tiles/tileList';

const getRandomTile = () => {
  const tileNames = Object.keys(tileList);
  return tileNames[Math.floor(Math.random()*tileNames.length)];
}

export const newTileSlice = createSlice({
  name: 'newTile',
  initialState: {
    newTiles: ["", "", ""]
  },
  reducers: {
    resetFirst: (state) => {
      state.newTiles[0] = "";
    },
    resetSecond: (state) => {
      state.newTiles[1] = "";
    },
    resetThird: (state) => {
      state.newTiles[2] = "";
    },
    generateNewTiles: (state) => {
      state.newTiles = [getRandomTile(), getRandomTile(), getRandomTile()];
    }
  },
})

export const { resetFirst, resetSecond, resetThird, generateNewTiles } = newTileSlice.actions;

export default newTileSlice.reducer;
