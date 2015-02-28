// JavaScript Document

initMap();

function initMap(){
	
	var mapOut = document.getElementById('map_03');

	// This style array is from the
	// Paper theme from Snazzy Maps
	// http://snazzymaps.com/style/39/paper 
	var styleArray = [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#5f94ff"},{"lightness":26},{"gamma":5.86}]},{},{"featureType":"road.highway","stylers":[{"weight":0.6},{"saturation":-85},{"lightness":61}]},{"featureType":"road"},{},{"featureType":"landscape","stylers":[{"hue":"#0066ff"},{"saturation":74},{"lightness":100}]}];
		
	var mapOptions = {
	  center: new google.maps.LatLng(49.2832594, -123.1152064),
	  zoom: 13,
	  // set the custom styles for the
	  // Google map by passing in an array 
	  // of styles which was set above 
	  styles: styleArray
	};
	
	var map = new google.maps.Map(mapOut, mapOptions);
	
}

