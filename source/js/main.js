'use strict';
/* global Inputmask:readonly */

const ESCAPE_KEY_CODE = 27;

const navigation = document.querySelector('#navigation');
const navToggle = navigation.querySelector('#navigation-toggle');
const overlay = navigation.querySelector('#navigation-overlay');
const navOpenClass = 'main-header__nav--open';
const navCloseClass = 'main-header__nav--close'

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
  }
}

//добавляет навигационному меню класс для отображения закрытого меню
navigation.classList.add(navCloseClass);

//добавляет кнопке открытия/закрытия меню обработчик события, который меняет классы у навигационного меню
navToggle.addEventListener('click',()=> {
  toggleClasses(navCloseClass,navOpenClass,navigation,overlay)
})

//инициирует маску для валидации поля ввода телефона
const telInput = document.querySelector('#tel-input');
Inputmask().mask(telInput);
