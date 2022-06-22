const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('close-btn');
const menuItems = document.querySelectorAll('.menu-item');
const themeToggler = document.getElementById('theme-toggler');
const body = document.querySelector('body');

const classAddRemove = (typeofEvent, eventElement, whereToAdd, classToAdd, classToRemove) => {
    eventElement.addEventListener(typeofEvent, () => {
        whereToAdd.classList.add(classToAdd);
        whereToAdd.classList.remove(classToRemove);
    });
};

classAddRemove('click', hamburger, menu, 'flex', 'hidden');
classAddRemove('click', menuClose, menu, 'hidden', 'flex');

menuItems.forEach((item) => classAddRemove('click', item, menu, 'hidden', 'flex'));

themeToggler.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeToggler.setAttribute('src', './img/sun.png');
    } else {
        themeToggler.setAttribute('src', './img/moon.png');
    }
});
