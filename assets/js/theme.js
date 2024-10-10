
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
var status = 1; 
var currentpos = 0, alt = 1, curpos1 = 0, curpos2 = -1; 
var color = ["#ddd", "#ccc", "#bbb", "#aaa", "#999"]; 
var interval = [400, 300, 200, 100, 30];

// Memeriksa apakah ada kecepatan yang disimpan di localStorage
if (localStorage.getItem('currentspeed')) {
    currentspeed = parseInt(localStorage.getItem('currentspeed'));
    startit(currentspeed);
}

// Memeriksa status scrolling saat ini
if (localStorage.getItem('status') === '1') {
    status = 1;
    startit(currentspeed);
}

function scrollwindow() {
    if (status == 1) {
        let temp;
        if (document.all && !document.getElementById) temp = document.body.scrollTop;
        else temp = window.pageYOffset;

        alt = alt === 0 ? 2 : 1;

        if (curpos1 != curpos2) {
            currentpos = (document.all ? document.body.scrollTop : window.pageYOffset) + speed;
            window.scroll(0, currentpos);
        } else {
            currentpos = 0;
            window.scroll(0, currentpos);
        }
    }
}

function startit(s) {
    status = 1;
    currentspeed = s;
    localStorage.setItem('currentspeed', currentspeed);
    localStorage.setItem('status', status);
    clearInterval(handle);
    handle = setInterval(scrollwindow, interval[s]);
}

function stopit() {
    currentspeed = 0;
    for (let i = 1; i <= 5; i++) {
        document.getElementById('speed' + i).style.backgroundColor = color[i];
    }
    status = 0;
    localStorage.setItem('status', status);
}

function resetBg(n) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('speed' + i).style.backgroundColor = color[i];
    }
    for (let i = 1; i <= currentspeed; i++) {
        document.getElementById('speed' + i).style.backgroundColor = "#00cc00";
    }
}

function changeBg(n) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('speed' + i).style.backgroundColor = color[i];
    }
    for (let i = 1; i <= n; i++) {
        document.getElementById('speed' + i).style.backgroundColor = "#00cc00";
    }
}

function tooglespeed() {
    disp = disp === 0 ? 1 : 0;
    document.getElementById('speednav').style.display = disp === 1 ? '' : 'none';
    document.getElementById('speedtoogle').innerHTML = disp === 1 ? '<div class="arrowx"/>' : '<div class="arrowleft"/>';
}

function calcHeight() {
    var the_height = document.getElementById('chord_frame').contentWindow.document.body.scrollHeight;
    document.getElementById('chord_frame').height = the_height;
}

// Menghapus status saat halaman ditutup
window.addEventListener("beforeunload", function() {
    localStorage.removeItem('status');
});






