const openModalBtn = document.querySelector('.order-list__button');
const backdrop = document.querySelector('.backdrop-stores');
const modal = document.querySelector('.modal-stores');
const closeModalBtn = document.querySelector('.modal-stores__close');

openModalBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
});

closeModalBtn.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
});