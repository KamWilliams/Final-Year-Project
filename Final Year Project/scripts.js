const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Mobile menu display
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
// active menu while scrolling
const highlightMenu = () => {
  const element = document.querySelector('.highlight');
  const menuHome = document.querySelector('#home-page');
  const menuAbout = document.querySelector('#about-page');
  const menuGenre = document.querySelector('#genre-page');
  const menuFiction = document.querySelector('#fiction-page');
  const menuLength = document.querySelector('#length-page');
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    menuHome.classList.add('highlight');
    menuAbout.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1800) {
    menuAbout.classList.add('highlight');
    menuHome.classList.remove('highlight');
    menuGenre.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2700) {
    menuGenre.classList.add('highlight');
    menuAbout.classList.remove('highlight');
    menuFiction.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3503) {
    menuFiction.classList.add('highlight');
    menuGenre.classList.remove('highlight');
    menuLength.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 4199) {
    menuLength.classList.add('highlight');
    menuFiction.classList.remove('highlight');
    return;
  }
  if ((element && window.innerWIdth < 960 && scrollPos < 600) || element) {
    element.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
