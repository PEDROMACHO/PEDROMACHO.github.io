$(function() {

	$(".exit").click(function(event) {
		$(".side-menu").toggleClass('activemenu');
		if($(".side-menu").hasClass('activemenu')){
			menuOpened();
			$(".side-menu").css('width', '285px');
		} else {
			menuClosed();
			$(".side-menu").css('width', '70px');
		}
	});

	function menuOpened() {
		var mainWrapperWidth = $(document).width() - 285;
		$(".menu").width(mainWrapperWidth);
	}

	function menuClosed() {
		var mainWrapperWidth = $(document).width() - 70;
		$(".menu").width(mainWrapperWidth)
	}

	$(window).resize(function(event) {
		if($(".side-menu").hasClass('activemenu')){
			menuOpened();
		} else {
			menuClosed();
		}
		sideScrollMenuResize();
	});

	$(document).ready(function() {
		menuClosed();
		sideScrollMenuResize();
	});


	function sideScrollMenuResize() {
		var height = $(".side-menu").height() - 150;
		$(".side-scroll-menu").height(height);
	}

	$(".dropdown-toggle").click(function(event) {
		var parent = $(this).parent();
		$(">.dropdown-div", parent).slideToggle(400);
	});

	$(".dropdown-div li").click(function(event) {
		var tiltType = $(this).html();
		var parent = $(this).parent().parent().parent();

		$(".dropdown-toggle", parent).html(tiltType);
		$(".dropdown-div", parent).slideToggle(400);
	});

	$(".body-type-dropdown-toggle").click(function(event) {
		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			$(".bg-blackout").css('display', 'block');
			$(".bg-blackout").animate({opacity: 1}, 400);
			$(".body-type-dropdown-filter").css('display', 'block');
			$(".body-type-dropdown-filter").animate({height: "345px"}, 400)
		} else {
			
			$(".body-type-dropdown-filter").animate({height: 0}, 400, function () {
				$(".body-type-dropdown-filter").css('display', 'none');
				$(".bg-blackout").animate({opacity: 1}, 400, function () {
					$(".bg-blackout").css('display', 'none');
				});
			});

		}
	});

	$(".bg-blackout").click(function(event) {
		
		$(".body-type-dropdown-filter").animate({height: 0}, 400, function () {
			$(".body-type-dropdown-filter").css('display', 'none');
			$(".bg-blackout").animate({opacity: 1}, 400, function () {
				$(".bg-blackout").css('display', 'none');
			});
		});
		$(".body-type-dropdown-toggle").toggleClass('active');
	});
});




window.onload = function() {
	baron({
		root: '.baron',
		scroller: '.baron__scroller',
		bar: '.baron__bar',
		scrollingCls: '_scrolling',
		draggingCls: '_dragging'
	}).fix({
		elements: '.header__title',
		outside: 'header__title_state_fixed',
		before: 'header__title_position_top',
		after: 'header__title_position_bottom',
		clickable: true
	}).controls({
		track: '.baron__track',
		forward: '.baron__down',
		backward: '.baron__up'
	})


$(".page-scroll").click(function(event) {
	var w_top = $(window).scrollTop(),
		w_bottom = $(window).height()+w_top,
		current,
		target;


	$("section").each(function() {
		if(($(this).offset().top+80>w_top)&&($(this).offset().top+80<w_bottom)){
			current = $(this).attr('id');
		}
	});

	if ($(this).hasClass('selected-page-arrow-down')){
		target = Number(current.match(/\d+$/)[0])+1;
		if (target == 4) {
			$(".selected-page-arrow-down").css('display', 'none');
		}
		$(".selected-page-arrow-up").css('display', 'inline-block');
		target = "#section-"+target;
	} else{
		target = Number(current.match(/\d+$/)[0])-1;
		if (target == 1) {
			$(".selected-page-arrow-up").css('display', 'none');
		}
		$(".selected-page-arrow-down").css('display', 'inline-block');
		target = "#section-"+target;
	}



	$('html, body').animate({ scrollTop: $(target).offset().top }, 500);


});


}

