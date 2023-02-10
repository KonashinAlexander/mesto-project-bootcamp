// import { initialCards} from "./constants.js";
import { enchancePicture, initialCards, profileId, popupCardRemove, addLike, deleteLike } from "../index.js";
import { openPopup } from "./modal.js";



const cardGrid = document.querySelector('.elements'); 
const cardTemplate = document.querySelector('#card').content;


// функция создания карточки, навешивание слушателей на кнопки и картинку
export function createCard(cardName, cardLink, likes, id, owner) {
  
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardPicture = cardElement.querySelector('.element__picture');
  const cardText = cardElement.querySelector('.element__text');
  let cardLikesNumber = cardElement.querySelector('.element__likes-number')
    
  cardElement.setAttribute('id', id);
  cardElement.setAttribute('owner', owner._id);

  if (cardElement.getAttribute('owner') !== profileId) {
    cardElement.querySelector('.element__trash-button').classList.add('element__trash-button_invisible');
    cardElement.querySelector('.element__trash-button').setAttribute('disabled', true);
  }

  cardPicture.src = cardLink;
  cardPicture.alt = cardName;
  cardText.textContent = cardName; 
  cardLikesNumber.textContent = likes.length;
  

  cardElement.querySelector('.element__trash-button').addEventListener('click', event => {
    getCardId(event.target)
  });

  cardElement.querySelector('.element__like-button').addEventListener('click', event => {
    changeColor(event.target)
  });

  // cardElement.querySelector('.element__like-button').addEventListener('click', event => {
    // addOneLike(event)
    // console.log(cardId)
    // console.log(cardLikesNumber)
  // });

  cardElement.querySelector('.element__picture').addEventListener('click', event => {
    enchancePicture(event.target);
  });

  return cardElement;
  
};

// функция добавления карточки в массив карточек
export function insertCard (card) {
  cardGrid.append(card);
};

// функция добавления массива карточек на страницу
export function loadCards() {
  initialCards.forEach(element => {
    const card = createCard(element.name, 
                            element.link, 
                            element.likes, 
                            element._id,
                            element.owner);
    insertCard(card);    
  });
}

// // 4. функция открытия попап формы удаления карточки//
export let cardId = '';

function getCardId(but) {
  openPopup(popupCardRemove)
  return cardId = but.closest('.element').id;    
};


// 5. функция смены цвета сердечка и добавления/удаления одного лайка //

function changeColor(evt) {  
  
  cardId = evt.closest('.element').id;
  if (evt.classList.contains('element__like-button_color_black')) {
    evt.nextElementSibling.textContent = Number(evt.nextElementSibling.textContent) - 1
    deleteLike(cardId);
    evt.classList.toggle('element__like-button_color_black');
  } else {
    evt.nextElementSibling.textContent = Number(evt.nextElementSibling.textContent) + 1
    addLike(cardId);
    evt.classList.toggle('element__like-button_color_black');
  }
  
};


