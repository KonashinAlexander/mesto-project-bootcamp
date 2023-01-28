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

// 1.1 функция первоначальной загрузки карточек //

const cardGrid = document.querySelector('.elements');  

function loadCards() {
  initialCards.forEach(element => {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__picture').src = element.link;
    cardElement.querySelector('.element__picture').alt = element.name;
    cardElement.querySelector('.element__text').textContent = element.name;

    cardElement.querySelector('.element__picture').addEventListener('click', event => {
      enchancePicture(event.target);
    });

    cardGrid.prepend(cardElement);
    
  });
}

loadCards();

// document.addEventListener('click', e => console.log(e.target));
// document.addEventListener('click', function(){ console.log(this); arguments});
 
// 2. функции открытия и закрытия попап

const popupProfile = document.querySelector('#popup_profile');
const popupCard = document.querySelector('#popup_card');
const popupPicture = document.querySelector('#popup_picture');

const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.card__add-button');


function openPopupPrifile() {
  popupProfile.classList.add('popup_click_button');
  popupProfile.querySelector('.popup__close-button').addEventListener('click', event => {
    closePopup(event.target);
  });
}

function openPopupCard() {
  popupCard.classList.add('popup_click_button');
  popupCard.querySelector('.popup__close-button').addEventListener('click', event => {
    closePopup(event.target);
  });
}

profileEditButton.addEventListener('click', openPopupPrifile);
cardAddButton.addEventListener('click', openPopupCard);

// функция открытия попап с картинкой из карточки

function enchancePicture() {
  popupPicture.classList.add('popup_click_picture');
  popupPicture.querySelector('#image').src = card.parentNode.querySelector('.element__picture').src;
  popupPicture.querySelector('#text').textContent = card.parentNode.querySelector('.element__text').textContent;
  popupPicture.querySelector('.popup__close-button').addEventListener('click', event => {
    closePopup(event.target);
  });
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

  cardElement.querySelector('.element__trash-button').addEventListener('click', event => {
    deleteCard(event.target);
  });

  cardElement.querySelector('.element__like-button').addEventListener('click', event => {
    changeColor(event.target)
  });

  cardElement.querySelector('.element__picture').addEventListener('click', event => {
    enchancePicture(event.target);
  });

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

// 4.1 подключаем функцию к кнопкам карточек первоначальной загрузки
const trashButtonList = document.querySelectorAll('.element__trash-button');

trashButtonList.forEach(btn => {
  btn.addEventListener('click', event => {
    deleteCard(event.target);
  })
})


// 5. функция смены цвета сердечка //

function changeColor(evt) {
  evt.classList.toggle('element__like-button_color_black');
};

// 5.1 подключаем функцию смены цвета сердечка к карточкам первоначальной загрузки

const likeButtonList = document.querySelectorAll('.element__like-button');

likeButtonList.forEach(btn => {
  btn.addEventListener('click', event => {
    changeColor(event.target);
  })
});









