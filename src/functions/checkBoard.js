const checkList = (arr) => {
    return arr.every(v => v === true);
}

export const checkBoard = (board, tileSize) => {
    var rows = [];
    var columns = [];
    var quadrants = [];

    // check rows
    for (let i = 0; i < 9; i++) {
        if (checkList(board[i])) {
            rows.push(i);
        }
    }

    // check columns
    for (let i = 0; i < 9; i++) {
        var currCol = [];
        for (let j = 0; j < 9; j++) {
            currCol.push(board[j][i]);
        }

        if (checkList(currCol)) {
            columns.push(i);
        }
    }

    // check quadrants
    

    console.log(rows, columns);

    return[board, tileSize];
}