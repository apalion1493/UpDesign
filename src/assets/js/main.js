import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'slick-carousel/slick/slick.min';
import AOS from 'aos/dist/aos';

AOS.init({
    offset: 120,
    delay: 200,
    duration: 600,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

$(document).scroll(function () {
    if($('.section-second').hasClass('aos-animate')) {
        $('#video').get(0).play()
    }
})


$('.slider-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#header__burger').click(function () {
    $('#header__nav').addClass('active')
    $('body').addClass('active')
})

$('.header__nav-close').click(function () {
    $('#header__nav').removeClass('active')
    $('body').removeClass('active')
})

$(document).ready(function(){
    $(".anchor-link").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});