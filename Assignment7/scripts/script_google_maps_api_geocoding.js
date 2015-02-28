// JavaScript Document

initMap();

function initMap(){
	
	var mapOut = document.getElementById('map_03');
	
	// Creates a new Geocoder object
	var geocoder = new google.maps.Geocoder();
	
	// The address string that we will pass into the
	// geocoder geocode method
	var address = '555 Seymour St., Vancouver, BC, V6B 3H6, Canada';
	
	// Run the geocode method to convert an address
	// string into a geocode location
	geocoder.geocode( { 'address': address}, function(results, status) {
	  
	  // check if the geocode ran ok
	  if(status == google.maps.GeocoderStatus.OK) {
		
		// get the location information of the
		// address that was passed into the
		// geocode method
		var location = results[0].geometry.location;
		var mapOptions = {
		  // location is an object with properties and methods
		  // location.lat() = a method that returns latitude
		  // location.lng() = a method that returns longitude	
		  center: new google.maps.LatLng(location.lat(), location.lng()),
		  zoom: 13
		};
	
		var map = new google.maps.Map(mapOut, mapOptions);
		
	  } else {
		alert('Geocode was not successful for the following reason: ' + status);
	  }
	
   });

}

