// первоначальная загрузка 6 карточек и добавление карточек
import { loadCards } from "./components/card.js";
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


function submitProfile (evt) {
  evt.preventDefault();

  profileTitle.textContent = popupProfile.querySelector('#input-name').value;
  profileSubtitle.textContent = popupProfile.querySelector('#input-job').value;

  closePopup(popupProfile);
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
enableValidation(); 


// закрытие попап нажатием мышки и кнопки Esc
document.addEventListener('click', e => checkPopupOpened(e.target));
document.addEventListener('keydown', e => checkEscape(e.key, popupProfile));
document.addEventListener('keydown', e => checkEscape(e.key, popupCard));
document.addEventListener('keydown', e => checkEscape(e.key, popupPicture));


// document.addEventListener('click', e => console.log(e.target));
// document.addEventListener('click', function(){ console.log(this); arguments});

// document.querySelector('.popup_opened').addEventListener('click', e => console.log(e.target));

// index.js

import '../src/pages/index.css'; // импорт главного файла стилей


