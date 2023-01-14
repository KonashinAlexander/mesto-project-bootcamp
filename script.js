let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

function popupOpen(arg) {
    popup.classList.add('popup_opened');
}

function popupClose(arg2) {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
