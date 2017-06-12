import '../assets/css/main.css';

import moving from './model/moving';

const field = document.getElementById('field');
const fieldCoords = {
  left: field.getBoundingClientRect().left,
  top: field.getBoundingClientRect().top,
};
const cellWidth = field.clientWidth / 8;
Array.prototype.slice
  .call(document.getElementsByClassName('piece'))
  .forEach((elem) => {
    elem.style.width = `${cellWidth}px`;
    elem.style.height = `${cellWidth}px`;
  });
document.onmousedown = (e) => {
  const obj = document
    .elementFromPoint(e.clientX, e.clientY)
    .closest('.draggable');
  const movingObject = obj.classList.contains('multiple')
    ? obj.cloneNode(true)
    : obj;
  movingObject.classList.remove('multiple');
  moving(movingObject, fieldCoords, cellWidth, e);
};
