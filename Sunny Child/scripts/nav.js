var menu = document.getElementById('menu-display');
var navList = document.getElementById('navi-list');
var lang = document.getElementById('lang-contain');

menu.addEventListener('click', () => {
  navList.classList.toggle('active');
  lang.classList.toggle('active');
})