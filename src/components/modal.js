
// функция открывает popup
export function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// функция закрывает попап
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// функция устанавливает слушатель на кнопки закрытия
const buttonCloseList = document.querySelectorAll('.popup__close-button');

buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup)); 
})

// функция открывает попап редактирования профиля

import { popupProfile } from "../index.js";
export function openPopupProfile() {
  openPopup(popupProfile);

}

// функция открывает попап добавления карточки
import { popupCard } from "../index.js";
export function openPopupCard() {
  openPopup(popupCard);
}

// // функция открывает попап с большой картинкой
// import { popupPicture } from "../index.js";
// const bigPicture = popupPicture.querySelector('#image');
// const bigPictureText = popupPicture.querySelector('#text');

// export function enchancePicture(image) {
//   openPopup(popupPicture);
//   bigPicture.src = image.src;
//   bigPictureText.textContent = image.alt;
//   bigPicture.alt = image.alt;
// };


// функция которая закрывает попап кликом мышки
export function checkPopupOpened (popupArea) {
    if (popupArea.classList.contains('popup_opened')) {
      closePopup(popupArea);
    }
};
  
// функция которая закрывает попап нажатием Esc
export function checkEscape (buttonKey, popup) {
    if (buttonKey === 'Escape') {
        closePopup(popup)
    }
}

