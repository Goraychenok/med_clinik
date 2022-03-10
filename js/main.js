//SLIDERS
    var swiper1 = new Swiper(".mySwiper_first", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
        nextEl: ".slider_navigation_next",
        prevEl: ".slider_navigation_prev",
        },
        breakpoints:{
        500:
            {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: ".slider_navigation_next",
                    prevEl: ".slider_navigation_prev",
            }
        },
},
});

var swiper2 = new Swiper(".projects_slider_main", {
    spaceBetween: 30,
    allowTouchMove: false,
    loop: true,
    navigation: {
        nextEl: ".slider_project_navigation_next",
        prevEl: ".slider_project_navigation_prev",
    },
});
var swiper3 = new Swiper(".rangeSliderMain", {
    spaceBetween: 30,
    allowTouchMove: false,
    /*
   loop: true,
 */
   navigation: {
       nextEl: ".slider_range_navigation_next",
       prevEl: ".slider_range_navigation_prev",
   },


});

    var swperThumb = []
    var swiperTop = []
    var swiperRight = []
    var swiperRangeTop = []
    var swiperRangeThumb = []

$(".gallery-thumb-range").each(function (i) {
    swiperRangeThumb[i] = new Swiper($(this)[0], {
        direction: 'vertical', // вертикальная прокрутка
        slidesPerView: 3, // показывать по 3 превью
        spaceBetween: 24, // расстояние между слайдами
        freeMode: true, // при перетаскивании превью ведет себя как при скролле
        breakpoints: { // условия для разных размеров окна браузера
            0: { // при 0px и выше
                direction: 'horizontal',
                slidesPerView: 2,// горизонтальная прокрутка
            },
            500: {
                slidesPerView: 3,
                direction: 'horizontal',
            },
            1000: { // при 768px и выше
                direction: 'vertical', // вертикальная прокрутка
            }
        }

    });


})
$(".gallery-top-range").each(function (i) {
    swiperRangeTop[i] =  new Swiper($(this)[0], {
        spaceBetween: 10,
        allowTouchMove: false,
        thumbs: {
            swiper: swiperRangeThumb[i],
        },
    });
})

    $(".gallery-thumb").each(function (i) {
        swperThumb[i] = new Swiper($(this)[0], {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 2,
            freeMode: true,
            watchSlidesProgress: true,
            scrollbar: {
                el: ".swiper-scrollbar",
            },
            breakpoints:{
                500:
                    {
                        loop: true,
                        spaceBetween: 10,
                        slidesPerView: 3,
                        freeMode: true,
                        watchSlidesProgress: true,
                        scrollbar: {
                            el: ".swiper-scrollbar",
                        },
                    },
            },

        });


    })

$(".gallery-top").each(function (i) {
    swiperTop[i] =  new Swiper($(this)[0], {
        loop: true,
        spaceBetween: 10,
        allowTouchMove: false,
        thumbs: {
            swiper: swperThumb[i],
        },
    });
})

$(".sliderRightProjects").each(function (i) {
    swiperRight[i] =  new Swiper($(this)[0], {
        spaceBetween: 10,
        allowTouchMove: false,

        navigation: {
            nextEl: $(this).find('.sliderRightProjects_navigator_right')[0],
            prevEl: $(this).find('.sliderRightProjects_navigator_left')[0],
        },


    });
})





var swiper = new Swiper(".docSlider", {
    loop: true,
    allowTouchMove: false,
    navigation: {
        nextEl: ".slider_doc_next",
        prevEl: ".slider_doc_prev",
    },

});









//PHONE MASK
    jQuery(function($){
        $("#phone_mask_second").mask("+7 (999) 999-99-99");
        $("#phone_mask").mask("+7 (999) 999-99-99");
        $("#back_link_phone").mask("+7 (999) 999-99-99");
        $("#pluses_phone").mask("+7 (999) 999-99-99");
        $("#delivery_phone").mask("+7 (999) 999-99-99");
        $("#projects_phone").mask("+7 (999) 999-99-99");

    });






jQuery(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').addClass('active');
    });

});

function slowScroll(id){
    var offset = 80;
    $('html,body').animate ({
        scrollTop: $(id).offset ().top - offset
    },1000);
    $('body').removeClass('lock');
    $('.header__burger,.header__menu').removeClass('active');
    return false;
}
$('.header__link').on('click', function(){
    $('.header__link').removeClass('active');
    $(this).addClass('active');

})


jQuery(window).scroll(function() {
    var the_top = jQuery(document).scrollTop();
    if (the_top > 10) {
        jQuery('.header_bottom').addClass('active');
    }
    else {
        jQuery('.header_bottom').removeClass('active');
    }

});

$(document).ready(function(){
    $(".inpit_email").inputmask("email")
});