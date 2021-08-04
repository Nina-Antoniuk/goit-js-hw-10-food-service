import { Theme } from './js/consts';
import refs from './js/refs';
import { themeColorChangeHandler } from './js/handlers';


if (localStorage.getItem('theme') === Theme.DARK) {
  refs.themeColorSelect.setAttribute('checked', true);
  refs.body.classList.add(localStorage.getItem('theme'));
}

refs.themeColorSelect.addEventListener('change', themeColorChangeHandler);



