$(function(){
	$('.place').each(function(){
		var place = $(this).attr('title');
		var input = $(this);
		input
			.val(place)
			.css({"color":"#ccc"})
			.on("focusin", function(){
				input.css({"color":"#000"});
				if (input.val()==place) {
					input.val('');
				}
			}).on("focusout", function(){
				if (input.val()=='') {
					input.css({"color":"#ccc"});
					input.val(place);
				}
			});
	});

	var ex = $('.ex1');
	/*$('.key').on("keypress", function() {
		ex.text($(this).val());
	});*/
	/*$('.key').on("keydown", function() {
		ex.text($(this).val());
	});*/
	$('.key').on("keyup", function() {
		ex.text($(this).val());
	});
});