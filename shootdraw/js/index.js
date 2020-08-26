$(function () {
    $('.main-marquee').marquee({
        duration: 15000,
        startVisible: true,
        duplicated: true
    });

    $(document).on("scroll", () => {
        $('.scroll__text').css({transform: "rotate(" + window.pageYOffset / 5 + "deg)"});
    });
});