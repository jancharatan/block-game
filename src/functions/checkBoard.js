const checkList = (arr) => {
    return arr.every(v => v === true);
}

export const checkBoard = (board, tileSize) => {
    var score = tileSize;
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
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            var currQuadrant = [];
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    currQuadrant.push(board[i + k][j + l])
                }
            }
            if (checkList(currQuadrant)) {
                quadrants.push([i, j]);
            }
        }
    }

    // update score, giving extra score if you get multiple quadrants/rows/columns with a single move
    const multiplier = rows.length + columns.length + quadrants.length;
    score += 9 * (multiplier * (multiplier + 1) / 2);

    // update the board (this means we clear any quadrants/rows/columns that are completed)
    var updatedBoard = JSON.parse(JSON.stringify(board)); 

    // clear any rows that may have been completed
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < 9; j++) {
            updatedBoard[rows[i]][j] = false;
        }
    }

    // clear any columns that may have been completed
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < 9; j++) {
            updatedBoard[j][columns[i]] = false;
        }
    }

    // clear any quadrants that may have been completed
    for (let i = 0; i < quadrants.length; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                updatedBoard[quadrants[i][0] + j][quadrants[i][1] + k] = false;
            }
        }
    }

    return[updatedBoard, score];
}