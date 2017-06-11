import getOnGridCoords from './getOnGridCoords';
import setObjCoords from './setOnGridCoords';

export default (e, obj, fieldCoords, cellSize) => {
  setObjCoords(
    obj,
    getOnGridCoords(fieldCoords, cellSize, {
      left: e.pageX,
      top: e.pageY,
    }),
  );
};
