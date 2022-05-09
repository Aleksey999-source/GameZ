"use strict";
//Бургер-меню-----------------------------------------------
let burger = document.querySelector('.menu__burger');
let burgerMenu = document.querySelector('.burger__menu')
burger.addEventListener('click', toggleBurgerClass);
function toggleBurgerClass() 
{
   burger.classList.toggle('burger--active');
   burgerMenu.classList.toggle('menu--active');
}