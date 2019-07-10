function $(id) {
  return document.getElementById(id);
}
function hasClass(elem, className) {
  return elem.className.split(' ').includes(className)
}
function removeClass(elem, className) {
  elem.className = elem.className.split(' ').filter(cn => cn !== className).join(' ');
  return elem;
}
function toggleClass(elem, className) {
  if(hasClass(elem, className)) {
    removeClass(elem, className);
  } else {
    elem.className += ' ' + className;
  } 
  return elem;
}