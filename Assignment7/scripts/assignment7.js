// JavaScript Document

// Global Variables
var mapOut = $('#map_03').get(0);
var directionsOut = $('#directions').get(0);
var map;



$("#get_direction").click(function (){
    var starting_address = $("#street").val() + "," + $("#city").val() + ", " + $("#province").val();
    var campus = $("#campuses").val();

    initMap(starting_address, campus);
});


// Function for Creating a Google Map
function initMap(starting_address, campus){

    $("#directions").html("");

    var startpoint;
    var endpoint;

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': starting_address}, function(results, status) {
        if(status == google.maps.GeocoderStatus.OK) {
            startpoint = results[0].geometry.location;
            //alert("start " + startpoint);

            geocoder.geocode( { 'address': campus}, function(results, status) {
                if(status == google.maps.GeocoderStatus.OK) {
                    endpoint = results[0].geometry.location;

                    //alert("end " + endpoint);

                    var midpointlat = (endpoint.lat() + startpoint.lat())/2;
                    var midpointlng = (endpoint.lng() + startpoint.lng())/2;

                    var mapOptions = {
                        // location is an object with properties and methods
                        // location.lat() = a method that returns latitude
                        // location.lng() = a method that returns longitude
                        center: { lat: midpointlat, lng: midpointlng},
                        zoom: 12
                    };

                    map = new google.maps.Map(mapOut, mapOptions);

                    createDirections(startpoint, endpoint);

                }
                else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });

} // end initMap



function createDirections(start, end){
    // Create directions
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    // directionsOut is an HTML element
    directionsRenderer.setPanel(directionsOut);

    var request = {
        origin: start,
        destination: end,
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


//// Clear markers
//google.maps.Map.prototype.clearMarkers = function() {
//    for (var i = 0; i < markers.length; i++ ) {
//        markers[i].setMap(null);
//    }
//    markers.length = 0;
//} // end Clear markers
