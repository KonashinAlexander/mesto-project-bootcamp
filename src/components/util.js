// функция проверки ответа от сервера

export const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
}

// функция запроса и проверки ответа
export const request = (url, options) => {
  return fetch(url, options).then(checkResponse)
}

// универсальная функция управления текстом кнопки
export const renderLoading = (isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') => {
  if (isLoading) {
    button.textContent = loadingText
  } else {
    button.textContent = buttonText
  }
}