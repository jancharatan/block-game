import React from 'react';
import GameSquare from './GameSquare';
import '../Game.css';

const GameQuadrant = ({ color, currentQuadrant, xModifier }) => {
    const x = xModifier;
    return (
    <div className="quadrant">
        <div className="three-wide-row">
            <GameSquare color={color} isOccupied={currentQuadrant[0][0 + x]} />
            <GameSquare color={color} isOccupied={currentQuadrant[0][1 + x]} />
            <GameSquare color={color} isOccupied={currentQuadrant[0][2 + x]} />
        </div>
        <div className="three-wide-row">
            <GameSquare color={color} isOccupied={currentQuadrant[1][0 + x]} />
            <GameSquare color={color} isOccupied={currentQuadrant[1][1 + x]} />
            <GameSquare color={color} isOccupied={currentQuadrant[1][2 + x]} />
        </div>
        <div className="three-wide-row">
            <GameSquare color={color} isOccupied={currentQuadrant[2][0 + x]} />
            <GameSquare color={color} isOccupied={currentQuadrant[2][1 + x]} />
            <GameSquare color={color} isOccupied={currentQuadrant[2][2 + x]} />
        </div>
    </div>
    )
}

export default GameQuadrant;
