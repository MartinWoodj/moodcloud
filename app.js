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
		// find all tracks with the genre 'punk' that have a tempo greater than 120 bpm.
		SC.get('/tracks', {
			genres: moodName, bpm: { from: 120 }
			}).then(function(tracks) {
			console.log(tracks);
		});
		
	});
	
	SC.initialize({ 
	client_id: 'd0cf582a4733adb30dd7ebcbf05a82e4'
	});


	


});





