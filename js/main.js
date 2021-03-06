jQuery(document).ready(function(){
	
	"use strict";
	
	
// 	slider code
	$('#slider-carousel').carouFredSel({
		
		responsive: true,
		width: '100%',
		circular: true,
		scroll:{
			items:1,
			duration:500,
			pauseOnHover:true
		},
		auto:true,
		
		items:{
			visible:{
				
				min:1,
				max:1
			},
			
		height:'variable'
		},
		pagination:{
			container: ".sliderpager",
			anchorBuilder: false
		}
	});
	
	
// 	end of slider code
	
// 	fixed header nav code!!!!!!!!!!!!!!!

	$(window).scroll(function(){

		var top =$(window).scrollTop();
		if(top>=60){
			$('header').addClass('secondary-dark-blue-bg');
		}

		else
			if($("header").hasClass('secondary-dark-blue-bg')){
				$("header").removeClass('secondary-dark-blue-bg');
				
			}
	});
	
	
// 	end fix header nav code!!!!!!!!!!!!!!


//bootstrap nav responsive code



//bootstrap nav responsive code ends	
// 	portfolio slider code

$('.portfolio-carousel').carouFredSel({
		
		responsive: true,
		width: '100%',
		circular: true,
		prev:'#prev',
		next:'#next',
		scroll:{
			items:1,
			duration:500,
			pauseOnHover:true
		},
		auto:true,
		
		items:{
			visible:{
				
				min:1,
				max:4
			},
			
		height:'variable'
		}
		
	});

// end of portfolio slider code
	
	
	// 	team slider code

$('.team-carousel').carouFredSel({
		
		responsive: true,
		width: '100%',
		circular: true,
		prev:'#team-prev',
		next:'#team-next',
		scroll:{
			items:1,
			duration:500,
			pauseOnHover:true
		},
		auto:true,
		
		items:{
			visible:{
				
				min:1,
				max:4
			},
			
		height:'variable'
		}
		
	});

// end of team slider code


// 	testimonials code
	$('.testimonials-carousel').carouFredSel({
		
		responsive: true,
		width: '100%',
		circular: true,
		scroll:{
			items:1,
			duration:500,
			pauseOnHover:true
		},
		auto:true,
		
		items:{
			visible:{
				
				min:1,
				max:1
			},
			
		height:'variable'
		},
		pagination:{
			container: ".testipager",
			anchorBuilder: false
		}
	});
	
	
// 	end of testimonials code

	$('.animation').each(function(){
		var waypoint = new Waypoint({
		  element: this,
		  handler: function(direction) {
			  
		    var animation = $(this.element).attr('data-animation');
			$(this.element).css('opacity','1');
		    $(this.element).addClass("animated " + animation);//there is a space after the add calss animated
		  
		  },
		  offset: "75%" 
		})		
		
	});

// 	smooth scroll here

// 	$('a').smoothScroll();
	
		/** for functional contact form **/

	$('.contact #submit').on('click',function(e){
                        e.preventDefault();
                        var name = $('#name').val();
                        var email = $('#email').val();
                        var subject = $('#subject').val();
                        var message = $('#message').val();
                        var form = new Array({'name':name, 'email':email, 'subject': subject, 'message': message});


                        $.ajax({
                            type: 'POST',
                            url: "contact.php",
                            data: ({'action': 'contact', 'form': form})
                        }).done(function(data) {
                            $('#contact .result').html(data);

                        $(".contact-form")[0].reset();

                        });

                  
                    
                    });
	
	
// 	one page nav
	$('#menu').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
		
	});
	
});


