// JavaScript Document

var $stylesheet = $('#stylesheet');
var $selectStyle = $('#select_style');
var $btn = $('#btn_01');
var styleCookie = $.cookie('style');

console.log(styleCookie);

// test style cookie
// if it exists load the stylesheet
// and reset the cookies expiry
if(styleCookie){
	// set the stylesheet to the saved cookie value
	$stylesheet.attr('href', 'styles/styles_' + styleCookie + '.css');
	// reset the cook to a new expiry date
	$.cookie('style', styleCookie , { expires: 365, path: '/' });	
}

// Event Listener
// Set Cookie on Click
$btn.click(function(){
	// get the value from the form
	var selectStyleValue = $selectStyle.val();
	// lower case the text from the option values
	selectStyleValue = selectStyleValue.toLowerCase();
	// change the stylesheet to the selected stylesheet
	$stylesheet.attr('href', 'styles/styles_' + selectStyleValue + '.css');
	// set the cookie for the stylesheet
	$.cookie('style', selectStyleValue , { expires: 365, path: '/' });
})

