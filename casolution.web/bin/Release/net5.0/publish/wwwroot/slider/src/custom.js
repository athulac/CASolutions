var mainslider;
var sliding = false;

$(document).ready(function(){
    var options = {
        slides: '.slide', // The name of a slide in the slidesContainer
        swipe: ($(window).width() >= 1024),    // Add possibility to Swipe > note that you have to include touchSwipe for this
        transition: "slide", // Accepts "slide" and "fade" for a slide or fade transition
        slideTracker: true, // Add a UL with list items to track the current slide
        slideTrackerID: 'slideposition', // The name of the UL that tracks the slides
        slideOnInterval: true, // Slide on interval
        interval: 10000, // Interval to slide on if slideOnInterval is enabled
        animateDuration: 1000, // Duration of an animation
        animationEasing: 'ease', // Accepts: linear ease in out in-out snap easeOutCubic easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine easeInOutSine easeInBack easeOutBack easeInOutBack
        pauseOnHover: true, // Pause when user hovers the slide container
        magneticSwipe: ($(window).width() >= 1024),//($(window).width() >= 1280), // This will attach the slides to the mouse's position when swiping/dragging
        neverEnding: true // Enable this to create a 'neverending' effect.
    };

    $(".box").click(function () {
        $('html,body').animate({
            scrollTop: ($(".box-parent").height()-100)
        }, 'slow');
    });

    $(".slider").height($(window).height());
    $(window).on("resize", function () {
        $(".slider").height($(window).height());
    });

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data("simpleslider");
    /* yes, that's all! */

    $(".slider").on("beforeSliding", function(event){
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + prevSlide + "'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").hide();

        sliding = true;
    });

    $(".slider").on("afterSliding", function(event){
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='"+newSlide+"'] .slidecontent").fadeIn();
        sliding = false;
    });

    /**
     * Control the slider by scrolling
     */   

    $(window).bind('mousewheel', function (event) {           
        if (!sliding) {
            if (event.originalEvent.deltaY > 0) {
                mainslider.nextSlide();
            }
            else {
                mainslider.prevSlide();
            }
        }
    });
    



    $(".slide#first").backstretch("slider/images/bg1.jpg");
    $(".slide#sec").backstretch("slider/images/bg2.jpg");
    $(".slide#thirth").backstretch("slider/images/bg4.jpg");
    $(".slide#fourth").backstretch("slider/images/bg5.jpg");
    $(".slide#fifth").backstretch("slider/images/bg3.jpg");

    $('.slide .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

    $(".slidecontent").each(function(){
        $(this).css('margin-top', -$(this).height()/2);
    });
});


