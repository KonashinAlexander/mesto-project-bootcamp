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

function editProfile() {
 
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

  function popupClose() {
    popup.style.visibility='hidden';
        
  }      

  formElement.querySelector('.popup__close-button').addEventListener('click', popupClose);
};

editButton.addEventListener('click', editProfile);

// 3. клонируем форму, добавляем функцию добавления новой картинки в конец массива  //

const addButton = document.querySelector('.profile__add-button');

function editPictures() {
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
            
      popup.style.visibility='hidden';
      document.querySelector('.popup__container').remove();
      
    });

  function popupClose() {
        popup.style.visibility='hidden';
        document.querySelector('.popup__container').remove();
    }

  formElement.querySelector('.popup__close-button').addEventListener('click', popupClose);
};

addButton.addEventListener('click', editPictures);

// 4.  добавить кнопку удаления крточки и функцию //

function deleteCard(but) {
  
  but.closest('.element').remove();
};


// 5. меняем цвет сердечка //

function changeColor(heart) {
  heart.style.backgroundColor = 'red';
  console.log('heart')
};

// 6. открываем попап и увеличиваем картинку //

function enchancePicture(card) {
  popup.style.visibility = 'visible';
  popup.style.backgroundColor = 'rgba(0 0 0 / 0.9)';

  const pictureTemplate = document.querySelector('#picture').content;
  const pictureElement = pictureTemplate.querySelector('.popup__container').cloneNode(true);

  pictureElement.querySelector('#image').src = card.src;
  pictureElement.querySelector('#text').textContent = card.parentNode.querySelector('.element__text').textContent;

  popup.append(pictureElement);

  function popupClose() {
    popup.style.visibility='hidden';
    document.querySelector('.popup__container').remove();
  }

  pictureElement.querySelector('.popup__close-button').addEventListener('click', popupClose);

}


