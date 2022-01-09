import { configureStore } from '@reduxjs/toolkit';
import boardSlice from '../features/boardSlice';
import offsetSlice from '../features/offsetSlice';
import newTileSlice from '../features/newTileSlice';
import scoreSlice from '../features/scoreSlice';

export default configureStore({
  reducer: {
      board: boardSlice,
      offset: offsetSlice,
      newTile: newTileSlice,
      score: scoreSlice,
  },
})
