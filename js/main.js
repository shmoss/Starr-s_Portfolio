



console.log("Running main.js v1.0 as javascript front-end");
$(document).ready(function(){
	$(".portfolio-content").find(".carousel-caption").hide();
	$(".brightness").mouseenter(function(){
		$(this).find(".carousel-caption").show();
	});
	$(".brightness").mouseleave(function(){
		$(this).find(".carousel-caption").hide();
	});




})