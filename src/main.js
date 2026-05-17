import '../src/css/style.css';
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

// DARK MODE

const themeToggleBtn = document.querySelector('#theme-toggle');

const savedTheme =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light');

document.documentElement.setAttribute('data-theme', savedTheme);

if (savedTheme === 'dark' && themeToggleBtn) {
  themeToggleBtn.classList.add('active');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      themeToggleBtn.classList.add('active');
    } else {
      themeToggleBtn.classList.remove('active');
    }
  });
}
