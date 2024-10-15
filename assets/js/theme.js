
      (function ($) {"use strict";
      
      $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
    
          if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
          } else {
            header.removeClass("scroll-on").addClass('start-style');
          }
        });
      });
    
      //Animation
    
      $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
      });
    
      //Menu On Hover
    
      $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
          var _d = $(e.target).closest('.nav-item');_d.addClass('show');
          setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
          }, 1);
        }
      });
    
    
    
    })(jQuery);

// Blank Target External Links
$(document.links).filter(function() {
return this.hostname != window.location.hostname;
}).attr('target', '_blank');

var speed=1; var disp=0; var handle; var currentspeed=0; var status=1; var currentpos=0, alt=1, curpos1=0, curpos2=-1; var color=new Array(); color[1]="#ddd"; color[2]="#ccc"; color[3]="#bbb"; color[4]="#aaa"; color[5]="#999"; var interval=new Array(400, 300, 200, 100, 30); function scrollwindow(){if (status==1){if (document.all && !document.getElementById) temp=document.body.scrollTop; else temp=window.pageYOffset; if (alt==0) alt=2; else alt=1; if (curpos1 !=curpos2){if (document.all) currentpos=document.body.scrollTop + speed; else currentpos=window.pageYOffset + speed; window.scroll(0, currentpos);}else{currentpos=0; window.scroll(0, currentpos);}}}function startit(s){status=1; currentspeed=s; clearInterval(handle); handle=setInterval("scrollwindow()", interval[s]);}function stopit(){currentspeed=0; for (i=1; i <=5; i++){document.getElementById('speed' + i).style.backgroundColor=color[i];}status=0;}function resetBg(n){for (i=1; i <=5; i++){document.getElementById('speed' + i).style.backgroundColor=color[i];}for (i=1; i <=currentspeed; i++){document.getElementById('speed' + i).style.backgroundColor="#00cc00";}}function changeBg(n){for (i=1; i <=5; i++){document.getElementById('speed' + i).style.backgroundColor=color[i];}for (i=1; i <=n; i++){document.getElementById('speed' + i).style.backgroundColor="#00cc00";}}function tooglespeed(){if (disp==0){disp=1; document.getElementById('speednav').style.display=''; document.getElementById('speedtoogle').innerHTML='<div class="arrowx"/>'; document.getElementById('speedtoogle');}else{disp=0; document.getElementById('speednav').style.display='none'; document.getElementById('speedtoogle').innerHTML='<div class="arrowleft"/>'; document.getElementById('speedtoogle');}}function calcHeight(){var the_height=document.getElementById('chord_frame').contentWindow.document.body.scrollHeight; document.getElementById('chord_frame').height=the_height;}

