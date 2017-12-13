var key ="";
var limit="";
var user= "";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+user+"&api_key="+key+"&format=json&limit="+limit+"", true);
xhr.send();
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4) {
		var lasttrack = JSON.parse(xhr.response);
		var track = lasttrack.recenttracks.track;
		var theDiv = document.getElementById("content");
		var loader = document.getElementById("loading");
		loader.parentNode.removeChild(loader);
		for (var i = 0;  i <=track.length - 1; i++) {
			 trackArtist =track[i].artist["#text"];
			 trackName =track[i].name;
			 trackurl = track[i].url;
			 console.log(track[i]);
			 if (track[i].image[3]["#text"]==""){
			 	trackImgLarge="assets/img/nocover.png";
			 }
			 else {
			trackImgLarge = track[i].image[3]["#text"];
			}
			var card = document.createElement('a');
			var att = document.createAttribute("class");      
		att.value = "card";   
		card.setAttributeNode(att);                       
		var link = document.createAttribute("href");      
		link.value = trackurl;                          
		card.setAttributeNode(link);
			var style = document.createAttribute("style");
			style.value = "background-image : linear-gradient(135deg, rgba(54, 209, 220, .1) 0%,rgba(91, 134, 229, .9) 100%), url("+trackImgLarge+");background-size: cover; bakground-position: 50%";
			card.setAttributeNode(style);
		var h2 = document.createElement('h2');
		var h2Content = document.createTextNode(trackName)
		h2.appendChild(h2Content);
		var p = document.createElement('p');
		var pContent = document.createTextNode(trackArtist);
		p.appendChild(pContent);
		var box=document.createElement('div');
		//card.appendChild(cardImg);
		box.appendChild(h2);
		box.appendChild(p);
		card.appendChild(box);
		theDiv.appendChild(card);
		};
  }
});
