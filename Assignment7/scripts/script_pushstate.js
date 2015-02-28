// JavaScript Document

$navItems = $('.nav_cats a');

$navItems.click(function(e){
	
	e.preventDefault();
	
	$this = $(this);
	data = { name: $this.text()}
	
	history.pushState(data, data.name, $this.attr('href'));
	
	console.log(window.history);
	
});

