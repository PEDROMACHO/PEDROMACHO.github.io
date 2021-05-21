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
    });

});