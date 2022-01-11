import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import Draggable from 'react-draggable';
import '../Game.css';
import { findTile } from '../functions/findTile';
import { checkBoard } from '../functions/checkBoard';
import { tryToPlace } from '../functions/tryToPlace';
import { changeBoard } from '../features/boardSlice';
import { incrementScore } from '../features/scoreSlice';
import { resetFirst, resetSecond, resetThird } from '../features/newTileSlice';

const Tile = ({ slot, svg, size, score, setSize, tileList }) => {
    const dispatch = useDispatch();
    const [isDragging, setIsDragging] = useState(false);
    const offsetLeft = useSelector(state => state.offset.left);
    const offsetTop = useSelector(state => state.offset.top);
    const currentBoard = useSelector(state => state.board.currentBoard);

    const startedDragging = () => {
        setSize(size * 2);
        setIsDragging(true);
    }
    
    const stoppedDragging = (event) => {
        const tile = findTile(event.target.getBoundingClientRect(), offsetLeft, offsetTop);
        
        if (tile === -1) {
            setSize(size * 1/2);
            setIsDragging(false);
            return;
        }

        const tileRow = tile[0];
        const tileColumn = tile[1];

        var tileListFormatted = [];

        for (let i = 0; i < tileList.length; i++) {
            tileListFormatted.push([tileRow + tileList[i][0], tileColumn + tileList[i][1]]);
        } 

        if (tryToPlace(currentBoard, tileListFormatted)) {
            var updatedBoard = JSON.parse(JSON.stringify(currentBoard)); 
            for (let i = 0; i < tileListFormatted.length; i++) {
                updatedBoard[tileListFormatted[i][0]][tileListFormatted[i][1]] = true;
            }
            const scoreAndBoard = checkBoard(updatedBoard, score);
            
            dispatch(changeBoard(scoreAndBoard[0]));
            dispatch(incrementScore(scoreAndBoard[1]));
            
            if (slot === 0) dispatch(resetFirst());
            if (slot === 1) dispatch(resetSecond());
            if (slot === 2) dispatch(resetThird());
        }
        
        setSize(size * 1/2);
        setIsDragging(false);
    }

    return (
        <div className="new-tile">
            <Draggable onStart={startedDragging} onStop={stoppedDragging} position={!isDragging ? {x: 0, y: 0} : undefined}>
                {svg} 
            </Draggable>
        </div> 
    )
};

export default Tile;
