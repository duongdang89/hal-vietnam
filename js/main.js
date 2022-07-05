var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');
var navbarWrapper = document.querySelector('.hal-nav');
var overlay = document.querySelector('.overlay');
menuBtn.addEventListener('click', function () {
    navbarWrapper.classList.remove('hide-to-left');
    overlay.classList.add('show');
})

closeBtn.addEventListener('click', function () {
    if (!navbarWrapper.classList.contains('hide-to-left')) {
        navbarWrapper.classList.add('hide-to-left');
        overlay.classList.remove('show');
    }
})