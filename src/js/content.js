const items = document.querySelectorAll('.list__item');

document.addEventListener('click', function (evt) {
  const target = evt.target;
  if (target.className !== 'icon') return;

  let item = event.target.closest('.list__item');
  item.classList.toggle('hide');
});
