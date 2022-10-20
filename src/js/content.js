const items = document.querySelectorAll('.faq__item');

document.addEventListener('click', function (evt) {
  const target = evt.target;
  if (target.className !== 'faq__button') return;

  let item = event.target.closest('.faq__item');
  item.classList.toggle('hide');
});
