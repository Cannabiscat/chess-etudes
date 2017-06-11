export default (event, obj, selector) => {
  obj.style.display = 'none';
  const elem = document.elementFromPoint(event.clientX, event.clientY);
  obj.style.display = 'flex';
  return elem.closest(selector);
};
