// Burger handler

/* $(document).ready(function () {
  /*   const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header-nav");
  const menuClose = document.querySelector(".header-nav-close");
  const menuLinks = document.querySelectorAll(".header-link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header-nav-activ");
  });
  menuClose.addEventListener("click", () => {
    menu.classList.remove("header-nav-activ");
  }); */
/* 
  if (window.innerWidth <= 768) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        $(".header-nav").toggleClass("header-nav-activ");
      });
    }
  } */
/* }); */

$(document).ready(function () {
    const menuLinks = document.querySelectorAll(".header-link");
    $(".burger").click(function () {
      $(this).toggleClass("is-active");
      $(".header-nav").toggleClass("header-nav-activ");
    });
    if (window.innerWidth <= 768) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener("click", () => {
          $(".burger").toggleClass("is-active");
          $(".header-nav").toggleClass("header-nav-activ");
        });
      }
    }
  });
  
  console.log(
    "Ваша отметка - 72 балла \nНе выполненные не засчитанные пункты \n 1 бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений \n Частично выполненные пункты \n 1) при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик — 1 балл(а) \n 2) высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана — 1 балл(а) \n 3) при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку — 1 балл(а) \n 4) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку — 2 балл(а) \n Все оставшиеся пункты выполнены"
  );