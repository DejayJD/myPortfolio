//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $("a").bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function(){
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
        $(".navbar").css({
            "background-color":"#3B3F48", 
            "border-bottom": "1px solid #313131", 
            "box-shadow": "0px 1px 2px #242424",
            "padding-top": "15px",
            "height": "75px"
            });
        $(".lname").css({
            "margin-left" : "-100px",
            "visibility" : "hidden",
            "opacity" : "0",
            "z-index" : "-100"
        });
        $(".fname").css({
            "background-color" : "#E46849",
            "z-index" : "100"
        });
    }
    else {
        $(".navbar").css({
            "background": "none",
            "border": "none",
            "box-shadow":"none",
            "padding-top":"25px",
            "height":"100px"
        });
        $(".lname").css({
            "visibility" : "visible",
            "margin-left" : "-15px",
            "opacity" : "1",
            "z-index" : "-100"
        });
        $(".fname").css({
            "background" : "none",
            "z-index" : "100"
        });
    }
    });
    
});