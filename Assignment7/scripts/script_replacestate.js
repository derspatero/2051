// JavaScript Document

var currentState = {
	name: $('title').text()	
}

$(window).load(function(){
	
	history.replaceState(currentState, currentState.name, null);

	console.log(window.history);

});