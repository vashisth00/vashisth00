$(document).ready(function(){

	//bx-slider js//
	  $('.bxslider').bxSlider();


	// smooth scroll js//
    $(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - 70
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

    // menu active js//
    $('.navbar-nav li a').click(function(e) {
        $('.navbar-nav li').removeClass('active');
        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        //e.preventDefault();
    });


    // header reduce js//
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    if (scroll >= 150) {
	        $(".main-header").addClass("darkHeader");
	    } else {
	        $(".main-header").removeClass("darkHeader");
	    }
	}); 


	if($(window).windth < 767) {
	        $(".main-header").removeClass("darkHeader");
	}
	
	// wow js//
	new WOW().init();
	


	// blog page view more //
	function timedRefresh(timeoutPeriod) {
	    setTimeout("location.reload(true);",timeoutPeriod);	
	}

	$(".more-blog").click(function(){
		$(this).hide();
		$(".blLoader").show();
		//setTimeout(window.location.reload(true), 10000);
		timedRefresh(3000);
		return false;
		
	});




	// Back To top //
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.back-to-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});





	// Map JS //

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);
        
    function init() {
	    // Basic options for a simple Google Map
	    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	    var mapOptions = {
	    // How zoomed in you want the map to start at (always required)
	    zoom: 14,
	    // The latitude and longitude to center the map (always required)
	    center: new google.maps.LatLng(-37.8172349, 144.955825), // New York
	    // How you would like to style the map.
	    // This is where you would paste any style found on Snazzy Maps.
	    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]}]

	    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(-37.8172349, 144.955825),
	        map: map,
	        title: 'Snazzy!'
        });
    }




});

//isotop js//
$(window).load(function() {


	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.element-item',
	  layoutMode: 'fitRows'
	});
	// filter functions
	var filterFns = {
	  // show if number is greater than 50
	  numberGreaterThan50: function() {
	    var number = $(this).find('.number').text();
	    return parseInt( number, 10 ) > 50;
	  },
	  // show if name ends with -ium
	  ium: function() {
	    var name = $(this).find('.name').text();
	    return name.match( /ium$/ );
	  }
	};
	// bind filter button click
	$('.filters-button-group').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});
	
	

	//  NAVBAR CLOSE ICON //
	$(".navbar-toggle").on("click", function () {
	    $(this).toggleClass("active");
		$("body").toggleClass("popup-open");
	});

	$('.main-menu ul li a').click(function(){
		$("body").removeClass("popup-open");
	});



	//  NAVBAR OPEN/CLOSE //
	function resMenu() {
		if ($(window).width() < 1200) {

			$('.main-menu ul li a').on("click", function () {
				$(".navbar-collapse").removeClass("in"); 
				$(".navbar-toggle").addClass("collapsed").removeClass("active");    		
			});
	}
	else {}
	}

	resMenu();

	$(window).resize(function () {
	    resMenu();
	});


	// PORTFOLIO IMAGE POPUP //
	$('.portfolio .element-item img').click(function(){
		$("body").addClass("popup-open");
	});






});
window.onload = function () { 
	var cur_url = window.location.href;
	var animate_val = (cur_url).split("#")[1];
	if(animate_val){
		if($(window).width() < 768){
			$('html,body').animate({
				scrollTop: $('[id="' + animate_val + '"]').offset().top - 75},
			1000);
			return false;
		} else {
			$('html,body').animate({
				scrollTop: $('[id="' + animate_val + '"]').offset().top - 80},
			1000);
			return false;
		}
	}
}