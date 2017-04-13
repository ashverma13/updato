// Mobile Menu
$(document).on('click', 'a.mobile-menu', function(){
	$('.main-nav').slideToggle();
	return false;
});

// Menu dissappearing fix
$(window).resize(function(){
	if(!$('.mobile-menu').is(':visible')) {
		$('.main-nav').removeAttr('style');
	}
});

// Main Search fade in
$(document).on('click', 'a.search-page', function(){
	$('.main-search').fadeIn();
	return false;
});

// Main Search close
$(document).on('click', 'a.close-search', function(){
	$('.main-search').fadeOut();
	return false;
});

// Custom select box
$('.custom-select').chosen({
});
$('.custom-select').on('chosen:showing_dropdown', function(){
	$('.chosen-results').mCustomScrollbar();
});
$('.custom-select').on('chosen:hiding_dropdown', function(){
	$('.chosen-results').mCustomScrollbar('destroy');
});

$('.custom-scrollbar').mCustomScrollbar();