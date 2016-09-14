
$("#box1").css("background-color", "blue")

$("#box2").css("background-color", "purple")

$("#box1").html("hello")

$("#box2").html("goodbye")

$("#box1").click(function(){
	$("#box1").css("height", "500px")
	$("#box1").css("width", "500px")
})

$("#box2").click(function(){
	$("#box2").css("height", "500px")
	$("#box2").css("width", "500px")
})