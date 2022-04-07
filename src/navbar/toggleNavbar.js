import { querySelector } from '../utils.js';

const navToggle = querySelector('.nav-toggle');
const links = querySelector('.links');
const linksContainer = querySelector('.links-container');

navToggle.addEventListener('click', (e) => {
  switchToggleIcon(e);
  toggleNavbar();
});

function switchToggleIcon(e) {
  e.currentTarget.classList.toggle('switch-icon');
}

function toggleNavbar() {
  if (isNavbarClose()) {
    openNavbar();
    return;
  }
  closeNavbar();
}

function isNavbarClose() {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  return linksContainerHeight === 0;
}

function openNavbar() {
  linksContainer.style.height = `${links.getBoundingClientRect().height}px`;
}

function closeNavbar() {
  linksContainer.style.height = 0;
}
