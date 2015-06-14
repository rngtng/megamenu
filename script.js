( function( $ ) {
	$( document ).ready(function() {
		var stateClass = 'open';
		var timer;

		$('#cssmenu')
			.on('click', 'a', function(event) {
				 var element = $(this).parent();
				 if (element.find("ul").length > 0) {
						event.preventDefault();
						if (element.hasClass(stateClass)) {
							element.trigger("menuClose");
						} else {
							element.trigger("menuOpen");
						}
				 }
			})
			.on('menuOpen', 'li', function(event) {
				var element = $(this);
				element.addClass(stateClass);
				element.children('ul').trigger("menuOpen");
				element.siblings('li').trigger("menuClose"); // optional
				event.stopPropagation();
			})
			.on('menuClose', 'li', function(event) {
				var element = $(this);
				element.removeClass(stateClass);
				element.children('ul').trigger("menuClose");
				event.stopPropagation();
			})
			.on('menuOpen', 'ul', function(event) {
				var element = $(this);
				element.slideDown();
				event.stopPropagation();
			})
			.on('menuClose', 'ul', function(event) {
				var element = $(this);
				element.slideUp();
				element.children('li').trigger("menuClose"); //optional
				event.stopPropagation();
			})
			.on('mousedown', 'a', function(event) {
				var element = $(this);
				timer = setInterval(function(){
					element.trigger('timerRuns');
				}, 100);
			})
			.on('timerRuns', 'a', function(event) {

				console.log("running");

			})
			.on('mouseup', 'a', function(event) {
				console.log("mouseUP");
				 clearInterval(timer);
			})
			.on('mouseout', 'a', function(event) {
				console.log("mouseOut");
				 clearInterval(timer);
			});

     // $("<li><a href='#4'><span>Product 4</span></a><ul><li><a href='#1'><span>Sub Product1</span></a></li><li><a href='#2'<span>Sub Product2</span></a></li></ul></li>").appendTo($($("a")[2]).parent().parent())

			// $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');

	});
})( jQuery );
