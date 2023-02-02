// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__item_type_error');
    errorElement.textContent = errorMessage;
    // errorElement.classList.add('form__error-message');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__item_type_error');
    // errorElement.classList.remove('form__error-message');
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
export const enableValidation = () => {
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
