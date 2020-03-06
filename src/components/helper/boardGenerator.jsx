function boardGenerator(height, width) {
    const board = [];
    for (let i = 0; i < height; i++) {
        board[i] = []
        for (let j = 0; j < width; j++) {
            board[i][j] = {
                row: i,
                column: j,
                isBody: false,
                isFruit: false,
                isPortal: false
            };
        }
    }
    return board;
}

export default boardGenerator;