export const tryToPlace = (currBoard, tilesToTry) => {
    for (let i = 0; i < tilesToTry.length; i++) {
        if (tilesToTry[i][0] >= 9 || tilesToTry[i][1] >= 9 || currBoard[tilesToTry[i][0]][tilesToTry[i][1]]) {
            return false;
        }
    }
    return true;
}
