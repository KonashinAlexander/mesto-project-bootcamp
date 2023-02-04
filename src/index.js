// первоначальная загрузка 6 карточек и добавление карточек
import { loadCards, createCard, insertCard } from "./components/card.js";
loadCards();

// открытие и закрытие попап
// const popupProfile = document.querySelector('#popup_profile');
// const popupCard = document.querySelector('#popup_card');
// const popupPicture = document.querySelector('#popup_picture');
// const profileEditButton = document.querySelector('.profile__edit-button');
// const cardAddButton = document.querySelector('.card__add-button');


import { closePopup, popupPicture, popupCard, popupProfile } from './components/modal.js';
import { profileEditButton, cardAddButton } from './components/modal.js';
import { openPopupProfile, openPopupCard } from './components/modal.js'
import { checkEscape, checkPopupOpened } from './components/modal.js'

profileEditButton.addEventListener('click', openPopupProfile);
cardAddButton.addEventListener('click', openPopupCard);
popupCard.addEventListener('submit', submitCard);

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
const pictureName = popupCard.querySelector('#input-place');
const pictureUrl = popupCard.querySelector('#input-url');

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


// закрытие попап нажатием мышки и кнопки Esc
document.addEventListener('click', e => checkPopupOpened(e.target));
document.addEventListener('keydown', e => checkEscape(e.key, popupProfile));
document.addEventListener('keydown', e => checkEscape(e.key, popupCard));
document.addEventListener('keydown', e => checkEscape(e.key, popupPicture));


import '../src/pages/index.css'; // импорт главного файла стилей


