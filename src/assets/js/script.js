/*
Author       : Dreamguys
Template Name: Dreams LMS - Bootstrap Template
Version      : 1.0
*/

(function($) {
    "use strict";

    // Stick Sidebar
	
	if ($(window).width() > 767) {
		if($('.theiaStickySidebar').length > 0) {
			$('.theiaStickySidebar').theiaStickySidebar({
			  // Settings
			  additionalMarginTop: 70
			});
		}
	}
		
	if($('.toggle-password').length > 0) {
		$(document).on('click', '.toggle-password', function() {
			$(this).toggleClass("feather-eye feather-eye-off");
			var input = $(".pass-input");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}
	
	// Sidebar
	
	if($(window).width() <= 991){
	var Sidemenu = function() {
		this.$menuItem = $('.main-nav a');
	};
	
	function init() {
		var $this = Sidemenu;
		$('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});
	}

	// Sidebar Initiate
	
	init();
	}
	
	// Icon Btn
	
	$('.course-share .fa-heart').on('click', function (e) {
		e.preventDefault();
      	$(this).toggleClass('color-active');
    });
	
	// Toggle
	
	if($('#edit-rating').length > 0) {
		$('#edit-rating').on('click', function () {
			$('.publish-rate').toggle('1000');
			$('.stip-grp').toggle('1000');
		});
	}
	
	// JQuery counterUp

	if($('.course-count .counterUp').length > 0) {
		$('.course-count .counterUp, .course-inner-content h4 span, .rate-head span, .rate-head-five h2 span').counterUp({
            delay: 15,
            time: 1500
        });
	}
	
	// Mobile menu sidebar overlay
	
	$('.header-fixed').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function() {
		$('main-wrapper').toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
	});
	
	$(document).on('click', '.sidebar-overlay', function() {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
	
	$(document).on('click', '#menu_close', function() {
		$('html').removeClass('menu-opened');
		$('.sidebar-overlay').removeClass('opened');
		$('main-wrapper').removeClass('slide-nav');
	});
	
	// Select 2
	
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
	
	// tooltip
	
	$(document).ready(function(){
		$('[data-bs-toggle="tooltip"]').tooltip();   
	});

	//feather.replace()
	
	// Home popular mentor slider

	if($('.owl-carousel.mentoring-course').length > 0 ){
		var owl = $('.owl-carousel.mentoring-course');
	      	owl.owlCarousel({
	        margin: 25,
	        nav : false,
	        nav: true,
	        loop: true,
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	768 : {
	            	items: 3
	          	},
	          	1170: {
	            	items: 4
	          	}
	        }
	    });
    }

	// Home Three Choose favourite Course from top Category

	if($('.owl-carousel.home-three-favourite-carousel').length > 0 ){
		var owl = $('.owl-carousel.home-three-favourite-carousel');
			  owl.owlCarousel({
			margin: 24,
			nav : false,
			nav: true,
			loop: true,
			responsive: {
				  0: {
					items: 1
				  },
				  500:{
					items:1,
					
				},
				768:{
					items:1,
					
				},
				900:{
					items:2,
					
				},
				1000:{
					items:3,
					
				},
				1300:{
					items:5,
					
				}
			}
		});
	}
	
	// Home Three Most Trending Courses

	if($('.owl-carousel.home-three-trending-course').length > 0 ){
		var owl = $('.owl-carousel.home-three-trending-course');
			  owl.owlCarousel({
			margin: 25,
			nav : true,
			nav: true,
			loop: true,
			responsive: {
				  0: {
					items: 1
				  },
				  500:{
					items:1,
					
				},
				768:{
					items:1,
					
				},
				1000:{
					items:3,
					
				},
				1300:{
					items:4,
					
				}
			}
		});
	}

    // Treand Course

	if($('.owl-carousel.trending-course').length > 0 ){
		var owl = $('.owl-carousel.trending-course');
	      	owl.owlCarousel({
	        margin: 24,
	        nav : false,
	        nav: true,
	        loop: true,
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	768 : {
	            	items: 2
	          	},
	          	1170: {
	            	items: 3
	          	}
	        }
	    });
    }

    // Leading Companies

	if($('.owl-carousel.lead-group-slider').length > 0 ){
		var owl = $('.owl-carousel.lead-group-slider');
      		owl.owlCarousel({
			margin: 24,
			nav : false,
			dots: false,
			loop: true,
			autoplay:false,
			autoplaySpeed: 2000,
		    responsive: {
	          0: {
            	items: 3,
				nav : false,
				dots: false,
	        },
	        768 : {
            	items: 3,
				nav : false,
				dots: false,
	        },
          	1170: {
            	items: 6,
				dots: false,
          		}
    		}
	   });
    }

	// Leading Companies

	if($('.owl-carousel.leading-univercities').length > 0 ){
		var owl = $('.owl-carousel.leading-univercities');
		  	owl.owlCarousel({
	 		margin: 24,
	        nav : false,
			dot: false,
	        loop: true,
			autoplay:false,
			autoplaySpeed: 2000,
		    responsive: {
		        0: {
		           items: 3
		        },
	          	768 : {
	            	items: 3
	          	},
	          	1170: {
	            	items: 5
	          	}
	    	}
		});
	}

	// Leading Slider

	if($('.owl-carousel.leading-slider-five').length > 0 ){
		var owl = $('.owl-carousel.leading-slider-five');
	      	owl.owlCarousel({
	        margin: 24,
			nav : false,
			loop: true,
			dots:false,
			autoplay:false,
	        responsive: {
	      	0: {
	        	items: 2
	      	},
	      	768 : {
	        		items: 3
	      	},
	      	1170: {
	        	items: 3
	      	},
			1300: {
				items: 4
			  }
			}
		});
   	}
	
	// Top Category Slider

	if($('.top-category-slider').length > 0) {
		$('.top-category-slider').owlCarousel({
			loop:true,
			margin:15,
			dots:false,
			nav:true,
			navText: [ '<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>' ], 
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:1,
					
				},
				1000:{
					items:3,
					
				},
				1300:{
					items:6,
					
				}
			}
		})	
	}

	// Best Course Slider

	if($('.best-course-slider').length > 0) {
		$('.best-course-slider').owlCarousel({
			loop:true,
			margin:15,
			dots:true,
			nav:true,
			navText: [ '<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>' ], 
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:2,
					
				},
				1000:{
					items:2,
					
				},
				1300:{
					items:3,
					
				}
			}
		})	
	}

	// Feature-instructor-two-slider

	if($('.feature-instructor-two-slider').length > 0) {
		$('.feature-instructor-two-slider').owlCarousel({
			loop:true,
			margin:15,
			dots:true,
			nav:false,
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:2,
					
				},
				1000:{
					items:3,
					
				},
				1300:{
					items:4,
					
				}
			}
		})	
	}

	// Impressive Section Slider

	if($('.impressive-section-slider').length > 0) {
		$('.impressive-section-slider').owlCarousel({
			loop:true,
			margin:15,
			dots:true,
			nav:false,
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:2,
					
				},
				1000:{
					items:2,
					
				},
				1300:{
					items:3,
					
				}
			}
		})	
	}

	//Latest Nwes and Events Slider

	if($('.latest-news-events-slider').length > 0) {
		$('.latest-news-events-slider').owlCarousel({
			loop:true,
			margin:15,
			dots:true,
			nav:false,
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:2,
					
				},
				1000:{
					items:2,
					
				},
				1300:{
					items:3,
					
				}
			}
		})	
	}

	// Leading Slider

	if($('.owl-carousel.home-five-course').length > 0 ){
		var owl = $('.owl-carousel.home-five-course');
			owl.owlCarousel({
				items:	3,
				margin: 30,
				nav : false,
				loop: true,
				dots:true,
				autoplay:false,
				responsive: {
				0:{
					items:1,
					dots:false,
				},
				600:{
					items:1,
					dots:false,
				},
				766 : {
					dots:false,
					items: 1
			  	},				  
			  	991 : {
					items: 2
			  	},
				1000:{
					items:3,
					dots:false,
				},
			  	1170: {
					items: 2
			  	},
			  	1300: {
					items: 3
				}
			}
		});
	}

	// Blog Slider

	if($('.owl-carousel.home-five-blog').length > 0 ){
		var owl = $('.owl-carousel.home-five-blog');
			owl.owlCarousel({
			items:	3,
		 	margin: 30,
		 	nav : false,
		 	loop: true,
		 	dots:true,
			autoplay:false,
			responsive: {
				0:{
					items:1,
					dots:false,
				},
				600:{
					items:1,
					dots:false,
				},
				766 : {
					dots:false,
					items: 1
			  	},				  
			  	991 : {
					items: 2
			  	},
				1000:{
					items:3,
					dots:false,
				},
				 1170: {
					items: 2
				},
				1300: {
					items: 3
			  	}
			}
		});
	}
	
	// // Testimonial slider 5

	if($('.testimonial-five.lazy').length > 0) {
		$(".testimonial-five.lazy").slick({
			lazyLoad: 'ondemand',
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 0,
			speed: 3000,
			autoplaySpeed: 1800,
			
		});
	}

	// Feature Instructors

	if($('.owl-carousel.instructors-course').length > 0 ){
		var owl = $('.owl-carousel.instructors-course');
	      	owl.owlCarousel({
	        margin: 24,
	        nav : false,
	        nav: true,
	        loop: true,
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	768 : {
	            	items: 2
	          	},
	          	1170: {
	            	items: 4
	          	}
	        }
	    });
    }
	
	// Latest Blogs

	if($('.owl-carousel.blogs-slide').length > 0 ){
		var owl = $('.owl-carousel.blogs-slide');
	      	owl.owlCarousel({
	        margin: 24,
	        nav : false,
	        nav: true,
	        loop: true,
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	768 : {
	            	items: 2
	          	},
	          	1170: {
	            	items: 4
	          	}
	        }
	    });
    }

	//Course Categories Slider

	if($('.favourite-course').length > 0) {
		$('.favourite-course').owlCarousel({
			loop:true,
			margin:20,
			dots:false,
			nav:true,
			navText: [ '<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>' ], 
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:2,
					
				},
				768:{
					items:2,
					
				},
				1000:{
					items:3,
					
				},
				1300:{
					items:4,
					
				}
			}
		})	
	}

	// Our Courses Slider

	if($('.our-courses-slider').length > 0) {
		$('.our-courses-slider').owlCarousel({
			loop:true,
			margin:15,
			dots:false,
			nav:true,
			navText: [ '<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>' ], 
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:2,
					
				},
				1000:{
					items:2,
					
				},
				1300:{
					items:3,
					
				}
			}
		})	
	}

	// Featured Instructor Slider

	if($('.feature-instructor-slider').length > 0) {
		$('.feature-instructor-slider').owlCarousel({
			loop:true,
			margin:15,
			dots:false,
			nav:true,
			navText: [ '<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>' ], 
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:2,
					
				},
				1000:{
					items:3,
					
				},
				1300:{
					items:4,
					
				}
			}
		})	
	}

	// Testimonial Slider

	if($('.testimonial-slider').length > 0) {
		$('.testimonial-slider').owlCarousel({
			loop:true,
			margin:15,
			dots:true,
			nav:false,
			smartSpeed: 10000,
            dotsSpeed: 1000,
            dragEndSpeed: 1000,
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:1,
					
				},
				1000:{
					items:1,
					
				},
				1300:{
					items:1,
					
				}
			}
		})	
	}

	// Latest Blogs Slider

	if($('.latest-blog-slider').length > 0) {
		$('.latest-blog-slider').owlCarousel({
			loop:true,
			margin:15,
			dots:false,
			nav:true,
			navText: [ '<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>' ], 
			responsive:{
				0:{
					items:1,
					
				},
				500:{
					items:1,
					
				},
				768:{
					items:2,
					
				},
				1000:{
					items:2,
					
				},
				1300:{
					items:3,
					
				}
			}
		})	
	}

	// Features Clinic Four

	if($('.owl-carousel.real-reviews').length > 0) {
		$('.owl-carousel.real-reviews').owlCarousel({
			loop:true,
			margin:15,
			dots: false,
			nav:true,
			navContainer: '.slide-nav-8',
			navText: [ '<i class="fa-sharp fa-solid fa-arrow-left-long"></i>', '<i class="fa-sharp fa-solid fa-arrow-right-long"></i>' ], 
			responsive:{
				0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:1
				},
				1000:{
					items:1
				},
				1300:{
					items:1
				}
			}
		})	
	}

	// They Trusted us Testimonails

	if($('.swiper-testimonial-three').length > 0 ){
		var swiper = new Swiper(".swiper-testimonial-three", {
			effect: "coverflow",
			loop: false,
			grabCursor: true,
			center:true,
			centeredSlides: true,
			slidesPerView: "auto",
			centeredSlides: true,
			initialSlide: 2,
			nav:true,
			navigation: {
				prevEl: '.slide-prev-btn',
				nextEl: '.slide-next-btn',
				speed: 400,
 				spaceBetween: 100,
			},
			coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			modifier: 10,
			initialSlide: 2,
			slideShadows: true
			},
			pagination: {
			el: ".swiper-pagination",
			clickable: true
			}
		});
	}

	// Login Slide

	if($('.owl-carousel.login-slide').length > 0 ){
		var owl = $('.owl-carousel.login-slide');
	      	owl.owlCarousel({
	        margin: 24,
	        nav : false,
	        nav: true,
	        loop: true,
	        responsive: {
	          	0: {
	            	items: 1
	          	},
	          	768 : {
	            	items: 1
	          	},
	          	1170: {
	            	items: 1
	          	}
	        }
	    });
    }
	
	// Slick testimonial three

	if($('.mentor-testimonial.lazy').length > 0) {
		$(".mentor-testimonial.lazy").slick({
			lazyLoad: 'ondemand',
			infinite: true
		});
	}

	// Home header

	$(window).scroll(function(){
		var sticky = $('.scroll-sticky'),
		  scroll = $(window).scrollTop();

		if (scroll >= 100) sticky.addClass('add-header-bg');
		else sticky.removeClass('add-header-bg');
	});
	
	// Timer countdown
	
	if($('.countdown-container').length > 0 ){
		const daysEl = document.getElementById("days");
		const hoursEl = document.getElementById("hours");
		const minsEl = document.getElementById("mins");

		const newYears = "1 Jan 2023";

		function countdown() {
			const newYearsDate = new Date(newYears);
			const currentDate = new Date();

			const totalSeconds = (newYearsDate - currentDate) / 1000;

			const days = Math.floor(totalSeconds / 3600 / 24);
			const hours = Math.floor(totalSeconds / 3600) % 24;
			const mins = Math.floor(totalSeconds / 60) % 60;

			daysEl.innerHTML = days;
			hoursEl.innerHTML = formatTime(hours);
			minsEl.innerHTML = formatTime(mins);
		}

		function formatTime(time) {
			return time < 10 ? `0${time}` : time;
		}

		// initial call
		countdown();

		setInterval(countdown, 1000);
	}
	
	// Circle Progress Bar
	
	function animateElements() {
		$('.circle-bar1').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle-graph1').attr('data-percent');
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle-graph1').circleProgress({
					value: percent / 100,
					size : 400,
					thickness: 40,
					startAngle: -1.6,
					fill: {
						color: '#159f46'
					}
				});
			}
		});
	}	
	
	if($('.circle-bar').length > 0) {
		animateElements();
	}
	$(window).scroll(animateElements);
	
	// Otp verfication
	
	$('.digit-group').find('input').each(function() {
		$(this).attr('maxlength', 1);
			$(this).on('keyup', function(e) {
				var parent = $($(this).parent());
	
				if(e.keyCode === 8 || e.keyCode === 37) {
					var prev = parent.find('input#' + $(this).data('previous'));
					
					if(prev.length) {
						$(prev).select();
					}
				} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
					var next = parent.find('input#' + $(this).data('next'));
					
					if(next.length) {
						$(next).select();
					} else {
						if(parent.data('autosubmit')) {
						parent.submit();
					}
				}
			}
		});
	});
	
	$('.digit-group input').on('keyup', function(){
		var self = $(this);
		if ( self.val() != '' ) {
			self.addClass('active');
		} else {
			self.removeClass('active');
		}
	});

	// Fade in scroll

	if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}

	// Content div min height set
	
	function resizeInnerDiv() {
		var height = $(window).height();	
		var header_height = $(".header").height();
		var footer_height = $(".footer").height();
		var setheight = height - header_height;
		var trueheight = setheight - footer_height;
		$(".content").css("min-height", trueheight);
	}
	
	if($('.content').length > 0 ){
		resizeInnerDiv();
	}

	$(window).resize(function(){
		if($('.content').length > 0 ){
			resizeInnerDiv();
		}
	});

	// Wizard

	$(document).ready(function () {
        let progressVal = 0;
        let businessType = 0;
      
		$(".next_btn").click(function () {
			$(this).parent().parent().parent().next().fadeIn('slow');
			$(this).parent().parent().parent().css({
				'display': 'none'
			});
			progressVal = progressVal + 1;
			$('.progress-active').removeClass('progress-active').addClass('progress-activated').next().addClass('progress-active');
		});

		$(".prev_btn").click(function () {
			$(this).parent().parent().parent().prev().fadeIn('slow');
			$(this).parent().parent().parent().css({
				'display': 'none'
			});
			progressVal = progressVal - 1;
			$('.progress-active').removeClass('progress-active').prev().removeClass('progress-activated').addClass('progress-active'); 
		});
  	});

  	// CK Editor

	if ($('#editor').length > 0) {
		ClassicEditor
		.create( document.querySelector( '#editor' ), {
			 toolbar: {
			    items: [
			        'heading', '|',
			        'fontfamily', 'fontsize', '|',
			        'alignment', '|',
			        'fontColor', 'fontBackgroundColor', '|',
			        'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
			        'link', '|',
			        'outdent', 'indent', '|',
			        'bulletedList', 'numberedList', 'todoList', '|',
			        'code', 'codeBlock', '|',
			        'insertTable', '|',
			        'uploadImage', 'blockQuote', '|',
			        'undo', 'redo'
			    ],
			    shouldNotGroupWhenFull: true
			}
		} )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( err => {
			console.error( err.stack );
		} );
	}
	
})(jQuery);