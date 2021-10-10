//Display scroll-to-top Button when scrolling down
$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".scroll-to-top").addClass("active");
    } else {
       $(".scroll-to-top").removeClass("active");
    }
});

//Scroll-to-top smooth
$(function() {
    $('.scroll-to-top').click (function() {
      $('html, body').animate({scrollTop: $('body').offset().top }, 'slow');
      return false;
    });
});


//Banner scroll-to-down smooth
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('div.row-lol-about').offset().top }, 'slow');
      return false;
    });
});



//Display item when scrolling down
$(window).on("scroll", function() {
    if($(window).scrollTop() > 350) {
        $(".box-lol-map").addClass("active");
    } 
});


$(window).on("scroll", function() {
    if($(window).scrollTop() > 350) {
        $(".box-about-desc").addClass("active");
    } 
});


$(window).on("scroll", function() {
    if($(window).scrollTop() > 550) {
        $(".box-home-menu").addClass("active");
    } 
});


$(window).on("scroll", function() {
    if($(window).scrollTop() > 550) {
        $(".box-home-menu2").addClass("active");
    } 
});

