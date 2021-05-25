$(document).ready(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    })

    const swiper = new Swiper('.reviews__slider', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.reviews__slider-next',
            prevEl: '.reviews__slider-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetweenSlides: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetweenSlides: 30
            },
        }
    
    });
    
    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active');
    });

});