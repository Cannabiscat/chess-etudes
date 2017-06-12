import getPosition from './getPosition';
import moveAt from './moveAt';
import findPlaceBySelector from './findPlaceBySelector';

export default (obj, fieldCoords, cellSize, e) => {
  const old = {
    left: `${getPosition(obj).left}px`,
    top: `${getPosition(obj).top}px`,
  };
  obj.style.position = 'absolute';
  obj.style.zIndex = 9999;

  moveAt(e, obj, fieldCoords, cellSize);

  document.body.appendChild(obj);

  document.onmousemove = (ev) => {
    moveAt(ev, obj, fieldCoords, cellSize);
  };

  obj.onmouseup = (ev) => {
    document.onmousemove = null;

    if (!findPlaceBySelector(ev, obj, '.droppable')) {
      if (obj.classList.contains('king')) {
        if (!findPlaceBySelector(ev, obj, '.kings')) {
          obj.style.left = old.left;
          obj.style.top = old.top;
        }
      } else obj.remove();
    }
  };
  obj.ondragstart = () => false;
};
