$(document).ready(function () {

    $('header').height($(window).height());

    $(window).on('resize', function() {
        
        $('header').height($(window).height())

    });


    

    $('.main-menu span').on('click', function () {

        $('.main-menu').toggleClass('show');

        if ($('.main-menu').hasClass('show')) {

            $('.main-menu').animate({

                right: 0

            }, 500);

            $('.main-menu span').animate ({
                right : 300
            }, 500)
        }else {

            $('.main-menu').animate({

                right: - $('.main-menu').innerWidth()

            }, 500);

            $('.main-menu span').animate ({
                right : 0
            }, 500)
        }

    });

   


    function toggleMenu (slector, menu) {

        $(slector).click( function () {

            $(slector).children().toggleClass("fa-plus fa-minus");

            $(menu).toggleClass('hide');

            if ($(menu).hasClass('hide')) {
                
                $(menu).animate({

                    left : 0

                }, 500);

            }else {

                $(menu).animate({

                    left: - $(menu).innerWidth()

                }, 500);
            }

        });
    }

    toggleMenu('.plus-menu-btn', '.plus-menu');

    
    // Change plus-menu icon on click

    $('.plus-menu .close').on('click', function () {
        
        $('.plus-menu').animate({

            left : - $('.plus-menu').innerWidth()

        }, 500);   

        $('.plus-menu-btn').children().removeClass('fa-minus').addClass("fa-plus");

        $('.plus-menu').removeClass('hide');

    });


    // Make nav bar fixed on scroll


    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 10 ) {

            $('.nav-bar').addClass('fixed');

        } else {
            $('.nav-bar').removeClass('fixed');
        }

    });

     
    // show more

    $('.btn-more').on('click', function() {

        $(this).fadeOut();
        $('.more').fadeIn(2000);

    })

    
});