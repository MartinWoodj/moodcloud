$(document).ready(function(){
	
	$('.player-bg').on('click', '.mood', function(){
		var moodName = $(this).attr('name');
		console.log(moodName);
		
		SC.get('/tracks', {
			genres: moodName, bpm: { from: 120 }
			}).then(function(tracks) {
			console.log(tracks);
		});
		
		var processTracks = function(tracks) {
			for (var i = 0; i < tracks.length; i++) {
			console.log(tracks.title);
  			}
  			console.log(processTracks());
		};
		
	});
		
	
	SC.initialize({ 
	client_id: 'd0cf582a4733adb30dd7ebcbf05a82e4'
	});


});





