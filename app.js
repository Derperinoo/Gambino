(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// $('#app').html(`<h1><img src="lawl.gif"/></h1>
// 	<h1>Loading. . . .</h1>
// 	`);

// setTimeout(function(){
// 	x();
// },3000);

	$.ajax({
		url:"https://api.spotify.com/v1/search?q=artist:childish%20gambino&type=album"
	}).done(function(response){
		$.ajax({	
			url: response.albums.items[0].href
		}).done(function(album){
			console.log(response);
			var i;
			let html = ``;
			for(i=0; i<6; i++){
				html += `<div class="col s4">
				<h4>${album.tracks.items[i].name}</h4>
			<img src="${response.albums.items[i].images[1].url}" style="height:150px" style="width:150px"/>
			<h1>
			<audio controls>
			<source src="${album.tracks.items[i].preview_url}" type="audio/ogg">
			Your browser does not support the audio element.
			</audio>
			</h1>
			</div>`;
			}

	$('#app').html(html); //equivalent jquery of document.getElementById("app").innerHTML=html;
	});
});
	

