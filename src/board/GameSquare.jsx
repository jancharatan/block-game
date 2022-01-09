import React from 'react';
import '../Game.css';const GameSquare = ({ color, isOccupied }) => {
    if (isOccupied) {
        return <div className={`individual-square square-occupied`}/>
    } else {
        return <div className={`individual-square square-${color}`}/>
    }
};

export default GameSquare;
