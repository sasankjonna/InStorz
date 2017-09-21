'use strict';

document.addEventListener('click', click);

function click(e) {
  var el = undefined;

  el = e.target;

  if (el !== e.currentTarget) {
    if (el.nodeName === 'BUTTON') {

      if (el.classList.contains('is-active')) {
        el.classList.remove('is-active');
      } else {
        el.classList.add('is-active');
      }
    }
  }
  event.stopPropagation();
}