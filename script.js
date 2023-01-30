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

function createCard(cadrName, cardLink) {
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

    // cardGrid.prepend(cardElement);
};

function insertCard (card) {
  cardGrid.prepend(card);
};

function loadCards() {
  initialCards.forEach(element => {
    const card = createCard(element.name, element.link);
    insertCard(card);     
  });
}

loadCards();


// 2. функции открытия и закрытия попап

const popupProfile = document.querySelector('#popup_profile');
const popupCard = document.querySelector('#popup_card');
const popupPicture = document.querySelector('#popup_picture');

const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.card__add-button');


function openPopupPrifile() {
  popupProfile.classList.add('popup_opened');
  popupProfile.querySelector('.popup__close-button').addEventListener('click', event => {
    closePopup(popupProfile);
  });
}

function openPopupCard() {
  popupCard.classList.add('popup_opened');
  popupCard.querySelector('.popup__close-button').addEventListener('click', event => {
    closePopup(popupCard);
  });
}

profileEditButton.addEventListener('click', openPopupPrifile);
cardAddButton.addEventListener('click', openPopupCard);

// функция открытия попап с картинкой из карточки

const bigPicture = popupPicture.querySelector('#image');
const bigPictureText = popupPicture.querySelector('#text');
const bigPictureBtn = popupPicture.querySelector('.popup__close-button');


function enchancePicture(image) {
  popupPicture.classList.add('popup_opened');
  popupPicture.style.backgroundColor = 'rgba(0 0 0 / 0.9)';
  bigPicture.src = image.src;
  bigPictureText.textContent = image.alt;
  bigPictureBtn.addEventListener('click', event => {
    closePopup(popupPicture);
  });
};


// функция закрытия попап

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// функция редактирования профиля + кнопка Сохранить //

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


function submitProfile (evt) {
  evt.preventDefault();

  profileTitle.textContent = popupProfile.querySelector('#line-1').value;
  profileSubtitle.textContent = popupProfile.querySelector('#line-2').value;

  closePopup(popupProfile);
}

popupProfile.addEventListener('submit', submitProfile);

// 3. клонируем форму, функция добавления новой картинки в конец массива  //

const pictureName = popupCard.querySelector('#line-3');
const pictureUrl = popupCard.querySelector('#line-4');

function submitCard (evt) {
  
  evt.preventDefault();
  const card = createCard(pictureName.value, pictureUrl.value);
  insertCard(card);

  pictureUrl.value = '';
  pictureName.value = '';
        
  closePopup(popupCard);  

};

popupCard.addEventListener('submit', submitCard);

// // 4. функция кнопки удаления карточки//

function deleteCard(but) {
  but.closest('.element').remove();
};


// 5. функция смены цвета сердечка //

function changeColor(evt) {
  evt.classList.toggle('element__like-button_color_black');
};


// VALIDATION


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__item_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__item-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__item_type_error');
  errorElement.classList.remove('form__item-error_active');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// функция которая устанавливает слушатель для всех инпутов одной формы
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__item'));
  const buttonElement = formElement.querySelector('.form__button');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

// функция которая подключает валидацию ко всем формам
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });  
};





// переключение кнопки с активной на неактивную

const hasInvalidInput = (inputList) => {
  
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


const toggleButtonState = (inputList, buttonElement) => {
  
  if (hasInvalidInput(inputList)) {
    
    buttonElement.classList.add('form__button_inactive');
  } else {
    
    buttonElement.classList.remove('form__button_inactive');
    buttonElement.removeAttribute('disabled');
  }
};


enableValidation(); // вызвали функцию валидации всех полей всех форм


// document.addEventListener('click', e => console.log(e.target));
// document.addEventListener('click', function(){ console.log(this); arguments});

// document.querySelector('.popup_opened').addEventListener('click', e => console.log(e.target));


// функция которая закрывает попап кликом мышки
function checkPopupOpened (agr1) {
  if (agr1.classList.contains('popup_opened')) {
    agr1.classList.remove('popup_opened');
  }
};

document.addEventListener('click', e => checkPopupOpened(e.target));


// функция которая закрывает попап нажатием Esc
function checkEscape (arg2, popup) {
  if (arg2 === 'Escape') {
    closePopup(popup)
  }
}

document.addEventListener('keydown', e => checkEscape(e.key, popupProfile));
document.addEventListener('keydown', e => checkEscape(e.key, popupCard));
document.addEventListener('keydown', e => checkEscape(e.key, popupPicture));
