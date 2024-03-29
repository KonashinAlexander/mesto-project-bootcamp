# Проект: Место

## Цели проекта

1. Закрепить навыки адаптивной верстки.
2. Используя возможности JavaScript, сделать сайт интерактивным (активные кнопки, pop-up, добавление и удаление карточек мест, изменение названия).

### Обзор

Сайт демонстрирует карточки красивых туристических мест с указанием названий и возможностью поставить лайк.
Макет в **Figma** представлен по ссылке:

* [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)

Изображения скачаны с макета и оптимизированы. Шрифты 'Inter' бесплатны, скачаны с сайта и подключены локально.

* [Ссылка на шрифт](https://rsms.me/inter/)
Разработка проводилась в VS Code, тестирование в браузерах Chrome, Edge, Firefix, Yandex.

Проект опубликован на GitHubPages и находится по ссылке ниже.

* [Ссылка на проект в GitHub Pages](https://konashinalexander.github.io/mesto-project-bootcamp/)

#### Интерактивные элементы

1. Добавлена возможность редактирования профиля:

* после нажатия на кнопку редактирования профиля плавно появляется попап и форма редактирования;
* в поля ввода можно ввести "Имя" и "Профессию" (поля обязательны для заполнения);
* После нажатия на кнопку "Сохранить" данные на странице обновляются, а попап и форма плавно закрывается;
* После нажатия на кнопку "Х" попап и форма плавно закрывается, данные на странице не обновляются.

2.Добавлена возможность добавления карточек мест на страницу:

* после нажатия на кнопку "+" плавно появляется попап и форма редактирования;
* в поля ввода можно ввести "Название" и "Ссылку на картику" (поля обязательны для заполнения);
* После нажатия на кнопку "Сохранить" добавляется новая карточка в начало карточек, а попап и форма плавно закрывается;
* После нажатия на кнопку "Х" попап и форма плавно закрывается, данные на странице не обновляются.

3.Добавлена возможность удаления карточек мест на страницу:

* после нажатия на кнопку "Корзинка" карточка удаляется со страницы.

4.Добавлена возможность поставить и убрать "лайк":

* при первоначальной загрузке карточка содержит кнопку "сердечко" белого цвета;
* при клике цвет сердечка меняется на черный;
* при повторном клике цвет становится обратно белым.

5.Добавлена возможность увеличения картинки в карточке:

* при клике на картинку в карточке страница затемняется и картинка с подписью плавно выводится на экран;
* после нажатия на кнопку "Х" попап и картинка плавно закрываются.

6.Добавлена возможность закрыть модальное окно, нажав на кнопку Esc либо кликнув мышкой по оверлею

#### Валидация форм

* добавлена валидация формы редактирования профиля и форма добавления новых мест;
* при неправильном заполнении строк ввода строка подчеркивается красной линией и выводится сообщение об ошибке;
* сообщение об ошибке зависит от условий проверки каждой строки
* при правильном заполнении всех строк формы кнопка "Сохранить" становится активной

#### Модули

* файловая структура сформирована в соотвествии с БЭМ;
* функции и переменные вынесены в отдельные модули и затем импортированы в index.js;

#### Webpack

* в проекте инициализирован npm, установлен и настроен Webpack, произведены сборки проекта dev и build (папка dist);
* установлен и настроен Babel;
* скрипты b CSS автоматически добавляются в main.html

### Обращение к серверу

Обращение к серверу и использование его ответов реализовано при:

* первоначальной загрузке карточек места, их добавлении и удалении (удаляются только те, которые создал сам)
* подгрузке каоличества лайков для каждой карточки
* редактировании аватара и профиля пользователя

### Планы по доработке

1. В соответствии с комментариями ревьюера.
2. Добавление кода JavaScript для интерактивности.

### Связаться со мной
konashin@gmail.com
