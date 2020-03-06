function addBodyPoints(board, bodyPoints) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = {
                ...board[i][j],
                isBody: false
            };
        }
    }

    for (let bodyPoint of bodyPoints) {
        board[bodyPoint[1]][bodyPoint[0]] = {
            ...board[bodyPoint[1]][bodyPoint[0]],
            isBody: true 
        }
    }
}

export default addBodyPoints;