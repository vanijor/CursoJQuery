$(function(){
    var ex = $('.ex1');
    var ex2 = $('.ex2');
    var button = $(':button');
    /*
    button.on("click", function(){
        ex.fadeOut('slow');
    }).on("dblclick", function(){
        ex.fadeIn('slow');
    });
    
    button.on("click", function(){
        ex.fadeTo("slow", 0.5);
    });
    
    button.on("click", function(){
        ex.fadeToggle("slow");
    });
    */
    button.on("click", function(){
        ex.fadeTo("slow", 0.5, function(){
            ex2.fadeTo("slow", 0.2);
        });
    });
});