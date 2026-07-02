// NUVO MAXX — Minimal interactivity
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.hamburger');
  var menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }
});
