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
     }, 100);
     e.preventDefault();
     return false;
   });
 });
 //-----------------------popup menu---------------------------------------
 let buttons = document.getElementsByTagName('button');
 let popup = document.querySelector('.popup');
  for (let i = 0; i < buttons.length; i++) 
  {
      if (buttons[i].className == "popup__form-button") continue; //Выбираем все кнопки, кроме той что используем в popup меню
      buttons[i].addEventListener('click', togglePopupMenu)
  }
function togglePopupMenu(){
  popup.classList.toggle('popup--active');
  if (popup.classList.contains('popup--active'))
  {
    $('body').css('overflow', 'hidden');
  }
}

document.querySelector('.popup__close-mark').addEventListener('click', closePopupMenu)
function closePopupMenu(){
  document.querySelector('.popup').classList.remove('popup--active');
  $('body').css('overflow', 'visible');
}
