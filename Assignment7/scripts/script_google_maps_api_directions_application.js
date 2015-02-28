// JavaScript Document

// Global Variables
var mapOut = $('#map_03').get(0);
var directionsOut = $('#directions').get(0);
var $btnClear = $('#btn_clear');
var map;
var markers = [];
var directionsService = new google.maps.DirectionsService();
var directionsRenderer;

// Initialize the map
initMap();

// Event Listeners

var mapClickListener = google.maps.event.addListener(map, 'click', function(e){
		createDirections(e);
});

$btnClear.click(function(){

	directionsRenderer.setMap(null);
	directionsRenderer.setPanel(null);
	mapClickListener = google.maps.event.addListener(map, 'click', function(e){
		createDirections(e);
	});
	
});

// Function for Creating a Google Map
function initMap(){
	
	// Set the element that will 
	// display the Google Map
	// .get() = gets the html 
	// of a jQuery html element
		
	var startLatLng = new google.maps.LatLng(49.2569425, -123.123904)
	
	var mapOptions = {
		zoom: 12,
		center: startLatLng,
	}
	
	map = new google.maps.Map(mapOut, mapOptions);

} // end initMap

function createDirections(e){
	
	
	var marker = new google.maps.Marker({position: e.latLng, map: map});
	markers.push(marker);
	
	if(markers.length > 1){
		google.maps.event.removeListener(mapClickListener);
		var marker01 = markers[0];
		var marker02 = markers[1];
		map.clearMarkers();
		directionsRenderer = new google.maps.DirectionsRenderer();
		directionsRenderer.setMap(map);
		directionsRenderer.setPanel(directionsOut);
		var request = {
			origin: marker01.getPosition(),
			destination: marker02.getPosition(),
			travelMode: google.maps.TravelMode.DRIVING
		};
		directionsService.route(request, function(result, status){
			if(status == google.maps.DirectionsStatus.OK){
				directionsRenderer.setDirections(result);	
			}else {
				alert('Directions Service was not successful for the following reason: ' + status);
	  		}	
		})	
	}
	
} // end createDirections

// Clear markers
google.maps.Map.prototype.clearMarkers = function() {
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers.length = 0;
} // end Clear markers
