// функция проверки ответа от сервера

export const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
}

export const request = (url, options) => {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options).then(checkResponse)
}

// можно сделать универсальную функцию управления текстом кнопки с 3 и 4 необязательными аргументами
export const renderLoading = (isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') => {
  if (isLoading) {
    button.textContent = loadingText
  } else {
    button.textContent = buttonText
  }
}