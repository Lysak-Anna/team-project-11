function initializeModal(openModalBtnSelector, backdropSelector, modalSelector, closeModalBtnSelector) {
  const openModalBtns = document.querySelectorAll(openModalBtnSelector);
  const backdrop = document.querySelector(backdropSelector);
  const modal = document.querySelector(modalSelector);
  const closeModalBtn = document.querySelector(closeModalBtnSelector);

  function closeModal() {
    modal.classList.add('is-hidden');
    backdrop.classList.add('is-hidden');
    document.removeEventListener('keydown', onEscKeyDown);
    backdrop.removeEventListener('click', onBackdropClick);
    modal.removeEventListener('click', onModalClick);
  }

  function onEscKeyDown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  function onBackdropClick(event) {
    if (event.target === backdrop && !modal.contains(event.target)) {
      closeModal();
    }
  }

  function onModalClick(event) {
    if (!event.target.closest('.modal-stores__body, .modal-payment__body')) {
      closeModal();
    }
  }

  openModalBtns.forEach((openModalBtn) => {
    openModalBtn.addEventListener('click', () => {
      modal.classList.remove('is-hidden');
      backdrop.classList.remove('is-hidden');
      document.addEventListener('keydown', onEscKeyDown);
      backdrop.addEventListener('click', onBackdropClick);
      modal.addEventListener('click', onModalClick);
    });
  });

  closeModalBtn.addEventListener('click', () => {
    closeModal();
  });
}

initializeModal('[openmodal-stores]', '.backdrop-stores', '.modal-stores', '.modal-stores__close');
initializeModal('[openmodal-payment]', '.backdrop-payment', '.modal-payment', '.modal-payment__close');
