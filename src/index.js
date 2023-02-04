// первоначальная загрузка 6 карточек и добавление карточек
import { loadCards, createCard, insertCard } from "./components/card.js";
import { openPopup, closePopup } from './components/modal.js';
import { checkPopupOpened } from './components/modal.js'

// объявляем переменные
export const popupProfile = document.querySelector('#popup_profile');
export const popupCard = document.querySelector('#popup_card');
export const popupPicture = document.querySelector('#popup_picture');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const cardAddButton = document.querySelector('.card__add-button');

// функция первоначально загружает 6 карточек
loadCards();

// функция открывает попап с большой картинкой
const bigPicture = popupPicture.querySelector('#image');
const bigPictureText = popupPicture.querySelector('#text');

export function enchancePicture(image) {
  openPopup(popupPicture);
  bigPicture.src = image.src;
  bigPictureText.textContent = image.alt;
  bigPicture.alt = image.alt;
};

// навешивем слушатели открытия попап на кнопки
profileEditButton.addEventListener('click', e => openPopup(popupProfile));
cardAddButton.addEventListener('click', e => openPopup(popupCard));

// редкатирование профиля
const profileForm = document.forms.formProfile;
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileInputName = profileForm.querySelector('#input-name');
const profileInputJob = profileForm.querySelector('#input-job');


function submitProfile (evt) {
  evt.preventDefault();
  profileTitle.textContent = profileInputName.value;
  profileSubtitle.textContent = profileInputJob.value;
  
  closePopup(popupProfile);

  profileInputName.value = '';
  profileInputJob.value = '';

  enableValidation({
    formSelector: '.form',                          
    inputSelector: '.form__item',                   
    submitButtonSelector: '.form__button', 
    inactiveButtonClass: 'form__button_inactive', 
    inputErrorClass: 'form__item_type_error', 
    // errorClass: 'popup__error_visible'
  });
}

profileForm.addEventListener('submit', submitProfile);

// функция submit карточки при добавлении
const cardForm = document.forms.formCard;
const pictureName = cardForm.querySelector('#input-place');
const pictureUrl = cardForm.querySelector('#input-url');

function submitCard (evt) {
  evt.preventDefault();

  const card = createCard(pictureName.value, pictureUrl.value);
  insertCard(card);

  pictureUrl.value = '';
  pictureName.value = '';
        
  closePopup(popupCard);  
  
  enableValidation({
    formSelector: '.form',                          
    inputSelector: '.form__item',                   
    submitButtonSelector: '.form__button', 
    inactiveButtonClass: 'form__button_inactive', 
    inputErrorClass: 'form__item_type_error', 
    // errorClass: 'popup__error_visible'
  });
  
};

cardForm.addEventListener('submit', submitCard);


// валидация всех полей всех форм
import { enableValidation } from './components/validate.js';

// включение валидации вызовом enableValidation

enableValidation({
  formSelector: '.form',                          
  inputSelector: '.form__item',                   
  submitButtonSelector: '.form__button', 
  inactiveButtonClass: 'form__button_inactive', 
  inputErrorClass: 'form__item_type_error', 
  // errorClass: 'popup__error_visible'
});


// закрытие попап нажатием мышки
popupCard.addEventListener('click', e => checkPopupOpened(e.target));
popupProfile.addEventListener('click', e => checkPopupOpened(e.target));
popupPicture.addEventListener('click', e => checkPopupOpened(e.target));


import '../src/pages/index.css'; // импорт главного файла стилей


