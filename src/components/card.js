import { initialCards} from "./constants.js";
import { enchancePicture, popupCard, closePopup } from "./modal.js";

const cardGrid = document.querySelector('.elements'); 

// функция создания карточки, навешивание слушателей на кнопки и картинку
export function createCard(cadrName, cardLink) {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    
      cardElement.querySelector('.element__picture').src = cardLink;
      cardElement.querySelector('.element__picture').alt = cadrName;
      cardElement.querySelector('.element__text').textContent = cadrName;
  
      cardElement.querySelector('.element__trash-button').addEventListener('click', event => {
        deleteCard(event.target);
      });
  
      cardElement.querySelector('.element__like-button').addEventListener('click', event => {
        changeColor(event.target)
      });
  
      cardElement.querySelector('.element__picture').addEventListener('click', event => {
        enchancePicture(event.target);
      });
  
      return cardElement;
  
};

// функция добавления карточки в массив карточек
export function insertCard (card) {
  cardGrid.prepend(card);
};

// функция добавления массива карточек на страницу
export function loadCards() {
  initialCards.forEach(element => {
    const card = createCard(element.name, element.link);
    insertCard(card);     
  });
}

// // 4. функция кнопки удаления карточки//

function deleteCard(but) {
  but.closest('.element').remove();
};


// 5. функция смены цвета сердечка //

function changeColor(evt) {
  evt.classList.toggle('element__like-button_color_black');
};


const pictureName = popupCard.querySelector('#line-3');
const pictureUrl = popupCard.querySelector('#line-4');

export function submitCard (evt) {
  
  evt.preventDefault();
  const card = createCard(pictureName.value, pictureUrl.value);
  insertCard(card);

  pictureUrl.value = '';
  pictureName.value = '';
        
  closePopup(popupCard);  

};