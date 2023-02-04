
// функция открывает popup
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc)
}

// функция закрывает попап
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc)
}

// функция устанавливает слушатель на кнопки закрытия
const buttonCloseList = document.querySelectorAll('.popup__close-button');

buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup)); 
})

// функция которая закрывает попап кликом мышки
export function checkPopupOpened (popupArea) {
    if (popupArea.classList.contains('popup_opened')) {
      closePopup(popupArea);
    }
};
  
// // функция которая закрывает попап нажатием Esc

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
} 
