import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import Draggable from 'react-draggable';
import '../Game.css';
import { findTile } from '../functions/findTile';
import { checkBoard } from '../functions/checkBoard';
import { tryToPlace } from '../functions/tryToPlace';
import { changeBoard } from '../features/boardSlice';
import { incrementScore } from '../features/scoreSlice';

const Cross = ({ size, setSize }) => {
    const dispatch = useDispatch();
    const [isDragging, setIsDragging] = useState(false);
    const offsetLeft = useSelector(state => state.offset.left);
    const offsetTop = useSelector(state => state.offset.top);
    const currentBoard = useSelector(state => state.board.currentBoard);

    const startedDragging = (event, items) => {
        setSize(96);
        setIsDragging(true);
    }
    
    const stoppedDragging = (event) => {
        const tile = findTile(event.target.getBoundingClientRect(), offsetLeft, offsetTop);
        
        if (tile === -1) {
            console.log('out of bounds');
            setSize(64);
            setIsDragging(false);
            return;
        }

        const tileRow = tile[0];
        const tileColumn = tile[1];

        if (tryToPlace(currentBoard, [[tileRow, tileColumn + 1], [tileRow + 1, tileColumn], [tileRow + 1, tileColumn + 1], [tileRow + 1, tileColumn + 2], [tileRow + 2, tileColumn + 1]])) {
            var updatedBoard = JSON.parse(JSON.stringify(currentBoard)); 
            updatedBoard[tileRow][tileColumn + 1] = true;
            updatedBoard[tileRow + 1][tileColumn] = true;
            updatedBoard[tileRow + 1][tileColumn + 1] = true;
            updatedBoard[tileRow + 1][tileColumn + 2] = true;
            updatedBoard[tileRow + 2][tileColumn + 1] = true;
            const scoreAndBoard = checkBoard(updatedBoard, 5);
            dispatch(changeBoard(scoreAndBoard[0]));
            dispatch(incrementScore(scoreAndBoard[1]));
        }

        setSize(64);
        setIsDragging(false);
    }

    return (
        <div className="new-tile">
            <Draggable onStart={startedDragging} onStop={stoppedDragging} position={!isDragging ? {x: 0, y: 0} : undefined}>
                <svg version={1} width={size} height={size}>
                    <rect style={{pointerEvents: "none"}} x={size/3} y="0" width={size/3} height={size/3} fill="black" />
                    <rect style={{pointerEvents: "none"}} x="0" y={size/3} width={size/3} height={size/3} fill="black" />
                    <rect style={{pointerEvents: "none"}} x={size/3} y={size/3} width={size/3} height={size/3} fill="black" />
                    <rect style={{pointerEvents: "none"}} x={size/3 * 2} y={size/3} width={size/3} height={size/3} fill="black" />
                    <rect style={{pointerEvents: "none"}} x={size/3} y={size/3 * 2} width={size/3} height={size/3} fill="black" />
                </svg> 
            </Draggable>
        </div> 
    )
};

export default Cross;
