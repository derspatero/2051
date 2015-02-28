// JavaScript Document

initMap();

function initMap(){
	
	var mapOut = document.getElementById('map_03');
	
	var geocoder = new google.maps.Geocoder();

	var address = '1740 W Broadway, Vancouver, BC V6J 1Y1';
	
	geocoder.geocode( { 'address': address}, function(results, status) {
	  
	  if(status == google.maps.GeocoderStatus.OK) {
		
		var location = results[0].geometry.location;
		var latlng = new google.maps.LatLng(location.lat(), location.lng());
		
		var mapOptions = {
		  center: latlng,
		  zoom: 15
		};
	
		var map = new google.maps.Map(mapOut, mapOptions);
		
		// Create a new Marker object
		var marker = new google.maps.Marker({
			
			// determines where to put the marker on the map
			position: latlng,
			// determines which map to put the marker on
			map: map,
			// creates a tooltip which displays
			// the text passed into this property
			// when the marker is hovered
			title: 'FutureShop - Broadway'	
		
		});
		
	  }else {
		alert('Geocode was not successful for the following reason: ' + status);
	  }
	
   });

}