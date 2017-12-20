import Swiper from 'swiper/dist/js/swiper.js';

let mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

let search = document.getElementsByClassName('search__btn')[0];

search.addEventListener('click', function () {
    let wrap = document.getElementsByClassName('search')[0];
    console.log('222');
    wrap.classList.toggle('open');
}, false);