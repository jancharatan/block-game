import { configureStore } from '@reduxjs/toolkit';
import boardSlice from '../features/boardSlice';
import offsetSlice from '../features/offsetSlice';
import newTileSlice from '../features/newTileSlice';
import gameSlice from '../features/gameSlice';

export default configureStore({
  reducer: {
      board: boardSlice,
      offset: offsetSlice,
      newTile: newTileSlice,
      game: gameSlice,
  },
})
