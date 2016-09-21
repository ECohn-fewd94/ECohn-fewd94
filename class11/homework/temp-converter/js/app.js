
$(document).ready(function (){
	console.log("yay!")

	$("#submit").click(function(){
		console.log("click")
		var fair = parseInt($("#fair").val());
		var cel = (fair - 32) / 1.8
		$("#cel").html(cel)	

	})


})
	







