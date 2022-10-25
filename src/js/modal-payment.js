const openModalBtns = document.querySelector("[openmodal]");
const backdrop = document.querySelector('.backdrop-payment');
const modal = document.querySelector('.modal-payment');
const closeModalBtn = document.querySelector('.modal-payment__close');

openModalBtns.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
});

closeModalBtn.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
});