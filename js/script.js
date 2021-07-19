jQuery(document).ready(function () {

//JS  For Hambergur

		$('.icon').click(function(){

			$('.icon').toggleClass('active');

			$('.menu').toggleClass('show');

			});


		$('.menu>ul>li>a').click(function(){

			$('.menu').removeClass('show');
			$('.icon').removeClass('active');
		});




//JS  For Full Screen Background

	 $('.fullBackground').fullClip({
      images: ['./images/home_bg_1.jpg', './images/home_bg_2.jpg', './images/home_bg_3.jpg'],
      transitionTime: 2000,
      wait: 5000
    });






// Scroll Naviagation Background Change with Sticky Navigation


			  $(document).ready(function(){
				$(".header_top").sticky({topSpacing:0});
			  });



	// jQuery easing for smooth scroll


	   $('li.smooth_menu a').bind('click',function(event){
			var $anchor=$(this);
			var headerH='-120';
			$('html, body').stop().animate({

			scrollTop : $($anchor.attr('href')).offset().top- headerH+ "px"}, 1200, 'easeInOutExpo');



			event.preventDefault();

			});




	//jQuery scroll spy

			  $(".menu").scrollspy();

		//jQuery parallax background

		$('#ingredients').scrolly({bgParallax: true});

});