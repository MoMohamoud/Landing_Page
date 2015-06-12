$(document).ready(function (){
	alert('hi');
	console.log("hi");


	$('.swipebox').swipebox();
})

$(document).ready(function (e){
	$('a').click(function (e){
		e.preventDefault;
		console.log('preventing')
	}

});