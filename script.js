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

// 1 добавляем попап на страницу и активизируем кнопки //

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
// const closeButton = document.querySelector('.popup__close-button');
// const addButton = document.querySelector('.profile__add-button');

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

// function popupClose(arg2) {
//     popup.style.visibility='hidden';
// }


editButton.addEventListener('click', editProfile);
// closeButton.addEventListener('click', popupClose);
// addButton.addEventListener('click', popupOpen);


// let formElement = document.querySelector('.form');

// formElement.addEventListener('submit', function(evt) {
//     evt.preventDefault();
    
//     let nameInput = formElement.name;
//     let jobInput = formElement.job;

//     let proileTitle = document.querySelector('.profile__title');
//     let profileSubtitle = document.querySelector('.profile__subtitle');

//     proileTitle.textContent = nameInput.value;
//     profileSubtitle.textContent = jobInput.value;

//     console.log('жопа!');
    
//     popupClose();
// });


// const formTemplate = document.querySelector('#form').content;
// const formElement = formTemplate.querySelector('.popup__container').cloneNode(true);

// formElement.querySelector('.form__heading').textContent = "Редактировать профиль";
// formElement.querySelector('#line-1').value = 'Дядя Вася';
// formElement.querySelector('#line-2').value = 'kozel';

// popup.append(formElement);
