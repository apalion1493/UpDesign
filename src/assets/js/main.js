import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'slick-carousel/slick/slick.min';

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
