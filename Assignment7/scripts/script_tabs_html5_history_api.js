// JavaScript Document

// Select tab links
$tabs = $('.tab_nav a');

// Select active tab link
$tabActive = $('.tab_nav .active');

// Select the tab content boxes
$tabContent = $('.tab_content');

init();

function init(){
	if(window.location.hash){
		var currentTab = $('a[href="' + window.location.hash + '"]')
		$tabs.removeClass('active');
		currentTab.addClass('active');
		history.replaceState({hash: window.location.hash}, '', null);
		displayActiveTabContent($tabActive);
	}else{
		var hashDefault = $tabs.filter(':first').attr('href');
		history.replaceState({hash: hashDefault}, '', null);
		displayActiveTabContent($tabActive);	
	}
};

// Click event for tab links
$tabs.click(function(e){
	e.preventDefault();
	var $this = $(this);
	$tabs.removeClass('active');
	$this.addClass('active');
	displayActiveTabContent($this);
	history.pushState({hash: this.hash}, '', this.hash);	
}); 

// popstate event listener
$(window).on('popstate', function(e) {
	var state = e.originalEvent.state;
	var hash = state.hash;
	var el = $('a[href="' + hash + '"]');
	$tabs.removeClass('active');
	el.addClass('active');
	displayActiveTabContent(el);
}); // end popstate event listener

// Function for displaying the active tab
function displayActiveTabContent(activeTab){
	$tabContent.hide();
	var activeID = activeTab.attr('href');
	$(activeID).show();
}
