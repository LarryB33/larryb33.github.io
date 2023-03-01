(function($) {
	
	$.fn.ScrollingFunctionality = function() 
	{
		this.scroll = function(target) {

			$('html, body').stop().animate({
				scrollTop: $(target).offset().top,
				scrollLeft: $(target).offset().left
			}, 3500);

			event.preventDefault();
		};
								
		return this;
	};

})( jQuery );