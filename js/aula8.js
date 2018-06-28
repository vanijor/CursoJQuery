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
	$('.ev1').on("focus", function(){
		ex.text($(this).attr('title'));
	}).on("keyup", function(){
		if($(this).val()=='pontocom'){
			$('.ev2').focus();
		}
	});
	/*$('.ev1').on("blur", function(){
		ex.text("Saida do campo: "+$(this).attr('name'));
	});*/
	$('.ev1').on("change", function(){
		ex.text("Campo alterado: "+$(this).val());
	});

	$('.selecionar').on("click", function(){
		$('.ev3').select();
		$('form').on("submit", function(){
			return false;
		});
	});
});