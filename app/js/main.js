$(document).ready(function() {

    //--------------
    //     Slow scroll
    //--------------
    $("a[href*='#']").mPageScroll2id();
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset:70
    });

    //--------------
    //     Responsive menu
    //--------------
    $(".nav__responsive-mnu").click(function() {
        $(".nav__list").slideToggle(500);
        $(".nav__lines").toggleClass("nav__lines_active");
    });
    $(".nav__link").click(function() {
    if ($(".nav__responsive-mnu").is(':visible') && $(".nav__list").is(':visible')) {
        $(".nav__list").slideToggle(500);
        $(".nav__lines").toggleClass("nav__lines_active");
    }});

    //--------------
    //     Fixed menu
    //--------------
    var $menu = $("nav");
    $(window).scroll(function(){
        if (!$(".nav__responsive-mnu").is(':visible')) {
            if ( $(this).scrollTop() > 1){
                $("nav").addClass("nav_collapse");
            } else if($(this).scrollTop() <= 1) {
                $("nav").removeClass("nav_collapse");
            }
        }
    });

    //--------------
    //     Button UP
    //--------------
    var $button = $(".button_up");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100){
            $button.fadeIn('fast');
        } else if($(this).scrollTop() <= 100) {
            $button.fadeOut('fast');
        }
    });

    //--------------
    //     Skills
    //--------------
    $(".skills__container-description").click(function() {
        $(this).toggleClass("skills__container-description_active");
        $(this).next().slideToggle(500);
    });

    //--------------
    //     Owl
    //--------------
    $(".owl-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        smartSpeed:450,
        nav: true,
        navText: ["<", ">"],
        loop: true
    });

});