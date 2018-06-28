$(function(){
	var ex = $('.ex1');
	$('.ev1').on("click", function(){
		$(this).css({"background":"#ccc"});
		ex.text("Você Clicou!!");
	});
	$('.ev2').on("dblclick", function(){
		$(this).css({"background":"#ccc"});
		ex.text("Você deu dois clicks!!");
	});
	$('.ev3').on("focusin", function(){
		$(this).css({"background":"#ccc"});
		ex.text("Você deu Focus!!");
	}).on("focusout", function() {
		$(this).css({"background":"#000"});
		ex.text("Você tirou Focus!!");
	});
	$('.ev4').on("mouseover", function(){
		$(this).css({"background":"#ccc"});
		ex.text("Você passou o mouse!!");
	});
	$('.ev5').on("mousedown", function(){
		$(this).css({"background":"#ccc"});
		ex.text("Você clicou o botão do mouse!!");
	}).on("mouseup", function(){
		$(this).css({"background":"#000"});
		ex.text("Você soltou o botão do mouse!!");
	});
	var a = 0;
	$('.ev6').on("mouseenter", function(){
		a += 1;
		ex.text("Entradas do Mouse: " +a);
	}).on("mouseout", function(){
		a += 1;
		ex.text("Saida do Mouse: " +a);
	});
	var b = 0;
	$('.ev7').on("mouseover", function(){
		b += 1;
		ex.text("Mouse Over: " +b);
	}).on("mouseleave", function(){
		ex.text("Mouse Leave!");
	});
	$('.ev8').on("mousemove", function(move) {
		var localX = move.pageX;
		var localY = move.pageY;
		ex.text("Movimento X: "+localX+" - Movimento Y: "+localY);
	});
});