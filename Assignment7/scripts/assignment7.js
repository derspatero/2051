// JavaScript Document

// Global Variables
var mapOut = $('#map_03').get(0);
var directionsOut = $('#directions').get(0);
var $btnClear = $('#btn_clear');
var map;
var markers = [];
var directionsService = new google.maps.DirectionsService();
var directionsRenderer;
var address = "953 Lamey's Mill Rd., Vancouver, BC, V6H 3P4, Canada";
var campus;

$("#get_direction").click(function (){
    address = $("#street").val() + "," + $("#city").val() + ", " + $("#province").val();
    campus = $("#campuses").val();

    //alert(campus);
    initMap(campus);
});

// Initialize the map
//initMap();

// Event Listeners

//var mapClickListener = google.maps.event.addListener(map, 'click', function(e){
//    createDirections(e);
//});

$btnClear.click(function(){

    directionsRenderer.setMap(null);
    directionsRenderer.setPanel(null);
    mapClickListener = google.maps.event.addListener(map, 'click', function(e){
        createDirections(e);
    });

});

// Function for Creating a Google Map
function initMap(campus){

    $("#directions").html("");

    // Set the element that will
    // display the Google Map
    // .get() = gets the html
    // of a jQuery html element

    var geocoder = new google.maps.Geocoder();


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
                zoom: 12
            };

            var map = new google.maps.Map(mapOut, mapOptions);

            //alert("yup");
            createDirections(location);

            var marker01 = new google.maps.Marker({

                position: location,
                map: map

            });

            alert(campus);

            var marker01 = new google.maps.Marker({

                position: campus,
                map: map

            });




        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }

    });


} // end initMap

function createDirections(location){
    // Create directions
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    // directionsOut is an HTML element
    directionsRenderer.setPanel(directionsOut);

    var geocoder = new google.maps.Geocoder();


    // Run the geocode method to convert an address
    // string into a geocode location
    geocoder.geocode( { 'address': campus}, function(results, status) {

        // check if the geocode ran ok
        if(status == google.maps.GeocoderStatus.OK) {

            // get the location information of the
            // address that was passed into the
            // geocode method
            campus = results[0].geometry.location;

            var request = {
                origin: location,
                destination: campus,
                travelMode: google.maps.TravelMode.DRIVING
            }
            directionsService.route(request, function(result, status){
                if(status == google.maps.DirectionsStatus.OK){
                    directionsRenderer.setDirections(result);
                }else {
                    alert('Directions Service was not successful for the following reason: ' + status);
                }
            });
            campus = results[0];
        }
        else {
             alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}


// Clear markers
google.maps.Map.prototype.clearMarkers = function() {
    for (var i = 0; i < markers.length; i++ ) {
        markers[i].setMap(null);
    }
    markers.length = 0;
} // end Clear markers
