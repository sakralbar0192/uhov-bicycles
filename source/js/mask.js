import Inputmask from 'inputmask';

const telInput = document.querySelector('#tel-input');
const telMask = new Inputmask('+9-999-999-99-99');

telMask.mask(telInput);
