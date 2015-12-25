$(function(){
    $.getJSON("/templates/portfolio-data.js", function(data) {
        $.get('../templates/portfolio-block.mst', function(template) {
            var rendered = Mustache.render(template,data);
            $('#portfolio-block-template').html(rendered);

            $(".portfolio-block").each(function() {
                var id = $(this).attr("id");
                var idData = data["blocks"][id-1];

                var image = idData["img"];
                var imgNum = idData["imgnum"];
                

                $(this).click(function() {
                    $('#portfolio-block-template').css({"margin-right":"20px;"});
                    $.get('/templates/portfolio-modal.mst', function(template) {
                        var rendered = Mustache.render(template,idData);
                        $('#portfolio-modal-template').html(rendered);
                        $("#modal"+id).modal('show');
                    });
                });
            });
            
        });
    });
});