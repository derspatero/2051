// JavaScript Document

// Select tab links
$tabs = $('.tab_nav a');

// Select the tab content boxes
$tabContent = $('.tab_content');

// Update state for back button...
// using jQuery BBQ plugin...
$(window).on('hashchange', function() {

	var hash = window.location.hash || $tabs.filter(':first').attr('href');
	
	var el = $('a[href="'+ hash + '"]');
	
	$tabs.removeClass('active');
	el.addClass('active');
	$tabContent.hide();
	$(hash).show();

});

//  trigger hashchange event on page load
$(window).trigger('hashchange');






