import React, {useState} from 'react';
import Cross from './tiles/Cross.js';

const NewTile = ({hasBeenPlaced, currentTile}) => {
    const [crossSize, setCrossSize] = useState(64);

    if (hasBeenPlaced) {
        return <div className="new-tile" />
    } else {
        switch(currentTile) {
            case 'cross':
                return <Cross size={crossSize} setSize={setCrossSize} />
            default:
                return <div className="new-tile" />
        }
    }   
}

export default NewTile;
