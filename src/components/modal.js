export const popupProfile = document.querySelector('#popup_profile');
export const popupCard = document.querySelector('#popup_card');
export const popupPicture = document.querySelector('#popup_picture');

export const profileEditButton = document.querySelector('.profile__edit-button');
export const cardAddButton = document.querySelector('.card__add-button');



// функция открывает popup
function openPopup(popup) {
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
export function openPopupProfile() {
  openPopup(popupProfile);

}

// функция открывает попап добавления карточки
export function openPopupCard() {
  openPopup(popupCard);
}

// функция открывает попап с большой картинкой
// import { popupPicture } from "../index.js";
const bigPicture = popupPicture.querySelector('#image');
const bigPictureText = popupPicture.querySelector('#text');

export function enchancePicture(image) {
  openPopup(popupPicture);
  bigPicture.src = image.src;
  bigPictureText.textContent = image.alt;
  bigPicture.alt = image.alt;
};


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

