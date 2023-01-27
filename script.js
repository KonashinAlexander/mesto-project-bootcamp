// 1. JS добавляет 6 карточек при загрузке //

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    
  ];



const cardGrid = document.querySelector('.elements');  

function loadCards() {
  initialCards.forEach(element => {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__picture').src = element.link;
    cardElement.querySelector('.element__picture').alt = element.name;
    cardElement.querySelector('.element__text').textContent = element.name;

    cardGrid.prepend(cardElement);
    
});
}

loadCards();
 
// функции открытия и закрытия попап

const popupProfile = document.querySelector('#popup_profile');
const popupCard = document.querySelector('#popup_card');
const popupPicture = document.querySelector('#popup_picture');

const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.card__add-button');
const closeButton = document.querySelector('.popup__close-button');


profileEditButton.addEventListener('click', function() {
  popupProfile.classList.add('popup_click_button');
  
});



cardAddButton.addEventListener('click', function() {
  popupCard.classList.add('popup_click_button');
});

// функция открытия попап с картинкой из карточки

function enchancePicture(card) {
  popupPicture.classList.add('popup_click_picture');
  popupPicture.querySelector('#image').src = card.src;
  popupPicture.querySelector('#text').textContent = card.parentNode.querySelector('.element__text').textContent;
};

// функция закрытия попап

function closePopup() {
  popupProfile.classList.remove('popup_click_button');
  popupCard.classList.remove('popup_click_button');
  popupPicture.classList.remove('popup_click_picture');
}


// функция редактирования профиля + кнопка Сохранить //

popupProfile.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let profileTitle = document.querySelector('.profile__title');
  let profileSubtitle = document.querySelector('.profile__subtitle');

  profileTitle.textContent = popupProfile.querySelector('#line-1').value;
  profileSubtitle.textContent = popupProfile.querySelector('#line-2').value;

  closePopup();
});

// // 3. клонируем форму, функция добавления новой картинки в конец массива  //

popupCard.addEventListener('submit', function(evt) {
  evt.preventDefault();

  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  
  cardElement.querySelector('.element__picture').src = popupCard.querySelector('#line-4').value;
  cardElement.querySelector('.element__picture').alt = popupCard.querySelector('#line-3').value;
  cardElement.querySelector('.element__text').textContent = popupCard.querySelector('#line-3').value;

  cardGrid.prepend(cardElement);

  // очищаем содержимое формы ввода after submit
  popupCard.querySelector('#line-4').value = '';
  popupCard.querySelector('#line-3').value = '';

        
  closePopup();
  
});

// // 4. функция кнопки удаления карточки//

function deleteCard(but) {
  but.closest('.element').remove();
};

// // 5. функция смены цвета сердечка //

function changeColor(evt) {
  evt.classList.toggle('element__like-button_color_black');
}
