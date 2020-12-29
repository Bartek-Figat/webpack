import './style.css';
// const navbar = document.querySelector('.navigation');
// const ob = document.querySelector('.observer');

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
});

// let options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 1.0,
// };

// let callback = (entries, observer) => {
//   entries.forEach((element) => {
//     if (element.isIntersecting) {
//       navbar.classList.add('navigation--in');
//     } else {
//       navbar.classList.remove('navigation--in');
//     }
//   });
// };

// let observer = new IntersectionObserver(callback, options);

// observer.observe(ob);
