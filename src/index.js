// первоначальная загрузка 6 карточек и добавление карточек
import { loadCards, submitCard } from "./components/card.js";
loadCards();
popupCard.addEventListener('submit', submitCard);

// открытие и закрытие попап
import { popupPicture, popupCard, popupProfile } from './components/modal.js';
import { profileEditButton, cardAddButton } from './components/modal.js';
import { openPopupPrifile, openPopupCard } from './components/modal.js'
import { checkEscape, checkPopupOpened } from './components/modal.js'

profileEditButton.addEventListener('click', openPopupPrifile);
cardAddButton.addEventListener('click', openPopupCard);


// редкатирование профиля
import { submitProfile } from './components/profile.js';
popupProfile.addEventListener('submit', submitProfile);


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
