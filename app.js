const head = document.querySelector('.header');
const headerInner = document.querySelector('.header__inner');
const links = document.querySelector('.nav');
const btn = document.querySelector('.toggle');

//Nav Toggle

btn.addEventListener('click', function () {
  head.classList.toggle('red');
  links.classList.toggle('nav-show');
  btn.classList.toggle('toggle-back');
});
links.addEventListener('click', function () {
  head.classList.toggle('red');
  links.classList.toggle('nav-show');
  btn.classList.toggle('toggle-back');
});
// Fixed Header
document.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    head.classList.add('fixed');
    headerInner.style.padding = '20px 0';
  } else {
    head.classList.remove('fixed');
    headerInner.style.padding = '40px 0';
  }
});

/* Smooth scroll */
let nav = $('#nav');

$('[data-scroll]').on('click', function (event) {
  event.preventDefault();

  let elementId = $(this).data('scroll');
  let elementOffset = $(elementId).offset().top;

  nav.removeClass('show');

  $('html, body').animate(
    {
      scrollTop: elementOffset - 80,
    },
    800,
  );
});
