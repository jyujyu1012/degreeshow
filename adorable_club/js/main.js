$(function(){
	var $gotop = $('#gotop');
	$(window).on('scroll',function(){
		if ($(this).scrollTop()>100) {
			$gotop.stop(true).animate({
				bottom:0
			},300);
		} else {
			$gotop.stop(true).animate({
				bottom:'-120px'
			},300);
		}
	});
	$gotop.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},1000);
	});
	$('#slider').fadeIn(700,('easeOutQuart')).bxSlider({
		auto: true,
		autoControls: false,
		controls: true,
		pager: true,
		speed: 1000,
		autoHover: true,
		pause:	3000,
		easing: 'swing',
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		slideWidth: 500,
		slideMargin: 20
	});
});