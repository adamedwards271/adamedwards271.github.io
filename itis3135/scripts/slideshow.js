$(document).ready(function() {
    var slideIndex = 0;
    showSlides(slideIndex);
  
    function showSlides(index) {
      var i;
      var slides = $(".slideshow-image");
      var dots = $(".dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex = index;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex].style.display = "block";
      dots[slideIndex].className += " active";
    }
  
    $(".slideshow-image img").click(function () {
        var src = $(this).attr("src");
        window.location.href = src;
    });
    
    function plusSlides(n) {
      showSlides(slideIndex + n);
    }
  
    function currentSlide(n) {
      showSlides(n);
    }
    
    $(".prev").click(function () {
      plusSlides(-1);
    });
  
    $(".next").click(function () {
      plusSlides(1);
    });
  
    $(".dot").click(function () {
      var index = $(this).index();
      currentSlide(index);
    });
    
    setInterval(function() {
      plusSlides(1);
    }, 2000);
});
