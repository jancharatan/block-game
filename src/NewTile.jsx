import React, {useState} from 'react';
import Tile from './tiles/Tile';
import Cross from './tiles/Cross';
import SingleDot from './tiles/SingleDot';
import FiveAcross from './tiles/FiveAcross';
import TShape from './tiles/TShape';
import ReverseLShape from './tiles/ReverseLShape';

const NewTile = ({ slot, currentTile}) => {
    const [crossSize, setCrossSize] = useState(96 * (1/2));
    const [singleDotSize, setSingleDotSize] = useState(32 * (1/2));
    const [fiveAcrossSize, setFiveAcrossSize] = useState(160 * (1/2));
    const [tShapeSize, setTShapeSize] = useState(96 * (1/2));
    const [reverseLShapeSize, setReverseLShapeSize] = useState(96 * (1/2));

    switch(currentTile) {
        case 'cross':
            return <Tile slot={slot} svg={Cross(crossSize)} score={5} size={crossSize} setSize={setCrossSize} tileList={[[0, 1], [1, 0], [1, 1], [1, 2], [2, 1]]} />
        case 'singleDot':
            return <Tile slot={slot} svg={SingleDot(singleDotSize)} score={1} size={singleDotSize} setSize={setSingleDotSize} tileList={[[0, 0]]} />
        case 'fiveAcross':
            return <Tile slot={slot} svg={FiveAcross(fiveAcrossSize)} score={5} size={fiveAcrossSize} setSize={setFiveAcrossSize} tileList={[[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]]} />
        case 'tShape':
            return <Tile slot={slot} svg={TShape(tShapeSize)} score={5} size={tShapeSize} setSize={setTShapeSize} tileList={[[0, 0], [0, 1], [0, 2], [1, 1], [2, 1]]} />
        case 'reverseLShape':
            return <Tile slot={slot} svg={ReverseLShape(reverseLShapeSize)} score={4} size={reverseLShapeSize} setSize={setReverseLShapeSize} tileList={[[0, 1], [1, 1], [2, 1], [2, 0]]} />
        default:
            return <div className="new-tile" />
    }
}

export default NewTile;
