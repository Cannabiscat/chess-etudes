export default (fieldCoords, cellSize, currentCoords) => {
  const deltaX = currentCoords.left - fieldCoords.left;
  const deltaY = currentCoords.top - fieldCoords.top;
  const result = {
    left: `${fieldCoords.left + cellSize * Math.floor(deltaX / cellSize)}px`,
    top: `${fieldCoords.top + cellSize * Math.floor(deltaY / cellSize)}px`,
  };
  return result;
};
