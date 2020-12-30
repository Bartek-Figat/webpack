import './style.css';

window.addEventListener('scroll', function () {
  let nav = document.querySelector('.nav');
  let windowPosition = window.scrollY > 2;
  nav.classList.toggle('scrolling-active', windowPosition);
});
