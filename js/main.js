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
    loop: true,
    navigation: {
        nextEl: ".slider_project_navigation_next",
        prevEl: ".slider_project_navigation_prev",
    },
});


    var swiper3 = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
});
    var swiper4 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
    thumbs: {
    swiper: swiper3,
},
});

var swiper5 = new Swiper(".projects_slider_four", {
    slidesPerView: 4,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

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
        //$("#phone-mask-two").mask("+7 (999) 999-99-99");
    });


$(".inpit_email").on("keypress", function(e) {

    var char = /["a-zA-Z]/;
    var val = String.fromCharCode(e.which);
    var test = char.test(val);

    if(!test) return false
})
