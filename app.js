$('#app').html(`
	`);
setTimeout(function(){
	x();
},3000);

function x(){
	$.ajax({
		url:"https://api.spotify.com/v1/search?q=artist:childish%20gambino&type=album"
	}).done(function(response){
		$.ajax({
			url: response.albums.items[0].href
		}).done(function(album){
			console.log(response);
			let name = response.albums.items[0].artists[0].name;
			let image1 = response.albums.items[0].images[1].url;
			let mp3_1 = album.tracks.items[0].preview_url;
			let html = `
			<h1>${name}</h1>
			<img src="${image1}"/>
			<h1>
			<audio controls>
			<source src="${mp3_1}" type="audio/mpeg">
			Your browser does not support the audio element.
			</audio>
			</h1>
		`;
	$('#app').html(html); //equivalent jquery of document.getElementById("app").innerHTML=html;
	});
});
}




