export const findTile = (locationDropped, offsetLeft, offsetTop) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (locationDropped.x - 16 < offsetLeft + (j * 32) && 
                locationDropped.x + 16 > offsetLeft + (j * 32) && 
                locationDropped.y - 16 < offsetTop + (i * 32) && 
                locationDropped.y + 16 > offsetTop + (i * 32)) {
                return [i, j];
            }
        }
    }
    return -1;
}
