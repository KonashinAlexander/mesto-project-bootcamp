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

function loadCards() {
  initialCards.forEach(element => {
    const cardTemplate = document.querySelector('#card').content;
    const cardGrid = document.querySelector('.elements');

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

    console.log('жопа!');
    
    popup.style.visibility='hidden';
  });

  function popupClose(arg2) {
        popup.style.visibility='hidden';
    }

  formElement.querySelector('.popup__close-button').addEventListener('click', popupClose);
};

editButton.addEventListener('click', editProfile);

// 3. клонируем форму, добавляем функцию редактирования грида с картинками //

const addButton = document.querySelector('.profile__add-button');

function editPictures(arg) {
  popup.style.visibility='visible';

  const formTemplate = document.querySelector('#form').content;
  const formElement = formTemplate.querySelector('.popup__container').cloneNode(true);

  formElement.querySelector('.form__heading').textContent = "Новое место";
  formElement.querySelector('#line-1').value = 'Название';
  formElement.querySelector('#line-2').value = 'Ссылка на картинку';

  popup.append(formElement);

  formElement.addEventListener('submit', function(evt) {
    evt.preventDefault();

    console.log('жопа_2');
    initialCards.push({name: formElement.querySelector('#line-1').value, link: formElement.querySelector('#line-2').value});
    loadCards();
    
    popup.style.visibility='hidden';
  });

  function popupClose(arg2) {
        popup.style.visibility='hidden';
    }

  formElement.querySelector('.popup__close-button').addEventListener('click', popupClose);
};

addButton.addEventListener('click', editPictures);