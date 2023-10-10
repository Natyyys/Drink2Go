/* в этот файл добавляет скрипты*/
import './slider.js'

const CLASS_NAV_OPEN = 'main-nav--opened';
const CLASS_NAV_JS = 'main-nav--js';

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

document.addEventListener('DOMContentLoaded', () => {
  if (!(navMain && navToggle)) {
    return;
  }

  navMain.classList.add(CLASS_NAV_JS);

  navToggle.addEventListener('click', () => {
    navMain.classList.toggle(CLASS_NAV_OPEN);
  });
});
