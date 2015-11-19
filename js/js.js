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
    $(".modal").css({"padding-right":"0"})
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
            "pointer-events" : "none",
            "opacity" : "0",
            "z-index" : "-100",
            "transition" : "all 0.4s, font-size 10s",
            "width" : "0px"
        });
        $(".fname").css({
            "background-color" : "#E46849",
            "z-index" : "100"
        });
        myOffset = 25;
        $(".animate1").each(function(){
            if ($(window).scrollTop() > $(this).offset().top - $(window).height() - myOffset && $(window).scrollTop() < $(this).offset().top ) {
                $(this).css({
                    "opacity" : "1",
                    "transform" : "translateY(0%)"

                });   
            }
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
            "z-index" : "-100",
            "width" : "auto",
            "transition" : "all 0.4s, font-size 0s",
            "font-size" : "34pt"
        });
        $(".fname").css({
            "background" : "none",
            "z-index" : "100"
        }); 
    }
    }); 
});


//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "46px";
    h.style.height = (h.scrollHeight)+"px";
}