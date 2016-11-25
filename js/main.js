$(document).ready(function(){
	$(".img-responsive portfolio-thumb").find(".carousel-caption").hide();
	$(".img-responsive portfolio-thumb").mouseenter(function(){
		$(this).find(".carousel-caption").show();
	});
$(".img-responsive portfolio-thumb").mouseleave(function(){
		$(this).find(".carousel-caption").hide();
});
})