'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
    }
});

const navbarMenu = document.querySelector('.navbar-menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link === null) {
        return;
    }
    scrollIntoView(link);
})

const contactBtn = document.querySelector('.home-contact')
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});


// scroll 하면 home section이 점점 투명해짐
const home = document.querySelector('.home-container');
const homeHeight = home.getBoundingClientRect().height; // 702
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}

