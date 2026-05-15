import './css/style.css';
import {
  createIcons,
  Handshake,
  TrendingUp,
  FileCheck,
  RefreshCw,
} from 'lucide';

// LUCIDE

createIcons({
  icons: { Handshake, TrendingUp, FileCheck, RefreshCw },
});

// NAV-MENU
const openMenuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.main-nav');
const closeMenuBtn = document.querySelector('.close-btn');
const navLink = document.querySelectorAll('.nav-item a');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');

  const expanded = burgerBtn.getAttribute('aria-expanded') === 'true';

  burgerBtn.setAttribute('aria-expanded', !expanded);
});

function closeMobileNav() {
  mobileMenu.classList.remove('is-open');
}

navLink.forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

closeMenuBtn.addEventListener('click', closeMobileNav);

// FIXED HEADER

// const header = document.querySelector('.header-container');

// const stickyPoint = header.offsetTop;

// window.addEventListener('scroll', () => {
//   if (window.scrollY > stickyPoint) {
//     header.classList.add('is-fixed');
//   } else {
//     header.classList.remove('is-fixed');
//   }
// });
