// Adjusts the amount of children in a column according to the height of the column (removes childrent that overflow and partially hidden)
$.fn.ExactColumn = function() {
	return this.each(function(){
		var column_height = $(this).css({'overflow':'hidden'}).height();

		$(this).children().each(function(){
			if( ($(this).position().top + $(this).outerHeight() - parseInt($(this).css('margin-bottom')) ) > column_height ){
				$(this).hide();
			}
		});

	});
};