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
  const menuNovel = document.querySelector('#novels-page');
  const menuFace2 = document.querySelector('#face2-page');
  const menuRussian = document.querySelector('#russian-page');
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 300) {
    menuHome.classList.add('highlight');
    menuAbout.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1100) {
    menuAbout.classList.add('highlight');
    menuHome.classList.remove('highlight');
    menuNovel.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2000) {
    menuNovel.classList.add('highlight');
    menuAbout.classList.remove('highlight');
    menuFace2.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3100) {
    menuFace2.classList.add('highlight');
    menuNovel.classList.remove('highlight');
    menuRussian.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3846) {
    menuRussian.classList.add('highlight');
    menuFace2.classList.remove('highlight');
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
