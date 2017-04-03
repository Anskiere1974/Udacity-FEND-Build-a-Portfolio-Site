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
});