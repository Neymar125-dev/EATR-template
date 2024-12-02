
(function ($) {
    "use strict";
    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            990: {
                slidesPerView: 2,
            },
            1119: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 2,
            },
        },
    });

    gsap.registerPlugin(ScrollTrigger);

    $(document).ready(function () {
        var elementFirst = document.querySelector('.site-header');

        ScrollTrigger.create({
            trigger: "body",
            start: "30px top",
            end: "bottom bottom",

            onEnter: () => myFunction(),
            onLeaveBack: () => myFunction()
        });

        $(".menu-toggle").click(function () {
            $(".main-navigation").toggleClass("toggled");
        });

        $(".header-menu ul li a").click(function () {
            $(".main-navigation").removeClass("toggled");
        });
    });
})(jQuery);

$(window).on('load', function () {
    $('body').removeClass('body-fixed');
});