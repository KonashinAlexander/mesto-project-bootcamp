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
    cardElement.querySelector('.element__text').textContent = element.name;

    cardGrid.prepend(cardElement);
    
});
}

loadCards();

// объявляем функцию открытия попап + form

function formOpen() {
  popup.classList.add('popup_click_button');
  
  const formTemplate = document.querySelector('#form').content;
  const formElement = formTemplate.querySelector('.popup__container').cloneNode(true);
  return formElement;
}

// объявляем функцию закрытия попап

function popupClose() {
  popup.classList.remove('popup_click_picture');
  popup.classList.remove('popup_click_button');
  document.querySelector('.popup__container').remove();
}

// 2. клонируем форму, добавляем функцию редактирования профиля //

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');

function editProfile() {
  
  const formElement = formOpen();
  formElement.querySelector('.form__heading').textContent = "Редактировать профиль";
  formElement.querySelector('#line-1').value = 'Жак-Ив Кусто';
  formElement.querySelector('#line-2').value = 'Исследователь океана';

  popup.append(formElement);

  formElement.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let proileTitle = document.querySelector('.profile__title');
    let profileSubtitle = document.querySelector('.profile__subtitle');

    proileTitle.textContent = formElement.querySelector('#line-1').value;
    profileSubtitle.textContent = formElement.querySelector('#line-2').value;

    popupClose();
    
  });

  formElement.querySelector('.popup__close-button').addEventListener('click', popupClose);
};

editButton.addEventListener('click', editProfile);

// 3. клонируем форму, добавляем функцию добавления новой картинки в конец массива  //

const addButton = document.querySelector('.profile__add-button');

function editPictures() {

  const formElement = formOpen();
  formElement.querySelector('.form__heading').textContent = "Новое место";
  formElement.querySelector('#line-1').value = 'Название';
  formElement.querySelector('#line-2').value = 'Ссылка на картинку';
  
  popup.append(formElement);

  formElement.addEventListener('submit', function(evt) {
    evt.preventDefault();

    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__picture').src = formElement.querySelector('#line-2').value;
    cardElement.querySelector('.element__text').textContent = formElement.querySelector('#line-1').value;

    cardGrid.prepend(cardElement);
          
    popupClose();
    
  });

    formElement.querySelector('.popup__close-button').addEventListener('click', popupClose);
};

addButton.addEventListener('click', editPictures);

// 4.  добавить кнопку удаления крточки и функцию //

function deleteCard(but) {
  but.closest('.element').remove();
};


// 5. меняем цвет сердечка //

function changeColor(evt) {
  evt.classList.toggle('element__like-button_color_black');
}

// 6. открываем попап и увеличиваем картинку //

function enchancePicture(card) {
  popup.classList.add('popup_click_picture');
  
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureElement = pictureTemplate.querySelector('.popup__container').cloneNode(true);

  pictureElement.querySelector('#image').src = card.src;
  pictureElement.querySelector('#text').textContent = card.parentNode.querySelector('.element__text').textContent;

  popup.append(pictureElement);

  pictureElement.querySelector('.popup__close-button').addEventListener('click', popupClose);

}


