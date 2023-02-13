
import { loadCards, cardId, createCard, insertCard} from "./components/card.js";
import { openPopup, closePopup, checkPopupOpened } from './components/modal.js';
import {config, addCardToServer, requestNewAvatar,
        removeCardFromServer, updateProfile, getCards, getProfile, profileId } from "./components/api.js";
import { enableValidation } from './components/validate.js';

import '../src/pages/index.css'; // импорт главного файла стилей

// объявляем переменные
export const popupProfile = document.querySelector('#popup_profile');
export const popupAvatar = document.querySelector('#popup_avatar');
export const popupCard = document.querySelector('#popup_card');
export const popupCardRemove = document.querySelector('#popup_card-remove');
export const popupPicture = document.querySelector('#popup_picture');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const cardAddButton = document.querySelector('.card__add-button');

// вызов функции получения данных профиля
getProfile()

// вызов функции загрузки картинок
export const initialCards = []
getCards()
   

// функция открывает попап с большой картинкой
const bigPicture = popupPicture.querySelector('#image');
const bigPictureText = popupPicture.querySelector('#text');

export function enchancePicture(image) {
  openPopup(popupPicture);
  bigPicture.src = image.src;
  bigPictureText.textContent = image.alt;
  bigPicture.alt = image.alt;
};

// навешиваем слушатели открытия попап на кнопки
profileEditButton.addEventListener('click', e => openPopup(popupProfile));
cardAddButton.addEventListener('click', e => openPopup(popupCard));

// редкатирование профиля
const profileForm = document.forms.formProfile;
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const profileAvatar = document.querySelector('.profile__avatar');
const profileInputName = profileForm.querySelector('#input-name');
const profileInputJob = profileForm.querySelector('#input-job');

profileInputName.value = profileTitle.textContent;
profileInputJob.value = profileSubtitle.textContent;

function submitProfile (evt) {
  // evt.preventDefault();
  updateProfile(profileInputName.value, profileInputJob.value);
  getProfile();  
  closePopup(popupProfile);
  
  enableValidation({
    formSelector: '.form',                          
    inputSelector: '.form__item',                   
    submitButtonSelector: '.form__button', 
    inactiveButtonClass: 'form__button_inactive', 
    inputErrorClass: 'form__item_type_error', 
    
  });
}

profileForm.addEventListener('submit', submitProfile);

// функция submit карточки при добавлении
const cardForm = document.forms.formCard;
const pictureName = cardForm.querySelector('#input-place');
const pictureUrl = cardForm.querySelector('#input-url');

function submitCard (evt) {
  // evt.preventDefault();

  const likes = []
  // const card = createCard(pictureName.value, pictureUrl.value, likes );
  // insertCard(card);
  
  addCardToServer(pictureName.value, pictureUrl.value);

  
  // const response =  addCardToServer(pictureName.value, pictureUrl.value);
  
  pictureUrl.value = '';
  pictureName.value = '';
        
  closePopup(popupCard);  
  
  enableValidation({
    formSelector: '.form',                          
    inputSelector: '.form__item',                   
    submitButtonSelector: '.form__button', 
    inactiveButtonClass: 'form__button_inactive', 
    inputErrorClass: 'form__item_type_error', 
    
  });
  
};

cardForm.addEventListener('submit', submitCard);

// включение валидации вызовом enableValidation
enableValidation({
  formSelector: '.form',                          
  inputSelector: '.form__item',                   
  submitButtonSelector: '.form__button', 
  inactiveButtonClass: 'form__button_inactive', 
  inputErrorClass: 'form__item_type_error', 
  
});


// закрытие попап нажатием мышки
popupCard.addEventListener('click', e => checkPopupOpened(e.target));
popupProfile.addEventListener('click', e => checkPopupOpened(e.target));
popupPicture.addEventListener('click', e => checkPopupOpened(e.target));


// функция удаления карточки через submit формы

const formCardRemove = document.forms.formCardRemove;

function submitCardRemove () {
  removeCardFromServer(cardId)
  closePopup(popupCardRemove);
}

formCardRemove.addEventListener('submit', submitCardRemove);


// функция открытия формы добавления аватара

function openPopupAvatar() {
  openPopup(popupAvatar);
}

const avatarOverlay = document.querySelector('.profile__avatar-overlay');
avatarOverlay.addEventListener('click', openPopupAvatar);

// функция изменения аватара

const formAvatar = document.forms.formAvatar;
const inputAvatarUrl = formAvatar.querySelector('#input-url-avatar');

function submitNewAvatar () {
    const newAvatar = inputAvatarUrl.value;
    requestNewAvatar(newAvatar);    
    closePopup(popupAvatar);
    formAvatar.reset();
}

formAvatar.addEventListener('submit', submitNewAvatar);

