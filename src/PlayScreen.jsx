import React from 'react';
import GameBoard from './board/GameBoard';
import NewTile from './NewTile';
import { RiRestartFill } from 'react-icons/ri';
import { useSelector, useDispatch } from "react-redux";
import './Game.css';
import { resetBoard } from './features/boardSlice';
import { resetGameOver, resetScore, setGameOver } from './features/gameSlice';
import { generateNewTiles } from './features/newTileSlice';
import { canPlaceTiles } from './functions/canPlaceTiles';

const PlayScreen = () => {
    const dispatch = useDispatch();
    const score = useSelector(state => state.game.score);
    const newTiles = useSelector(state => state.newTile.newTiles);
    const board = useSelector(state => state.board.currentBoard);
    const gameOver = useSelector(state => state.game.gameOver);

    if (newTiles.every(tile => tile === "")) {
        dispatch(generateNewTiles());
    }

    if (!canPlaceTiles(board, newTiles)) {
        dispatch(setGameOver());
    }

    const restartGame = () => {
        dispatch(resetBoard());
        dispatch(resetScore());
        dispatch(generateNewTiles());
        dispatch(resetGameOver())
    }

    return (
        <div className="play-area" >
            <div className="play-area-items">
                <div className="util-row">
                    <div style={{marginRight: '10px'}}>
                        <button onClick={restartGame} className="restart-button">
                            <RiRestartFill size="20px" />
                        </button>
                    </div>
                    Score: {score}
                </div>
                {gameOver ?  <div className="game-over-wrapper"> <div className="game-over stroke"> Game Over </div> <div className="game-over-screen"> <GameBoard/> </div> </div>  : <GameBoard />}
                <div className="new-tile-row">
                    <div style={{width: "33%"}}>
                        <NewTile slot={0} currentTile={newTiles[0]} />
                    </div>
                    <div style={{width: "33%"}}>
                        <NewTile slot={1} currentTile={newTiles[1]} />
                    </div>
                    <div style={{width: "33%"}}>
                        <NewTile slot={2} currentTile={newTiles[2]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayScreen;
