"use strict"
function scrollistener() {
    let html = document.getElementsByTagName('html')[0];
    let nav = document.getElementsByTagName('nav')[0];
    let menu = document.getElementsByClassName('menu')[0];
    let position = html.scrollTop;
    console.log(position);
    if(position == 0){
        nav.classList.remove('nav-scroll');
        menu.classList.remove('menu-scroll');
    }

    else{
        nav.classList.add('nav-scroll');
        menu.classList.add('menu-scroll');
    }
}
window.addEventListener('scroll', scrollistener);
