// JavaScript Document

initMap();

function initMap(){
	
	var mapOut = document.getElementById('map_03');

	// This is the array of style
	// settings that will be passed
	// into the new Google map
	var styleArray = [
	  {
		featureType: "all",
		stylers: [
		  { saturation: -80 }
		]
	  },{
		featureType: "road.arterial",
		elementType: "geometry",
		stylers: [
		  { hue: "#00ffee" },
		  { saturation: 50 }
		]
	  },{
		featureType: "poi.business",
		elementType: "labels",
		stylers: [
		  { visibility: "off" }
		]
	  }
	];
		
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

