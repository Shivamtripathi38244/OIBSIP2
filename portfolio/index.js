$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 50) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
        // toggle menu/navbar 

    });

    //scroll top script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollT: 0 })
    });

    $('.menu-btn').click(function () {
        $('.menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });
    var typed=new Typed(".typing", {strings : ["Web developer","Freelancer","Designer","Speaker","Coding Enthusiast"],
    typespeed:1,
    backspeed:1000,
    loop:true
});

});