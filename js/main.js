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
    // Булеты
    type: 'bullets',
    clickable: true,
    // Динамические буллети
    dynamicBullets: true,
    // Кастомные буллеты
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    
    // Фракция
    // type: 'fraction',
    // // Кастомный вывод фракции
    // renderFraction: function (currentClass, totalClass) {
    //     return 'Foto <span class="' + currentClass + '"></span>' +
    //     ' from' + '<span class="' + totalClass + '"></span>';
    //  },

    // type: 'progressbar',
    },

});

