// JavaScript Document

// Global Variables


// Initialize the map
initMap();


// Function for Creating a Google Map
function initMap(){
	
	// Set the element that will 
	// display the Google Map
	// .get(0) = gets the JavaScript
	// HTML element 
	// of a jQuery html element
	var mapOut = $('#map_03').get(0);
	var directionsOut = $('#directions').get(0);
	
	var startLatLng = new google.maps.LatLng(49.2683777, -123.0573852)
	
	var mapOptions = {
		zoom: 12,
		center: startLatLng,
	}
	
	var map = new google.maps.Map(mapOut, mapOptions);
	
	var BCITDowntownLatLng = new google.maps.LatLng(49.2832643, -123.11520760000002);
	var BCITBurnabyLatLng = new google.maps.LatLng(49.2515143, -123.00452000000001);
	
	var marker01 = new google.maps.Marker({
		
		  position: BCITDowntownLatLng,
		  map: map
		
		});
		
	var marker01 = new google.maps.Marker({
		
		  position: BCITBurnabyLatLng,
		  map: map
		
	});
	
	// Create directions
	var directionsService = new google.maps.DirectionsService();
	var directionsRenderer = new google.maps.DirectionsRenderer();
	directionsRenderer.setMap(map);
	// directionsOut is an HTML element
	directionsRenderer.setPanel(directionsOut);
	var request = {
		origin: BCITDowntownLatLng,
		destination: BCITBurnabyLatLng,
		travelMode: google.maps.TravelMode.DRIVING	
	}
	directionsService.route(request, function(result, status){
		if(status == google.maps.DirectionsStatus.OK){
			directionsRenderer.setDirections(result);	
		}else {
			alert('Directions Service was not successful for the following reason: ' + status);
	  	}		
	});

}

