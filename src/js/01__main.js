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

if (window.matchMedia("(max-width: 1199px)").matches) {
    const slider = document.querySelectorAll('.services__slider');
    const wreppe = document.querySelectorAll('.services__wrepper');
    const item = document.querySelectorAll('.services__item');
    slider.forEach(item => item.classList.toggle('swiper-container'));
    wreppe.forEach(item => item.classList.toggle('swiper-wrapper'));
    item.forEach(item => item.classList.toggle('swiper-slide'));
}

var masterSwiper = new Swiper('.swiper-container.services__slider', {
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

// if (document.querySelector('.swiper-container')) {

//     var masterSwiper = new Swiper('.swiper-container.master__slider', {
//         slidesPerView: 3,
//         spaceBetween: 38,
//         slidesPerGroup: 3,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });

//     const swiperPrev = document.getElementById('swiperPrev')
//     const swiperNext = document.getElementById('swiperNext')

//     swiperPrev.addEventListener('click', () => {
//         masterSwiper.slidePrev();
//     });
//     swiperNext.addEventListener('click', () => {
//         masterSwiper.slideNext();
//     });

//     var atmosphereMinSwiper = new Swiper('.swiper-container.atmosphere__min-slider', {
//         slidesPerView: 4,
//         spaceBetween: 40,
//         slidesPerGroup: 4,
//         loopedSlides: 5,
//         freeMode: true,
//         watchSlidesVisibility: true,
//         watchSlidesProgress: true,
//         loop: true,
//     });

//     var atmosphereSwiper = new Swiper('.swiper-container.atmosphere__slider', {
//         slidesPerView: 2,
//         spaceBetween: 40,
//         loopedSlides: 5,
//         loop: true,
//         navigation: {
//             nextEl: '.atmosphere__next',
//             prevEl: '.atmosphere__prew',
//         },
//         thumbs: {
//             swiper: atmosphereMinSwiper
//         },
//     });

//     const atmosphereSwiperPrev = document.getElementById('atmosphereSwiperPrev')
//     const atmosphereSwiperNext = document.getElementById('atmosphereSwiperNext')

//     atmosphereSwiperPrev.addEventListener('click', () => {
//         atmosphereSwiper.slidePrev();
//     })
//     atmosphereSwiperNext.addEventListener('click', () => {
//         atmosphereSwiper.slideNext();
//     })
// }

const boxes = document.querySelectorAll('.master-solon__wpapper .master-solon__item-card');
const body = document.querySelector('body');

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('active');
        body.classList.toggle('oh');
    });
})


let burger = document.querySelector('.header__hamburger');
let menu = document.querySelector('.header__nav');

burger.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
});


function toggleMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
    document.querySelector('html').classList.toggle('lock');
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const menu_is_active = menu.classList.contains('active');

    if (!its_menu && menu_is_active) {
        toggleMenu();
    }
});