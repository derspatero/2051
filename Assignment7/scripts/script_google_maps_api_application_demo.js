// JavaScript Document

// Global Variables
var geocoder;
var map;
var $mapMessageBox = null;
var marker = null;
var $mapNavLinks = $('.map_selector a');

// Initialize the map
initMap();

// Click event handler
$mapNavLinks.click(function(e){

	e.preventDefault();
	
	// check if marker has been set..
	// if it has been set clear it
	// from the map
	if(marker !== null){
		// This removes the marker
		// from the current Google
		// map 
		marker.setMap(null);	
	}
	
	// Set the address to the text value
	// of the clicked on link plus ', BC'
	var address = $(this).text() + ', BC';
	
	// Geocode the address and create a new marker
	geocoder.geocode({address: address}, function(results, status){
		
	  if(status == google.maps.GeocoderStatus.OK) {
	  	var location = results[0].geometry.location;
		var latlng = new google.maps.LatLng(location.lat(), location.lng());
		
		marker = new google.maps.Marker({
		
		  position: latlng,
		  map: map
		
		});
	  }else {
		alert('Geocode was not successful for the following reason: ' + status);
	  }
	  	  	
	}); // end geocoder
	
});

// Function for Creating a Google Map
function initMap(){
	
	// Set the element that will 
	// display the Google Map
	// .get(0) = gets the JavaScript
	// HTML element 
	// of a jQuery html element
	var mapOut = $('#map_03').get(0);
	
	var startLatLng = new google.maps.LatLng(49.2569425, -123.123904)
	
	var mapOptions = {
		zoom: 9,
		center: startLatLng,
		scrollwheel: false,
		draggable: false,
		disableDefaultUI: true
	}
	
	geocoder = new google.maps.Geocoder();
	
	map = new google.maps.Map(mapOut, mapOptions);

}


