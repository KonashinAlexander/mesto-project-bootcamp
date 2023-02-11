import { initialCards, profileTitle, profileSubtitle, profileAvatar, newAvatar } from "../index.js";
import { insertCard, loadCards, createCard } from "./card.js";

export const config = {
    url:'https://nomoreparties.co/v1/wbf-cohort-5',
    headers: {
        authorization: 'eb2b4170-c32c-4a27-a66a-d0de0ec94cc6',
        'Content-Type': 'application/json'
    }
};

// функция запроса на загрузку картинок с сервера и отрисовки на странице

export const getCards = () => {
    fetch(`${config.url}/cards`, {headers: config.headers})
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then(list => {    
      list.forEach(card => {
          initialCards.push(card)
      })
      loadCards();
    }) 
    .catch(err => console.error(err))
  }



// функция запроса добавления карточки на сервер
export const addCardToServer = (cardName, cardLink) => {
    return fetch(`${config.url}/cards`, {
    method: 'POST',  
    headers: config.headers,
    body: JSON.stringify({
      name: `${cardName}`,
      link: `${cardLink}`
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  })
  .then(card => {
    const newCard = createCard(card.name, card.link, card.likes, card._id, card.owner);
    insertCard(newCard)
    // console.log(card._id, card.owner._id);

  })
  .catch(err => {console.log(err)})
  }

  // функция запроса удаления карточки через submit формы
  export const removeCardFromServer = (cardId) => {
    return fetch(`${config.url}/cards/${cardId}`, {
    method: 'DELETE',  
    headers: config.headers  
    })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  })
  .then((c) => {
    document.getElementById(cardId).remove();    
  })
  .catch(err => {console.log(err)});
  }

//функция запроса добавления лайка

export const addLike = (cardId) => {
    return fetch(`${config.url}/cards/likes/${cardId}`, {
    method: 'PUT',  
    headers: config.headers  
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .catch(err => {console.log(err)})
    
  }


  //функция запроса удаления лайка

export const deleteLike = (cardId) => {
    return fetch(`${config.url}/cards/likes/${cardId}`, {
    method: 'DELETE',  
    headers: config.headers  
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .catch(err => {console.log(err)})
      
  }

// функция запроса получения данных профиля
export let profileId ='';

  export const getProfile = () => {
    return fetch(`${config.url}/users/me`, {headers: config.headers})
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then(profile => {    
      profileTitle.textContent = profile.name;
      profileSubtitle.textContent = profile.about;
      profileAvatar.src = profile.avatar;
      profileAvatar.alt = profile.name; 
      return profileId = profile._id; // запишем id моего профиля
      
    })
    .catch(err => console.error(err))
    
  };


  // функция запроса обновления профиля пользователя на сервере
export const updateProfile = (profileName, profileAbout) => {
    return fetch(`${config.url}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: profileName, 
      about: profileAbout
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then((result) => {
      profileTitle.textContent = result.name;
      profileSubtitle.textContent = result.about;
    })
    .catch(err => {console.log(err)});
  };


  // функция запроса изменения аватара
export const requestNewAvatar = (newAvatar) => {
    return fetch(`${config.url}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
          avatar: newAvatar
          
          })
        })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
          })
          .then((result) => {
            profileAvatar.src = result.avatar;
          })
      .catch(err => {console.log(err)})
}
  