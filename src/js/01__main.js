var swiper = new Swiper('.home__slider', {
    effect: 'fade',
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var masterSwiper = new Swiper('.swiper-container.master__slider', {
    slidesPerView: 3,
    spaceBetween: 38,
    slidesPerGroup: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
  masterSwiper.slidePrev();
});
swiperNext.addEventListener('click', () => {
  masterSwiper.slideNext();
});

var atmosphereSwiper = new Swiper('.swiper-container.atmosphere__slider', {
    slidesPerView: 2,
    spaceBetween: 40,
    navigation: {
        nextEl: '.atmosphere__next',
        prevEl: '.atmosphere__prew',
    },
});

const atmosphereSwiperPrev = document.getElementById('atmosphereSwiperPrev')
const atmosphereSwiperNext = document.getElementById('atmosphereSwiperNext')

atmosphereSwiperPrev.addEventListener('click', () => {
  atmosphereSwiper.slidePrev();
})
atmosphereSwiperNext.addEventListener('click', () => {
  atmosphereSwiper.slideNext();
})