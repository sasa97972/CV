$(document).ready(function() {
    //--------------
    //     Header
    //--------------
    function heightDetect() {
        $(".header").css("height", $(window).height());
    }
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });


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
    var nav__list = $(".nav__list");
    var nav__lines = $(".nav__lines");
    var nav__link = $(".nav__link");
    var nav__responsive = $(".nav__responsive-mnu");
    nav__responsive.click(function() {
        nav__list.slideToggle(700);
        nav__lines.toggleClass("nav__lines_active");
    });
    nav__link.click(function() {
    if (nav__responsive.is(':visible') && nav__list.is(':visible')) {
        nav__list.slideToggle(700);
        nav__lines.toggleClass("nav__lines_active");
    }});

    //--------------
    //     Fixed menu
    //--------------
    if (!nav__responsive.is(':visible')) {
        var menu = $("nav");
        $(window).scroll(function () {
                if ($(this).scrollTop() > 1) {
                    menu.addClass("nav_collapse");
                } else {
                    menu.removeClass("nav_collapse");
                }
        });
    }

    //--------------
    //     Button UP
    //--------------
    var button = $(".button_up");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100){
            button.fadeIn('fast');
        } else if($(this).scrollTop() <= 100) {
            button.fadeOut('fast');
        }
    });

    //--------------
    //     Skills
    //--------------
    var skills__container = $(".skills__container-description");
        skills__container.click( function () {
            if ($(this).next().is(":visible")) {
                this.classList.toggle("skills__container-description_active");
                $(this).next().slideToggle(500);
            } else {
                skills__container.each(function () {
                    if ($(this).next().is(":visible")) {
                        $(this).next().slideToggle(500);
                        this.classList.toggle("skills__container-description_active");
                    }
                });
                this.classList.toggle("skills__container-description_active");
                $(this).next().slideToggle(500);
            }
        });

    //--------------
    //     Owl
    //--------------
    $(".owl-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items:1,
        smartSpeed:450,
        nav: true,
        navText: ["<", ">"],
        loop: true
    });

    //--------------
    //     ANIMATION
    //--------------
    if ($(window).width() > 500) {
        $(".header__hero-description").animated("swing");
        $(".about__my-photo").animated("flipInY");
        $(".about__personal-information").animated("fadeInLeft");
        $(".about__additional-information").animated("fadeInRight");
        skills__container.animated("fadeInUp", "fadeOutDown");
        $(".skills__description").animated("fadeInUp");
        $(".exp__inner-img").animated("zoomIn");
        $(".exp__paragraph").animated("slideInUp");
        $(".letter__content").animated("slideInRight");
        $(".feed__img-container").animated("fadeInLeft");
        $(".feed__content").animated("fadeInRight");
    }
});

