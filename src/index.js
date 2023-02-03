// первоначальная загрузка 6 карточек и добавление карточек
import { loadCards, createCard, insertCard } from "./components/card.js";
loadCards();
popupCard.addEventListener('submit', submitCard);

// открытие и закрытие попап
import { popupPicture, popupCard, popupProfile, closePopup } from './components/modal.js';
import { profileEditButton, cardAddButton } from './components/modal.js';
import { openPopupPrifile, openPopupCard } from './components/modal.js'
import { checkEscape, checkPopupOpened } from './components/modal.js'

profileEditButton.addEventListener('click', openPopupPrifile);
cardAddButton.addEventListener('click', openPopupCard);


// редкатирование профиля
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileInputName = document.querySelector('#input-name');
const profileInputJob = document.querySelector('#input-job');


function submitProfile (evt) {
  evt.preventDefault();
  profileTitle.textContent = profileInputName.value;
  profileSubtitle.textContent = profileInputJob.value;
  
  closePopup(popupProfile);

  profileInputName.value = '';
  profileInputJob.value = '';
}

popupProfile.addEventListener('submit', submitProfile);

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

};


// валидация всех полей всех форм
import { enableValidation } from './components/validate.js';
// enableValidation(); 

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


