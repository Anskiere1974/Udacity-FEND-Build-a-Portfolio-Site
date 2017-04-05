$(document).ready(function(){
    // start the Mixitup 
    var mixer = mixitup(".cons");
    
    // start the owl carousel
     $(".owl-carousel").owlCarousel({
         
         margin: 30,
         responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:4,
            loop:false
        }
    }
     });
    
    // bring the mobile-hamburger online
    $(".hamburger").on("click", function(){
        $(".nav-list").slideToggle("slow");
    });
    
    // Bring the smooth Scroll online 
    $('.nav-list li a').smoothScroll();
    $('#myBtn').smoothScroll();
    
    // Add a scroll to top Btn
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    
    
});



    