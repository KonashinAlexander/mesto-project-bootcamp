const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');


function popupOpen(arg) {
    // popup.classList.add('popup_opened');
    popup.style.visibility='visible';
}

function popupClose(arg2) {
    // popup.classList.remove('popup_opened');
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


