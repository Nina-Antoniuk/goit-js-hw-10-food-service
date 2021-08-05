import { Theme } from './js/consts';
import refs from './js/refs';
import { themeColorChangeHandler } from './js/handlers';
import cards from './menu.json';
import cardTemplate from './templates/template.hbs';


if (localStorage.getItem('theme') === Theme.DARK) {
  refs.themeColorSelect.setAttribute('checked', true);
  refs.body.classList.add(localStorage.getItem('theme'));
}

refs.themeColorSelect.addEventListener('change', themeColorChangeHandler);
refs.menu.innerHTML = createCardsMarkup();


function createCardsMarkup() {
  return cards.map(cardTemplate).join('');
}

