// JavaScript Document

/*navigator.geolocation.getCurrentPosition(function(pos){
	console.log(pos);	
});*/

// Get users location on button click
var btn = document.getElementById('btn');
var out = document.getElementById('out');

btn.addEventListener('click', function(){
	
	// Test if geolocation is available
	if (navigator.geolocation) {
        // run the showPosition function when the user clicks the button
		// the position object is passed to the showPosition function by
		// the getCurrentPosition method...
		navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        out.innerHTML = "<p>Geolocation is not supported by this browser.</p>";
    }

}) // end event listener

function showPosition(pos){
	// pos --> is the position object passed in by the 
	// getCurrentPosition() method
	var html = '<ul>'
	// output the latitude from the pos object
	html += '<li>Latitude = ' + pos.coords.latitude + '</li>';
	// output the longitude from the pos object
	html += '<li>Longitude = ' + pos.coords.longitude + '</li>';
	html += '</ul>';
	
	out.innerHTML = html;
		
}











