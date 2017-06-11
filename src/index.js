import '../assets/css/main.css';

import moving from './model/moving';

const field = document.getElementById('field');
const fieldCoords = {
  left: field.getBoundingClientRect().left,
  top: field.getBoundingClientRect().top,
};
const cellWidth = field.clientWidth / 8;
Array.prototype.slice
  .call(document.getElementsByClassName('draggable'))
  .forEach((elem) => {
    elem.style.width = `${cellWidth}px`;
    elem.style.height = `${cellWidth}px`;
    moving(elem, fieldCoords, cellWidth);
  });
Array.prototype.slice
  .call(document.getElementsByClassName('kings'))
  .forEach((elem) => {
    elem.style.width = `${cellWidth}px`;
    elem.style.height = `${cellWidth}px`;
  });
