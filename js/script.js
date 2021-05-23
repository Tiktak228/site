$(document).ready(function(){
$('.slider').slick({
	dots: true,
	slidesToShow:2,

});
});
$(document).ready(function(){
$('.slider2').slick({
	dots: true,
	slidesToShow:3,
	variableWidth: true,
	slidesToScroll:2,
	speed:800,
	waitForAnimate:false,
	responsive:[
	{
		breakpoint:1294,
		settings: {
		arrows : false,
		}
	}
	]
});
});
$(document).ready(function(){
$('.slider3').slick({
	dots: false,
	variableWidth: true,
	slidesToShow:1,
	arrows : false,
	asNavFor: ".slider4",
	speed:800,
	waitForAnimate:false,
	//touchThreshold:30,
});
});
$(document).ready(function(){
$('.slider4').slick({
	dots: true,
	variableWidth: true,
	slidesToShow:3,
	slidesToScroll:1,
	arrows : true,
	asNavFor: ".slider3",
	speed:800,
	waitForAnimate:false,
	waitForAnimate:false,
	responsive:[
	{
		breakpoint:1294,
		settings: {
		arrows : false,
		}
	}
	]
	//touchThreshold:10,
});
});

