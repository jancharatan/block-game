import React from 'react';
import GameBoard from './board/GameBoard';
import NewTile from './NewTile'
import './Game.css';

const PlayScreen = () => (
    <div className="play-area" >
        <div className="play-area-items">
            <GameBoard />
            <div className="new-tile-row">
                <NewTile currentTile="cross" />
                <NewTile />
                <NewTile />
            </div>
        </div>
        
    </div>
)

export default PlayScreen;
