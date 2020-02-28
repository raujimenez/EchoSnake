import pointOnBody from './pointOnBody.js';

function generateFruit(width, height, board) {
    let spawnedOnBody = false;
    let finalX = 1;
    let finalY = 1;
    do {
        // could be a better way but i am just running and gunning
        const potentialX = Math.floor(Math.random() * width);
        const potentialY = Math.floor(Math.random() * height); 
        if (!pointOnBody(potentialX, potentialY, board)) {
            finalX = potentialX;
            finalY = potentialY;
            spawnedOnBody = true;
        }
    } while(!spawnedOnBody);

    return [finalX, finalY];
}

export default generateFruit;