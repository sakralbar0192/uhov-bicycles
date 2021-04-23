const ESCAPE_KEY_CODE = 27;

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
        navigation.classList.remove(secondClass);
        navigation.classList.add(firstClass);
      }
    }, {once: true});

    overlay.addEventListener('click', () => {
      navigation.classList.remove(secondClass);
      navigation.classList.add(firstClass);
    }, {once: true});

  }else if (chanchedElement.classList.contains(secondClass)) {
    chanchedElement.classList.remove(secondClass);
    chanchedElement.classList.add(firstClass);
  }
}

export {toggleClasses};
