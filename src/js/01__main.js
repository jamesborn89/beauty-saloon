const doc = window.document
const linksCount = doc.links.length
for (let i = 0; i < linksCount; i++)
    if (doc.URL.startsWith(doc.links[i].href))
        doc.links[i].classList.add('active');

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
if (document.querySelector('.swiper-container')) {

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

    var atmosphereMinSwiper = new Swiper('.swiper-container.atmosphere__min-slider', {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4,
        loopedSlides: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
    });

    var atmosphereSwiper = new Swiper('.swiper-container.atmosphere__slider', {
        slidesPerView: 2,
        spaceBetween: 40,
        loopedSlides: 5,
        loop: true,
        navigation: {
            nextEl: '.atmosphere__next',
            prevEl: '.atmosphere__prew',
        },
        thumbs: {
            swiper: atmosphereMinSwiper
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
}
