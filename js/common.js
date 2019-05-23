$(document).ready(function() {
	$(".fancybox").fancybox();
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		autoHeight : false,
		itemsMobile : false,
		responsive: {
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});
	
	var owlMin = $(".carousel-min");
	owlMin.owlCarousel({
		items: 4,
		autoHeight: true,
		itemsMobile: true
	});
	$(".other-next_button").click(function() {
		owlMin.trigger("owl.next");
	});
	$(".other-prev_button").click(function() {
		owlMin.trigger("owl.prev");
	});
	var owlDown = $(".carousel_down");
	owlDown.owlCarousel({
		items : 4,
		autoHeight : false
	});
	$(".right_button").click(function() {
		owlDown.trigger("owl.next");
	});
	$(".left_button").click(function() {
		owlDown.trigger("owl.prev");
	});
	

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});