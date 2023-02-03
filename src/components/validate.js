// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    // errorElement.classList.add('form__error-message');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, inputErrorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    // errorElement.classList.remove('form__error-message');
    errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, inputErrorClass) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass);
    }
};

// функция которая устанавливает слушатель для всех инпутов одной формы

const setEventListeners = (formElement,
                        inputSelector, 
                        submitButtonSelector, 
                        inputErrorClass, 
                        inactiveButtonClass
                        ) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            isValid(formElement, inputElement, inputErrorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
};

// функция которая подключает валидацию ко всем формам
export const enableValidation = (select) => {
    const formList = Array.from(document.querySelectorAll(select.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
        });

        setEventListeners(
            formElement, 
            select.inputSelector,
            select.submitButtonSelector,
            select.inputErrorClass,
            select.inactiveButtonClass
            );
    });  
};

// переключение кнопки с активной на неактивную

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};


const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};
