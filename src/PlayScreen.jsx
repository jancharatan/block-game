import React from 'react';
import GameBoard from './board/GameBoard';
import NewTile from './NewTile';
import { RiRestartFill } from 'react-icons/ri';
import { useSelector, useDispatch } from "react-redux";
import './Game.css';
import { resetBoard } from './features/boardSlice';
import { resetScore } from './features/scoreSlice';
import { generateNewTiles } from './features/newTileSlice';

const PlayScreen = () => {
    const dispatch = useDispatch();
    const score = useSelector(state => state.score.score);
    const newTiles = useSelector(state => state.newTile.newTiles);

    if (newTiles.every(tile => tile === "")) {
        dispatch(generateNewTiles());
    }

    const restartGame = () => {
        dispatch(resetBoard());
        dispatch(resetScore());
        dispatch(generateNewTiles());
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
                <GameBoard />
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
