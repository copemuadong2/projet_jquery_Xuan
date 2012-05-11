/**
 * A jQuery plugin tooltip
 * Author: TRINH Thi Thanh Xuan
 * Version: 1.8
 */
(function($){

	//attache la fonction tooltip à jQuery
	$.fn.tooltip= function(options){
		var settings = $.extend( {
			'color'             : '#fff',
			'background'		: '#C81E2B',
			'width'				: '350px'
		}, options);
		var tooltip = document.createElement('div');
		var id='tooltip'+Math.floor(Math.random()*1000);
		
		$(this).data('numid',id);
		$(tooltip).attr('id',id);

		$('a[rel=tooltip]').mouseover(function(e) {

			var page = $(this).attr('href');

			$(tooltip).css({
				'position':'absolute',
				'padding':'8px 8px 8px 8px',
				'background': settings.background,
				'filter':'progid:DXImageTransform.Microsoft.gradient(from(#F04349), to(#C81E2B))', /* pour IE */

				'background': '-webkit-gradient(linear, left top, left bottom, from(#F04349), to(#C81E2B))', /* pour webkit */

				'background': '-moz-linear-gradient(top,  #F04349, #C81E2B)', /* pour firefox 3.6+ */
			
				
				'-moz-box-shadow': '0 1px 3px rgba(0,0,0,0.5)',
				'-webkit-box-shadow': '0 1px 3px rgba(0,0,0,0.5)',
				'text-shadow': '0 -1px 1px rgba(0,0,0,0.25)',
				'border-bottom': '1px solid rgba(0,0,0,0.25)',
				
				'border-radius': '10px',
				'-moz-border-radius': '5px',
				'-webkit-border-radius': '5px',
				'color':settings.color,
				'width':settings.width,
				'font-size':'15px',
				'display':'none',
			}).fadeIn(400);

			$(this).append(tooltip);
			
			$(tooltip).load(page+' div>p');
			
		}).mousemove(function(e){
			$(tooltip).css({'left':e.pageX-700, 'top':e.pageY-100});
		}).mouseout(function(){
			var id = $(this).data('numid');
			$("#"+id).fadeOut(400);
		});
	};

})(jQuery);
