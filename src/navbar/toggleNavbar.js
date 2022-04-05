import { getElement } from '../utils.js';

const navToggle = getElement('.nav-toggle');

navToggle.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('show-links');
});
