$(document).ready(function(){
	
	var results
	
	$('.player-bg').on('click', '.mood', function(){
		var moodName = $(this).attr('name');
		console.log(moodName);
		
		SC.get('/tracks', {
			genres: moodName, bpm: { from: 120 }
			}).then(function(tracks) {
			console.log(tracks);
			
		$('.mood').hide();		
			
			for (var i = 0; i < tracks.length; i++) {
				console.log(tracks[i]);
				results += "<div><img src=" + tracks[i].artwork_url +"></div>"
				$('.results').html(results);
				console.log(results);
  				}
		});
	
		
		
	});
		
	
	SC.initialize({ 
	client_id: 'd0cf582a4733adb30dd7ebcbf05a82e4'
	});


});




/*





*/
