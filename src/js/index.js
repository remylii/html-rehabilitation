const ripple_effect = event => {
  const cover = document.createElement('span');
  const coversize = event.target.offsetWidth;
  const loc = event.target.getBoundingClientRect();
  const x = event.pageX - loc.left - window.pageXOffset - (coversize / 2);
  const y = event.pageY - loc.top - window.pageYOffset - (coversize / 2);
  const pos = `top: ${y}px; left: ${x}px; height: ${coversize}px; width: ${coversize}px;`;

  event.target.appendChild(cover);
  cover.setAttribute('style', pos);
  cover.classList.add('ripple-effect');

  const remove_child = target => {
    return new Promise(resolve => {
      setTimeout(() => {
        target.querySelector(".ripple-effect").remove;
        resolve();
      }, 200);
    });
  }

  remove_child(event.target);
}

document.querySelectorAll('.ripple').forEach( function (elem) {
  elem.addEventListener('mousedown', ripple_effect);
});
