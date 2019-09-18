$(document).ready(function () {
    // Photobox
    $('#gallery').photobox('a', { time : 0 });

    // Валидация форм
    $('.form-submit').on('click', function(e){
        e.preventDefault();
        var count_errors = 0;
        var form = $(this).parent('form');

        $('.required', form).each(function(i, el){
            if($('input', el).val() == '' || $('textarea', el).val() == ''){
                $(el).addClass('error');
                count_errors++;
            } else {
                $(el).removeClass('error');
            }
        });

        if(count_errors == 0){
            form.submit();
        }
    });

    // Мобильное меню
    $('.header__hamburder-wrapper').on('click', function(){
        $('body').toggleClass('mobile-open');

        if($('.mobile-open').length > 0){
            $('.mobile-menu').css({ 'display' : 'block' });
            $('.mobile-menu').animate({
                opacity: 1,
            }, 300, function() {
                // Animation complete.
            });
        } else {
            $('.mobile-menu').animate({
                opacity: 0,
            }, 300, function() {
                $('.mobile-menu').css({ 'display' : 'none' });
            });
            $('.mobile-menu ul li').each(function(i, el){
                $(el).css({ 'opacity' : 0 });
            });
        }
    });
});