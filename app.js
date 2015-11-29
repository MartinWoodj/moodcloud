$(document).ready(function(){
/*
	$('a[name=angry]').on('click', '.mood', function(){
		var moodName = $(this).attr('name');
		console.log(moodName);
	});
*/
/*
	$('a[name=angry]').on('click', function(e){
		var angryMood = $(this).attr('name');
		console.log(angryMood);
	});
*/
	
	$('.player-bg').on('click', '.mood', function(){
		var moodName = $(this).attr('name');
		console.log(moodName);
	});


});