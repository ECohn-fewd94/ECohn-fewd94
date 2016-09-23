$(document).ready(function () {

$("#myForm").submit(function(e){
	console.log(event);
	var the_input = $("#name-input").val();
	$("#target").html(the_input);
	event.preventDefault();
})




})
