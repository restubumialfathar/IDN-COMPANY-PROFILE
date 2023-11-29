// button up

window.onscroll = function() {
    var button = document.getElementById("button");
    if (window.pageYOffset > 0) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// photo carrousel

$(document).ready(function() {
    let carouselItems = $('.carousel-item');
    let currentIndex = 0;
   
    function changeItem() {
       carouselItems.eq(currentIndex).fadeOut(1000, function() {
         $(this).removeClass('active');
         currentIndex = (currentIndex + 1) % carouselItems.length;
         carouselItems.eq(currentIndex).fadeIn(1000, function() {
           $(this).addClass('active');
         });
       });
    }
   
    // Start the carousel
    setInterval(changeItem, 3000);
   });