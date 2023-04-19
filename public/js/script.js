// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('nav-fixed');
    } else {
        header.classList.remove('nav-fixed');
    }
}

// Navbar menu
const navBtn = document.querySelector('#nav-btn');
const navMenu = document.querySelector('#nav-menu');
navBtn.addEventListener('click', function() {
    navBtn.classList.toggle('nav-active');
    navMenu.classList.toggle('hidden');
})

// Dropdown
const dropdownDefaultButton = document.querySelector('#dropdownDefaultButton');
const dropdownMenu = document.querySelector('#dropdown');
let lastOpened = null;

dropdownDefaultButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden');
});
