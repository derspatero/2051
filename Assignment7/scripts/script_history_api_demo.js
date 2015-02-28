// JavaScript Document

var $navItems = $('.nav_cats a');
var $output = $('.content');
var tempLocationAsArray = window.location.href.split('/');
var originalHref = tempLocationAsArray.pop();
var originalTitle = $('title').text();
var originalContent = $output.html();

init();

$navItems.click(function(e){
	e.preventDefault();
	$this = $(this);
	href = $this.attr('href');
	data = { 
		name: $this.text(),
		href: $this.attr('href')
	}
	history.pushState(data, data.name, $this.attr('href'));
	getContent(href);
});

$(window).on('popstate', function(e) {
	var state = e.originalEvent.state;
	var href = state.href;
	getContent(href);
}); // end popstate event listener

function init(){
	data = { 
		name: originalTitle,
		href: originalHref
	}
	history.replaceState(data, originalTitle, null);
} // end init()

function getContent(href){
	var html = '';
	if(href === originalHref){
		$output.html(originalContent);
	}else{
		$.getJSON('data/cats.json', function(data){
		  $.each(data, function(key, value){
			  if(value.url === href){
				  html = '<img src="' + value.picture + '" alt="Cat" />'
				  html += '<p>' + value.info + '</p>';
			  } // end if
		  }) // end $.each
		  $output.html(html);		  
		}) // end $.getJSON
	} // end if
} // end getContent()
