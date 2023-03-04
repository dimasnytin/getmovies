'use strict';

// меню navbar js code
const navOpenBtn = document.querySelector('[data-menu-open-btn]');
const navCloseBtn = document.querySelector('[data-menu-close-btn]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const navElementArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElementArr.length; i++ ){
  navElementArr[i].addEventListener('click', function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
  });
};