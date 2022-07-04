var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');
var navbarWrapper = document.querySelector('.hal-nav');
var navbarShow = false;
var overlay = document.querySelector('.overlay');
menuBtn.addEventListener('click', function() {
    navbarShow = !navbarShow;
    if(navbarShow === true) {
        navbarWrapper.classList.remove('hide-to-left');
        overlay.style.visibility = 'visible';
    }
    else {
        navbarWrapper.classList.add('hide-to-left');
        overlay.style.visibility = 'hidden';
    }
})

closeBtn.addEventListener('click', function() {
    if(!navbarWrapper.classList.contains('hide-to-left'))
    {
        navbarWrapper.classList.add('hide-to-left');
        overlay.style.visibility = 'hidden';
    }
        
})