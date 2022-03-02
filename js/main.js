
    var swiper = new Swiper(".mySwiper_first", {
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

//PHONE MASK
    jQuery(function($){
        $("#phone_mask_second").mask("+7 (999) 999-99-99");
        $("#phone_mask").mask("+7 (999) 999-99-99");
        //$("#phone-mask-two").mask("+7 (999) 999-99-99");
    });
