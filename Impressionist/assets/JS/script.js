;(function(d,w,$){

	var $doc=$(d);
	

	$doc.ready(function(){
		var $MobileMenu = $('#menu');
		var $canvasMobileOpen = $('.canvas-open');
		var $canvasMobileClose = $('.canvas-close');

		var $mainCarousel =$('#shell');
		
		$canvasMobileOpen.on('click' ,function(){
			$MobileMenu.addClass('open');
		});
		$canvasMobileClose.on('click' , function(){
			$MobileMenu.removeClass('open');
		});
		
		$mainCarousel.owlCarousel({
			items:1,
			loop:true,
			autoplay:true,
			autoplayTimeout: 3000
		})
		
	}) 

})(document,window,jQuery);