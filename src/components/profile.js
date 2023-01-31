import { popupProfile, closePopup } from "./modal.js";

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


export function submitProfile (evt) {
  evt.preventDefault();

  profileTitle.textContent = popupProfile.querySelector('#line-1').value;
  profileSubtitle.textContent = popupProfile.querySelector('#line-2').value;

  closePopup(popupProfile);
}

