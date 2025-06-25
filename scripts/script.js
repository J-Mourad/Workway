$(document).ready(function () {

    // Initialize Smooth Scrolling for anchor links
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        if ($.attr(this, 'href') !== '#') {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
        }
    });

    // Initialize Testimonial Carousel
    $('#quote-carousel').carousel({
        pause: true,
        interval: 5000,
    });

    // Initialize Fancybox for image galleries if needed in future
    /*
    $("a[rel=scrollGroup]").fancybox({
        'transitionIn'	: 'fade',
        'transitionOut'	: 'fade'
    });
    */
});