$(function(){
    var ex = $('.ex1');
    $('.ev1').on("click", function(){
        ex.hide('slow');
    });
    $('.ev2').on("click", function(){
        ex.show('slow');
    });
    $('.ev3').on("click", function(){
        ex.toggle('slow');
    });    
    $('.ev4').on("keyup", function(){
        var texto = $(this).val();
        if (texto == 'hide') {
            ex.hide('slow');
        }
        if (texto == 'show') {
            ex.show('slow');
        }
        if (texto == 'toggle') {
            ex.toggle('slow');
        }
    });
});