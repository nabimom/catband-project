$(function () {
	var style1 = 'font-size:24px; padding:2px 0; background: #000000; color: #fff';
	var style2 = 'padding:5px; line-height:15px; font-size:10px; background: #DDDDDD; color: #000000';	
	console.log('%c Designed By Miiu S&C Corp.', style1);
	console.log('%c http://www.miiusoft.com', style2);	
	console.log('%c COPYRIGHT  2020 미유디자인. ALL RIGHTS RESERVED', style2);
});


$(document).ready(function () {
	
	
	/*상단메뉴 고정*/
	var fixNavi = function (fixID) {
		var navi = $(fixID), navipos = navi.offset();
		
		$(window).scroll(function () {
			var $H = $(fixID).outerHeight();
			if ($(this).scrollTop() > $H) {
				$(fixID).addClass("headerfixed");
			} else {
				$(fixID).removeClass("headerfixed");
			}

		});
	};
	fixNavi('#header .fixed');

	
	$('#search').on('mouseenter', function (e) {
		$(this).find('.search_input').stop().animate({ width: '228px' }, { 'duration': 200, 'queue': false, 'easing': 'linear' });
		$(this).find('.search-area').fadeIn();
	}).on('mouseleave', function (e) {
		$(this).find('.search_input').stop().animate({ width: '228px' }, { 'duration': 200, 'queue': false, 'easing': 'linear' });
		$(this).find('.search-area').fadeOut('fast');
	});


});