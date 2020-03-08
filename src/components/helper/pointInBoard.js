function pointInBoard(coordinateX, coordinateY, boardMaxSizeX, boardMaxSizeY) {
  if (coordinateX < 0 || coordinateX > boardMaxSizeX) return false;
  if (coordinateY < 0 || coordinateY > boardMaxSizeY) return false;
  return true;
}

export default pointInBoard;
