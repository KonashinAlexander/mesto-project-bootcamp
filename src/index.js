
import { loadCards, cardId, createCard, insertCard} from "./components/card.js";
import { openPopup, closePopup, checkPopupOpened } from './components/modal.js';
import { addCardToServer, requestNewAvatar,
        removeCardFromServer, updateProfile, getCards, getProfile } from "./components/api.js";
import { enableValidation } from './components/validate.js';
import { renderLoading } from "./components/util.js";

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
export let profileId ='';

getProfile().then(profile => {    
  profileTitle.textContent = profile.name;
  profileSubtitle.textContent = profile.about;
  profileAvatar.src = profile.avatar;
  profileAvatar.alt = profile.name; 
  profileId = profile._id; // запишем id моего профиля    
})
.catch(err => console.error(err))

// вызов функции загрузки картинок
export const initialCards = []

getCards().then(list => {    
  list.forEach(card => {
      initialCards.push(card)
  })
  loadCards();
}) 
.catch(err => console.error(err))

   

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

profileEditButton.addEventListener('click', (e) => {
  openPopup(popupProfile)
  profileInputName.value = profileTitle.textContent;
  profileInputJob.value = profileSubtitle.textContent;
});

cardAddButton.addEventListener('click', e => openPopup(popupCard));

// редкатирование профиля
const profileForm = document.forms.formProfile;
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const profileAvatar = document.querySelector('.profile__avatar');
const profileInputName = profileForm.querySelector('#input-name');
const profileInputJob = profileForm.querySelector('#input-job');
const profileFormButton = profileForm.querySelector('.form__button');

profileInputName.value = profileTitle.textContent;
profileInputJob.value = profileSubtitle.textContent;

function submitProfile (evt) {
  renderLoading(true, profileFormButton);

  updateProfile(profileInputName.value, profileInputJob.value)
  .then((result) => {
    profileTitle.textContent = result.name;
    profileSubtitle.textContent = result.about;
    closePopup(popupProfile);
  })
  .catch(err => {console.log(err)})
  .finally(renderLoading(false, profileFormButton))
}

profileForm.addEventListener('submit', submitProfile);

// функция submit карточки при добавлении
const cardForm = document.forms.formCard;
const pictureName = cardForm.querySelector('#input-place');
const pictureUrl = cardForm.querySelector('#input-url');
const cardFormButton = cardForm.querySelector('.form__button');

function submitCard (evt) {
  // evt.preventDefault();

  const likes = []
  renderLoading(true, cardFormButton);

  addCardToServer(pictureName.value, pictureUrl.value)
  .then(card => {
    const newCard = createCard(card.name, card.link, card.likes, card._id, card.owner);
    insertCard(newCard);
    closePopup(popupCard);
    evt.target.reset();
  })
  .catch(err => {console.log(err)})
  .finally(renderLoading(false, cardFormButton))  
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
  .then((c) => {
    document.getElementById(cardId).remove();
    closePopup(popupCardRemove);
  })
  .catch(err => {console.log(err)})  
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
const formAvatarButton = formAvatar.querySelector('.form__button');

function submitNewAvatar () {
    const newAvatar = inputAvatarUrl.value;
    renderLoading(true, formAvatarButton);

    requestNewAvatar(newAvatar).then((result) => {
      profileAvatar.src = result.avatar;
      closePopup(popupAvatar);
      formAvatar.reset();
      
    })
    .catch(err => {console.log(err)})
    .finally(renderLoading(false, formAvatarButton));
}

formAvatar.addEventListener('submit', submitNewAvatar);


