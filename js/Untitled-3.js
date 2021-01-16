 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });


$(".options-box i").click(function(){
    
    
    $(".colors-box").fadeToggle(200);
})
