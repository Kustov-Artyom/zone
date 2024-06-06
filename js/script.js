'use strict'
const header = document.querySelector('.header');
const firstBlock = document.getElementById('service');
const firstBlockHeight = firstBlock.clientHeight;

let scrollStarted = 0;

window.addEventListener('scroll', headerScrollHandler);

function headerScrollHandler () {
    const scrollTop = window.scrollY;

    if (scrollTop >= firstBlockHeight) {
        header.classList.add('header--fixed')
    } else {
        header.classList.remove('header--fixed')
    }

    scrollStarted = scrollTop;
};

const progressBar = document.querySelector('.progressbar');
const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', ()=> {
    const windowScroll = window.scrollY;
    const progressBarWidth = (windowScroll / windowHeight).toFixed(2);

    progressBar.setAttribute('style', `transform: scaleX(${progressBarWidth});`);
});
