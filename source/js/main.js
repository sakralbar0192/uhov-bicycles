'use strict';
/* global Inputmask:readonly */

const ESCAPE_KEY_CODE = 27;
const TEL_INPUT_ERROR_MESSAGE = 'введите номер полностью';

const pageBody = document.querySelector('#body');
const navigation = document.querySelector('#navigation');
const navToggle = navigation.querySelector('#navigation-toggle');
const overlay = navigation.querySelector('#navigation-overlay');
const navOpenClass = 'main-header__nav--open';
const navCloseClass = 'main-header__nav--close';
const form = document.querySelector('#form');
const telInput = form.querySelector('#tel-input');

/**
 * Функция при вызове проверяет наличие одного из двух переданных классов у изменяемого элемента
 * и при наличии одного из них заменяет один класс на другой и выполняет соответствующую переданную функцию
 *
 * @param {string} firstClass -первый класс
 * @param {string} secondClass - второй класс
 * @param {object} chanchedElement - изменяемый элемент
 * @param {object} overlay - оверлэй клин по которому единожды меняет классы
 */
const toggleClasses = (firstClass, secondClass, chanchedElement, overlay) => {
  if (chanchedElement.classList.contains(firstClass)) {
    chanchedElement.classList.remove(firstClass);
    chanchedElement.classList.add(secondClass);
    pageBody.classList.add('non-scrolling-block');

    document.addEventListener('keydown',(evt) => {
      if (evt.keyCode === ESCAPE_KEY_CODE){
        chanchedElement.classList.remove(secondClass);
        chanchedElement.classList.add(firstClass);
      }
    }, {once: true});

    overlay.addEventListener('click', () => {
      chanchedElement.classList.remove(secondClass);
      chanchedElement.classList.add(firstClass);
    }, {once: true});

  }else if (chanchedElement.classList.contains(secondClass)) {
    chanchedElement.classList.remove(secondClass);
    chanchedElement.classList.add(firstClass);
    pageBody.classList.remove('non-scrolling-block');
  }
}

//добавляет навигационному меню класс для отображения закрытого меню
navigation.classList.add(navCloseClass);

//добавляет кнопке открытия/закрытия меню обработчик события, который меняет классы у навигационного меню
navToggle.addEventListener('click',()=> {
  toggleClasses(navCloseClass,navOpenClass,navigation,overlay)
})

//инициирует маску для валидации поля ввода телефона
Inputmask().mask(telInput);

//сохраняет данные формы в локальное хранилище после отправки формы
form.addEventListener('submit', (evt)=> {
  if (telInput.inputmask.unmaskedvalue().length != 10) {
    evt.preventDefault();
    telInput.setCustomValidity(TEL_INPUT_ERROR_MESSAGE);
  }else {
    telInput.setCustomValidity('');
    if (window.localStorage) {
      const inputFields = form.querySelectorAll('#input-field');
      inputFields.forEach(field => {
        const name = field.getAttribute('name');
        const value = field.value;
        localStorage.setItem(name, value);
      })
    }
  }
})
