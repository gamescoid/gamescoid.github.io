
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



var speed = 1;
var disp = 0;
var handle;
var currentspeed = 0;
var status = 0; // Ubah default status menjadi 0 (stop)
var currentpos = 0;
var interval = [400, 300, 200, 100, 30];
var color = ["#ddd", "#ccc", "#bbb", "#aaa", "#999"];

// Fungsi untuk scroll
function scrollwindow() {
    if (status == 1) {
        currentpos += speed;
        window.scroll(0, currentpos);
    }
}

// Mulai autoscroll
function startit(s) {
    status = 1;
    currentspeed = s;
    clearInterval(handle);
    handle = setInterval(scrollwindow, interval[s]);
}

// Stop autoscroll
function stopit() {
    currentspeed = 0;
    clearInterval(handle);
    status = 0;
    for (var i = 1; i <= 5; i++) {
        document.getElementById('speed' + i).style.backgroundColor = color[i];
    }
}

// Reset background color
function resetBg(n) {
    for (var i = 1; i <= 5; i++) {
        document.getElementById('speed' + i).style.backgroundColor = color[i];
    }
    for (var i = 1; i <= currentspeed; i++) {
        document.getElementById('speed' + i).style.backgroundColor = "#00cc00";
    }
}

// Ubah background color saat mouse over
function changeBg(n) {
    for (var i = 1; i <= 5; i++) {
        document.getElementById('speed' + i).style.backgroundColor = color[i];
    }
    for (var i = 1; i <= n; i++) {
        document.getElementById('speed' + i).style.backgroundColor = "#00cc00";
    }
}

// Toggle visibility dari speed control
function tooglespeed() {
    disp = disp === 0 ? 1 : 0;
    document.getElementById('speednav').style.display = disp ? '' : 'none';
}

// Mengatur status saat tab berpindah
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'hidden') {
        stopit(); // Hentikan scroll saat tab tidak aktif
    } else {
        if (currentspeed > 0) {
            startit(currentspeed); // Mulai kembali scroll
        }
    }
});
