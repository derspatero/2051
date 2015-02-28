// JavaScript Document

var btn = document.getElementById('btn');
var map;


function initialize() {
  var mapBox = document.getElementById('map')
  var mapOptions = {
	center: { lat: 56, lng: -96},
	zoom: 4
  };
  map = new google.maps.Map(mapBox, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

btn.addEventListener('click', function(){
	
	getandSetLocation();
	
});

function getandSetLocation(){
	
	// Test if geolocation is available
	if (navigator.geolocation) {
    
		navigator.geolocation.getCurrentPosition(function(position){
			
			// Create a LatLng object to store the users position
			var pos = new google.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);
			
			// Set the zoom level
			map.setZoom(15);
			// Set the centre of the map
			map.setCenter(pos);
			
			// Create a new info window and place it
			// on the map...
			var infoBox = new google.maps.InfoWindow({
				map: map,
				position: pos,
				content: 'Location found via the HTML5 Geolocation API'	
			});
			
		}, function(){
			// Error function...runs if there was an error
			// with the Geolocation API
			alert('Geolocation failed...');	
		});
		
    } else {
		// 
        alert('Geolocation is not available');
    }
	
		
}

