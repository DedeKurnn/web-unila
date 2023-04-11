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

const navBtn = document.querySelector('#nav-btn');

navBtn.addEventListener('click', function() {
    navBtn.classList.toggle('nav-active');
})