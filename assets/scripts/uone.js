/*--------------------------------------------------------------
* Template Name    : UONE - Fully Responsive Personal Template
* Author           : Retrina Group
* Version          : 1.0.0
* Created          : November 2019
* File Description : Main css file of the template
--------------------------------------------------------------*/

// repeated variables
var $window = $(window);
var $root = $('html, body');


$(document).ready(function () {

    "use strict";

    smoothScroll();
    portfolioPopup();
    backToTop();
    wow();

});

$window.on("load", (function() {
    $("#overlayer, .loader").delay(1000).fadeOut('slow');
}));
$window.on('scroll', function () {
    headerSticky();
    skills();
});


/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/

/*-------------------------
        SMOOTH SCROLL
-------------------------*/
function smoothScroll(){

    "use strict";

    $('.header .navbar-nav a').on('click', function(event) {
        var $anchor = $(this);
        $root.stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutQuart');
        event.preventDefault();
        $(".navbar-collapse").collapse('hide');
    });
}

/*-------------------------
        HEADER STICKY
-------------------------*/
function headerSticky(){

    "use strict";

    if ($window.scrollTop() > 100) {
        $('#header').addClass('header-sticky');
    } else {
        $('#header').removeClass('header-sticky');
    }
}

/*-------------------------
          Skills
-------------------------*/
function skills() {

    "use strict";

    var scroll = $window.scrollTop();
    var skillsDiv = $('#skills');
    if (skillsDiv.length > 0){
        var winH = $window.height(),
            skillsT = skillsDiv.offset().top;
        if (scroll + winH > skillsT) {
            $('.skillbar').each(function () {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 6000).removeClass('skillbar-bar');
            });
        }
    }

}

/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
function portfolioPopup() {

    "use strict";
    if (('.portfolio').length > 0) {
        $('.portfolio-sly-slider').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled:true
                }
            });
        });
    }
}

/*-------------------------------------
      Portfolio Slyslider
-------------------------------------*/

function slyslider() {

    "use strict";
    if (('.portfolio-sly-slider').length > 0) {
        var $frame = $('#cycleitems');
        var $wrap  = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'centered',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 5,
            scrollBar: $wrap.find('.scrollbar'),
            scrollBy: 1,
            speed: 0,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 0,
            clickBar: 1,

            // Cycling
            cycleBy: 'items',
            cycleInterval: 0,
            pauseOnHover: 1
        });
        $(window).resize(function() {
            $frame.sly('reload');
        });
    }
}

/*-------------------------
     AJAX CONTACT FORM 
-------------------------*/
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_5odrujy';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent',
                    text: 'I will respond back to you soon!',
                })
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

/*-------------------------
     Back to Top Button
  -------------------------*/
function backToTop() {
    $('.back-to-top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 1500);
    });
}

/* ------------------
      WOW Init
-------------------*/
function wow() {
    new WOW().init();
}





