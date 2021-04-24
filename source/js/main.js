import {toggleClasses} from './util';
import './mask';

const navigation = document.querySelector('#navigation');
const navToggle = navigation.querySelector('#navigation-toggle');
const overlay = navigation.querySelector('#navigation-overlay');
const navOpenClass = 'main-header__nav--open';
const navCloseClass = 'main-header__nav--close'

navigation.classList.add(navCloseClass);

navToggle.addEventListener('click',()=> {
  toggleClasses(navCloseClass,navOpenClass,navigation,overlay)
})
