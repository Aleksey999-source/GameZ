"use strict";
//Бургер-меню-----------------------------------------------
let burger = document.querySelector('.menu__burger');
let burgerMenu = document.querySelector('.burger__menu')
burger.addEventListener('click', toggleBurgerClass);
function toggleBurgerClass() 
{
   burger.classList.toggle('burger--active');
   burgerMenu.classList.toggle('menu--active');

   if (burger.classList.contains('burger--active'))
   {
       document.body.style.overflow = "hidden";
   }
   else
   {
       document.body.style.overflow = "visible"; 
   }
}
const hrefBurger = document.querySelectorAll('.burger__href');
for (let i = 0; i < hrefBurger.length; i++)
{
    hrefBurger[i].addEventListener('click', removeState);
}
function removeState() {
    $('body').css('overflow', 'visible');
    burger.classList.remove('burger--active');
    burgerMenu.classList.remove('menu--active');
}
//--плавный скролл------------------------------------------
$(document).ready(function(){
   $("a[href*='#']").on("click", function(e){
     var anchor = $(this);
     $('html, body').stop().animate({
       scrollTop: $(anchor.attr('href')).offset().top
     }, 777);
     e.preventDefault();
     return false;
   });
 });