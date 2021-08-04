import { Theme } from './consts';
import refs from './refs';

export function themeColorChangeHandler() {
  if (!refs.themeColorSelect.getAttribute('checked')) {
    refs.themeColorSelect.setAttribute('checked', true);
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.add(Theme.DARK);
  } else {
    refs.themeColorSelect.removeAttribute('checked');
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT)
  }
}