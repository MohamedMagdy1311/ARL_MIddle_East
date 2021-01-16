(function($){
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
      });

      return false;
    });
  })(jQuery);
 new WOW().init();

 // start red message
   function showpanel(){
                
                document.getElementById('panel').style.display="block";
                
            }
            
            function hidepanel(){
                   document.getElementById('panel').style.display="none";
                
            }

   // end red message


  // start social media

      function showSocialMedia(){
                
                document.getElementById('social-media').style.display="block";
                
            }
            
            function hideSocialMedia(){
                   document.getElementById('social-media').style.display="none";
                
            }
            


// start section7
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});



// style video
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


// start video sc