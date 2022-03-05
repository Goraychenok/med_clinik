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
    navigation: {
        nextEl: ".slider_project_navigation_next",
        prevEl: ".slider_project_navigation_prev",
    },
});

    var swperThumb = []
    var swiperTop = []

    $(".gallery-thumb").each(function (i) {
        console.log($(this))
        swperThumb[i] = new Swiper($(this)[0], {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        });


    })

$(".gallery-top").each(function (i) {
    swiperTop[i] =  new Swiper($(this)[0], {
        loop: true,
        spaceBetween: 10,
        /*
        navigation: {
            nextEl: $(this).find('.swiper-button-next')[0],
            prevEl: ".swiper-button-prev",
        },

         */
        thumbs: {
            swiper: swperThumb[i],
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
    });


$(".inpit_email").on("keypress", function(e) {

    var char = /["a-zA-Z]/;
    var val = String.fromCharCode(e.which);
    var test = char.test(val);

    if(!test) return false
})
