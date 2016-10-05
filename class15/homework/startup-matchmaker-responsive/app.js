$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
		if($(window).width()>= 936){
			console.log("hi");
			$("#mobile-nav").hide();	
		}
	})

	$("#mobile-nav").hide();

	$("#burger").click(function(){
		$("#mobile-nav").slideToggle();
	})
})
