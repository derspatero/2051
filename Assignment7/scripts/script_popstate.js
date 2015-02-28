// JavaScript Document

$navItems = $('.nav_cats a');

$navItems.click(function(e){
	
	e.preventDefault();
	
	$this = $(this);
	data = $this.text()
	
	history.pushState(data, data, $this.attr('href'));
	
});

$(window).on('popState', function(){
	
	alert('hello');	
	
});

window.onpopstate = function(){

	alert('hello');	
	
};

