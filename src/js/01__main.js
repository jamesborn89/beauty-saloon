const doc = window.document
const linksCount = doc.links.length
for (let i = 0; i < linksCount; i++)
    if (doc.URL.startsWith(doc.links[i].href))
        doc.links[i].classList.add('active');

var homeSwiper = new Swiper('.home__slider', {
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

var blogSwiper = new Swiper('.blog__slider.swiper-container', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    autoHeight: true,

    navigation: {
        nextEl: '.atmosphere__next',
        prevEl: '.atmosphere__prew',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 70,
        },
        960: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 70,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 70,
        }
    },
});

var homeSwiper = new Swiper('.services-home__container.swiper-container', {
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

var varietiesSwiper = new Swiper('.varieties__item-slider.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
        nextEl: '.atmosphere__next',
        prevEl: '.atmosphere__prew',
    },
});

if (window.matchMedia("(max-width: 1199px)").matches) {
    const slider = document.querySelectorAll('.services__slider');
    const wrapper = document.querySelectorAll('.services__wrapper');
    const item = document.querySelectorAll('.services__item');
    slider.forEach(item => item.classList.toggle('swiper-container'));
    wrapper.forEach(item => item.classList.toggle('swiper-wrapper'));
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


if (document.querySelector('.master__slider')) {
    var masterSwiper = new Swiper('.swiper-container.master__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        breakpoints: {
            425: {
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 38,
                slidesPerGroup: 3,
            }
        },

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
}

if (document.querySelector('.atmosphere__min-slider')) {
    var atmosphereMinSwiper = new Swiper('.swiper-container.atmosphere__min-slider', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        loopedSlides: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        breakpoints: {
            425: {
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
                slidesPerGroup: 4,
            },
        },
    });

    var atmosphereSwiper = new Swiper('.swiper-container.atmosphere__slider', {
        slidesPerView: 1,
        spaceBetween: 40,
        loopedSlides: 5,
        loop: true,
        breakpoints: {
            425: {
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            960: {
                slidesPerView: 2,
                spaceBetween: 40,
                loopedSlides: 5,
            }
        },

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

class Accordion {
    constructor(el) {
        this.el = el;
        this.summary = el.querySelector('summary');
        this.content = el.querySelector('.content');
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.summary.addEventListener('click', (e) => this.onClick(e));
    }
    onClick(e) {
        e.preventDefault();
        this.el.style.overflow = 'hidden';
        if (this.isClosing || !this.el.open) {
            this.open();
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }
    shrink() {
        this.isClosing = true;
        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight}px`;
        if (this.animation) {
            this.animation.cancel();
        }
        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });
        this.animation.onfinish = () => this.onAnimationFinish(false);
        this.animation.oncancel = () => this.isClosing = false;
    }

    open() {
        this.el.style.height = `${this.el.offsetHeight}px`;
        this.el.open = true;
        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        this.isExpanding = true;
        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });
        this.animation.onfinish = () => this.onAnimationFinish(true);
        this.animation.oncancel = () => this.isExpanding = false;
    }

    onAnimationFinish(open) {
        this.el.open = open;
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.el.style.height = this.el.style.overflow = '';
    }
}

document.querySelectorAll('details').forEach((el) => {
    new Accordion(el);
});