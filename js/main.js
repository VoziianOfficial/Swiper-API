// инициализация свайпера

new Swiper('.image-slider',{
//    стрелки
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
},

// Навигация
// Булеты, текущее положение, прогрессбар
pagination: {
    el: '.swiper-pagination',
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    // Булеты
    // type: 'bullets',
    // clickable: true,
    // // Динамические буллети
    // dynamicBullets: true,
    // // Кастомные буллеты
    // renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
    
    // Фракция
    type: 'fraction',
    // Кастомный вывод фракции
    renderFraction: function (currentClass, totalClass) {
        return 'Foto <span class="' + currentClass + '"></span>' +
        ' from ' + '<span class="' + totalClass + '"></span>';
     },
    //  прогрессбар
    // type: 'progressbar',
    },
    // скролбар
    scrollbar: {
        el: '.swiper-scrollbar',
        //возможность перетаскивать скролл
        draggable: true
    },

    simulateTouch: true,
    touchRadio: 1,
    touchAngle: 45,
    grabCursor: true,

    slideToClickedSlide: true,

    hashNavigation: {
        watchState: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,

    },

    mousewheel: {
        sensitive: 1,
    },

    slidesPerView: 2,

    spaceBetween: 10,

    loop: true,

    loopedSlides: 2,

    // autoplay: {
    //     delay: 1000,

    //     stopOnLastSlide: true,

    //     disableOnInteraction: false,
    // }

    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        678: {
            slidesPerView: 3,
        },
        712: {
            slidesPerView: 7,
        }
    },



});

