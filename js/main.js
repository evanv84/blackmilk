jQuery(document).ready(function($) {


	//Preloader screen
	var tlPreload = new TimelineMax();

		tlPreload
			.to('.preloader .container img', 2, {autoAlpha: 1, ease: Power2.easeInOut}, 0.5)
			.to('.preloader .container span', 2, {width: '430px', ease: Power3.easeInOut})
			.to('.preloader', 1, {autoAlpha: 0, ease: Power1.easeInOut})
			.to('.preloader', 1, {display: 'none', ease: Linear.easeNone})
			.to('header .container', 2, {autoAlpha: 1, y: '15', ease: Power3.easeInOut}, "-=1")

	$.fn.preload = function() {
	    this.each(function(){
	        $('<img/>')[0].src = this;
	    });
	}

	$([
		"../wp-content/themes/blackmilk/img/header-bg.jpg",
		"../wp-content/themes/blackmilk/img/portfolio/img-1.jpg",
		"../wp-content/themes/blackmilk/img/portfolio/img-2.jpg",
		"../wp-content/themes/blackmilk/img/portfolio/img-3.jpg",
		"../wp-content/themes/blackmilk/img/portfolio/img-4.jpg",
		"../wp-content/themes/blackmilk/img/portfolio/img-5.jpg",
		"../wp-content/themes/blackmilk/img/portfolio/img-6.jpg",
		"../wp-content/themes/blackmilk/img/portfolio/img-7.jpg",
		"../wp-content/themes/blackmilk/img/portfolio/img-8.jpg",
		"../wp-content/themes/blackmilk/img/portfolio/img-9.jpg",
		"../wp-content/themes/blackmilk/img/portfolio/img-10.jpg",
		
	])
	.preload();
	
	//Pin header
	//init scrollmagic
	var controller = new ScrollMagic.Controller();

	// pin the intro //////////////////////////////
	var pinHeader = new ScrollMagic.Scene({
		triggerElement: "#top",
		triggerHook: 0,
		duration: '100%'
	})
	.setPin('#top', {pushFollowers: false})
	.addTo(controller);

	//Pin bars ////////////////////////////////////
	var pinAbout = new ScrollMagic.Scene({
		triggerElement: "#portfolio",
		triggerHook: 0,
		duration: '1300px'
	})
	.setPin('#portfolio .bar', {pushFollowers: false})
	.addTo(controller);


	var pinServices = new ScrollMagic.Scene({
		triggerElement: "#services",
		triggerHook: 0,
		duration: '1000px'
	})
	.setPin('#services .bar', {pushFollowers: false})
	.addTo(controller);

	var pinArticles = new ScrollMagic.Scene({
		triggerElement: "#articles",
		triggerHook: 0,
		duration: '500px'
	})
	.setPin('#articles .bar', {pushFollowers: false})
	.addTo(controller);


	// Nav toggle
	$('.nav-collapse').on('click', function(){
		$('nav ul').toggleClass('showing');
		$('#nav-icon').toggleClass('open');
	});

	$('.gallery').fancybox();

});