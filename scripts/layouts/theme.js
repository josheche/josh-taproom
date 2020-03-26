// Custom carousel

$('.carousel_body').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true
            }
        }
      ]
});

// Custom carousel nav
$('.carousel-prev').click(function(){ 
    $(this).parent().find('.carousel_body').slick('slickPrev');
} );

$('.carousel-next').click(function(e){
    e.preventDefault(); 
    $(this).parent().find('.carousel_body').slick('slickNext');
} );