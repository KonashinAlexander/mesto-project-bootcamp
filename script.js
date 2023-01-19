// 1 добавляем попап на страницу и активизируем кнопки //

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');


function popupOpen(arg) {
    popup.style.visibility='visible';
}

function popupClose(arg2) {
    popup.style.visibility='hidden';
}


editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);


let formElement = document.querySelector('.form');

formElement.addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    let nameInput = formElement.name;
    let jobInput = formElement.job;

    let proileTitle = document.querySelector('.profile__title');
    let profileSubtitle = document.querySelector('.profile__subtitle');

    proileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    console.log('жопа!');
    
    popupClose();
});

// 2 JS добавляет 6 карточек при загрузке //

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
    }
  ];

initialCards.forEach(element => {
    const cardTemplate = document.querySelector('#card').content;
    const cardGrid = document.querySelector('.elements');

    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__picture').src = element.link;
    cardElement.querySelector('.element__text').textContent = element.name;

    cardGrid.prepend(cardElement);
});

