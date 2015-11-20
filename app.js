$(document).ready(function(){
	$('.player-bg').on('click', '.mood', function(){
		var moodName = $(this).attr('name');
		console.log(moodName);
	});
});