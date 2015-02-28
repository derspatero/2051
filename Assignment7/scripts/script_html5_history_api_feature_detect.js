// JavaScript Document

var $output = $('#output p');

var supported = isHTML5HistoryAPISupported() ? 'HTML5 History API is supported' : 'HTML5 History API is not supported';

$output.html(supported);

function isHTML5HistoryAPISupported() {
     return !!(window.history && history.pushState);
}