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

// 2. клонируем форму, добавляем функцию редактирования профиля //

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');

function editProfile(arg) {
  popup.style.visibility='visible';

  const formTemplate = document.querySelector('#form').content;
  const formElement = formTemplate.querySelector('.popup__container').cloneNode(true);

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

    popup.style.visibility='hidden';
  });

  function popupClose(arg2) {
        popup.style.visibility='hidden';
    }

  formElement.querySelector('.popup__close-button').addEventListener('click', popupClose);
};

editButton.addEventListener('click', editProfile);

// 3. клонируем форму, добавляем функцию добавления новой картинки в конец массива  //

const addButton = document.querySelector('.profile__add-button');

function editPictures(arg) {
  popup.style.visibility='visible';

  const formTemplate = document.querySelector('#form').content;
  const formElement = formTemplate.querySelector('.popup__container').cloneNode(true);

  popup.append(formElement);

  formElement.querySelector('.form__heading').textContent = "Новое место";
  formElement.querySelector('#line-1').value = 'Название';
  formElement.querySelector('#line-2').value = 'Ссылка на картинку';
  
  

    formElement.addEventListener('submit', function(evt) {
    evt.preventDefault();

    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__picture').src = formElement.querySelector('#line-2').value;
    cardElement.querySelector('.element__text').textContent = formElement.querySelector('#line-1').value;

    cardGrid.prepend(cardElement);
    console.log()
    
    popup.style.visibility='hidden';
  });

  function popupClose(arg2) {
        popup.style.visibility='hidden';
    }

  formElement.querySelector('.popup__close-button').addEventListener('click', popupClose);
};

addButton.addEventListener('click', editPictures);

// 4.  добавить кнопку удаления крточки и функцию //

function deleteCard() {
  let deleteButton = document.querySelector('.element__trash-button');
  deleteButton.closest('.element').remove();
};


// 5. меняем цвет сердечка //

function changeColor() {
  let likeButton = document.querySelector('.element__like-button');
  likeButton.style.backgroundColor = 'red';
  alert('clicked!!!');
};


