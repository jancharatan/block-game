import React, { useEffect, useRef } from 'react';
import GameQuadrant from './GameQuadrant';
import { useSelector, useDispatch } from 'react-redux';
import '../Game.css';
import { changeOffsetLeft, changeOffsetTop } from '../features/offsetSlice';

const GameBoard = () => {
    const dispatch = useDispatch();
    const currentBoard = useSelector((state) => state.board.currentBoard);
    const boardRef = useRef();

    useEffect(() => {
        const { offsetTop, offsetLeft } = boardRef.current;
        dispatch(changeOffsetLeft(offsetLeft));
        dispatch(changeOffsetTop(offsetTop));
    })

    return (
        <div ref={boardRef}>
            <div className="three-wide-row">
                <GameQuadrant color="light" xModifier={0} currentQuadrant={[currentBoard[0], currentBoard[1], currentBoard[2]]} />
                <GameQuadrant color="dark" xModifier={3} currentQuadrant={[currentBoard[0], currentBoard[1], currentBoard[2]]} />
                <GameQuadrant color="light" xModifier={6} currentQuadrant={[currentBoard[0], currentBoard[1], currentBoard[2]]} />
            </div>
            <div className="three-wide-row">
                <GameQuadrant color="dark" xModifier={0} currentQuadrant={[currentBoard[3], currentBoard[4], currentBoard[5]]} />
                <GameQuadrant color="light" xModifier={3} currentQuadrant={[currentBoard[3], currentBoard[4], currentBoard[5]]} />
                <GameQuadrant color="dark" xModifier={6} currentQuadrant={[currentBoard[3], currentBoard[4], currentBoard[5]]} />
            </div>
            <div className="three-wide-row">
                <GameQuadrant color="light" xModifier={0} currentQuadrant={[currentBoard[6], currentBoard[7], currentBoard[8]]} />
                <GameQuadrant color="dark" xModifier={3} currentQuadrant={[currentBoard[6], currentBoard[7], currentBoard[8]]} />
                <GameQuadrant color="light" xModifier={6} currentQuadrant={[currentBoard[6], currentBoard[7], currentBoard[8]]} />
            </div>
        </div>
    );
}

export default GameBoard;
