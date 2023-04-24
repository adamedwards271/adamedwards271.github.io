$(document).ready(function() {
    var numSlides = $("#slider li").length;
    var randomStart = Math.floor(Math.random() * numSlides);
    $("#slider").bxSlider({
        auto: true,
        mode: 'horizontal',
        speed: 500,
        pause: 3000,
        randomStart: true,
        pager: true,
        pagerType: 'short',
        controls: false,
        slideWidth: 500,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        captions: true,
        onSliderLoad: function(currentIndex) {
            var currentSlideCaption = $("#slider li").eq(currentIndex).find(".caption").html();
            $("#slider-caption").html(currentSlideCaption);
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            var slideCaption = $slideElement.find(".caption").html();
            $("#slider-caption").html(slideCaption);
        }
    });
});