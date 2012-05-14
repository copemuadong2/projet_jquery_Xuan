/**
 * A jQuery plugin tooltip
 * Author: TRINH Thi Thanh Xuan
 * Version: 1.8
 * License : Dual MIT and GPL licenses (I <3 free stuffs)
 * 
 */
(function($){

	//attache la fonction tooltip à jQuery
	$.fn.tooltip= function(options){
		var settings = $.extend( {
			'color'             : '#fff',
			'width'				: '350px'
		}, options);
		
		var tooltip = document.createElement('div');
		var id='tooltip'+Math.floor(Math.random()*1000);
		
		$(this).data('numid',id);
		$(tooltip).attr('id',id);

		$('a[rel=tooltip]').css('display','inline-block').mouseover(function(e) {

			var page = $(this).attr('href');
			
			$(tooltip).css({
				'position':'absolute',
				'padding':'8px 8px 8px 8px',
				'background-color': 'rgba(252, 47, 47,0.8)',
				'-webkit-box-shadow': '0 1px 3px rgba(0,0,0,0.5)',
				'-moz-box-shadow': '0 1px 3px rgba(0,0,0,0.5)',
				'text-shadow': '0 -1px 1px rgba(0,0,0,0.25)',
				'border-bottom': '1px solid rgba(0,0,0,0.25)',
				
				'border-radius': '10px',
				'-webkit-border-radius': '5px',
				'-moz-border-radius': '20px',
				'color':settings.color,
				'width':settings.width,
				'font-size':'15px',
				'display':'none'
			}).fadeIn(40);
			$(this).append(tooltip);
			
			$(tooltip).load(page+' div>p');
		}).mousemove(function(e){
			$(tooltip).css({'left':e.pageX-700, 'top':e.pageY-100});
		}).mouseout(function(e){
			var id = $(this).data('numid');
			$("#"+id).fadeOut(40);
		});
	};

})(jQuery);
