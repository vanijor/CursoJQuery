//caso uma imagem colocada no html nao exista
$(function(){
	/*$('img').on("error", function(){
		$('img').attr("src", "../img/1.png");
	});*/
	$(window).resize(function(){
		$('img').width($(window).width()).height($(window).height());
	});
});