export const popupProfile = document.querySelector('#popup_profile');
export const popupCard = document.querySelector('#popup_card');
export const popupPicture = document.querySelector('#popup_picture');

export const profileEditButton = document.querySelector('.profile__edit-button');
export const cardAddButton = document.querySelector('.card__add-button');

// функция открывает попап редактирования профиля
export function openPopupPrifile() {
  popupProfile.classList.add('popup_opened');
  popupProfile.querySelector('.popup__close-button').addEventListener('click', event => {
    closePopup(popupProfile);
  });
}

// функция открывает попап добавления карточки
export function openPopupCard() {
  popupCard.classList.add('popup_opened');
  popupCard.querySelector('.popup__close-button').addEventListener('click', event => {
    closePopup(popupCard);
  });
}


const bigPicture = popupPicture.querySelector('#image');
const bigPictureText = popupPicture.querySelector('#text');
const bigPictureBtn = popupPicture.querySelector('.popup__close-button');

// функция открывает попап с большой картинкой
export function enchancePicture(image) {
  popupPicture.classList.add('popup_opened');
  popupPicture.style.backgroundColor = 'rgba(0 0 0 / 0.9)';
  bigPicture.src = image.src;
  bigPictureText.textContent = image.alt;
  bigPictureBtn.addEventListener('click', event => {
    closePopup(popupPicture);
  });
};

// функция закрывает попап
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// функция которая закрывает попап кликом мышки
export function checkPopupOpened (arg1) {
    if (arg1.classList.contains('popup_opened')) {
      closePopup(arg1);
    }
};
  
// функция которая закрывает попап нажатием Esc
export function checkEscape (arg2, popup) {
    if (arg2 === 'Escape') {
        closePopup(popup)
    }
}