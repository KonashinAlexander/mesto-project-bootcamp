import { request } from "./util.js";

export const config = {
    url:'https://nomoreparties.co/v1/wbf-cohort-5',
    headers: {
        authorization: 'eb2b4170-c32c-4a27-a66a-d0de0ec94cc6',
        'Content-Type': 'application/json'
    }
};

// функция запроса карточек с сервера
export const getCards = () => {
  return request(`${config.url}/cards`, {headers: config.headers})  
}

// функция запроса добавления карточки на сервер
export const addCardToServer = (cardName, cardLink) => {
  return request(`${config.url}/cards`, {
    method: 'POST',  
    headers: config.headers,
    body: JSON.stringify({
      name: `${cardName}`,
      link: `${cardLink}`
    })
  })
}

  // функция запроса удаления карточки через submit формы
export const removeCardFromServer = (cardId) => {
   return request(`${config.url}/cards/${cardId}`, {
    method: 'DELETE',  
    headers: config.headers  
  })
}

//функция запроса добавления лайка

export const addLike = (cardId) => {
  return request(`${config.url}/cards/likes/${cardId}`, {
    method: 'PUT',  
    headers: config.headers  
  })
  // .catch(err => {console.log(err)})
  
}


  //функция запроса удаления лайка

export const deleteLike = (cardId) => {
  return request(`${config.url}/cards/likes/${cardId}`, {
    method: 'DELETE',  
    headers: config.headers  
  })
  // .catch(err => {console.log(err)})
    
}

// функция запроса получения данных профиля

export const getProfile = () => {
  return request(`${config.url}/users/me`, {headers: config.headers})
};


  // функция запроса обновления профиля пользователя на сервере
export const updateProfile = (profileName, profileAbout) => {
  return request(`${config.url}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: profileName, 
      about: profileAbout
    })
  }) 
};


  // функция запроса изменения аватара
export const requestNewAvatar = (newAvatar) => {
  return request(`${config.url}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: newAvatar      
    })
  });
}
  