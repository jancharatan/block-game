import { tryToPlace } from "./tryToPlace";
import tileList from "../tiles/tileList";

export const canPlaceTiles = (board, tiles) => {
    const tileNames = tiles.filter(tile => tile !== "");
    
    if (tileNames.length === 0) {
        return true;
    }

    for (let i = 0; i < tileNames.length; i++) {
        for (let j = 0; j < 9; j++) {
            for (let k = 0; k < 9; k++) {
                const defaultList = tileList[tileNames[i]];
                var newList = defaultList.map(item => [item[0] + j, item[1] + k]);
                if (tryToPlace(board, newList)) {
                    return true;
                }
            }
        }
    }

    return false;
}
