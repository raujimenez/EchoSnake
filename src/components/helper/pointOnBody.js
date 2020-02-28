function pointOnBody(pointX, pointY, bodyPoints) {
    for (let bodyPoint of bodyPoints) {
        if (pointX === bodyPoint[0] && pointY === bodyPoint[1]) {
            return true;
        } 
    }
    return false;
}

export default pointOnBody;