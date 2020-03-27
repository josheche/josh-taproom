// // Custom carousel

// $('.carousel_body').slick({
//     arrows: false,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     dots: false,
//     responsive: [
//         {
//             breakpoint: 990,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 centerMode: true
//             }
//         },
//         {
//             breakpoint: 750,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 centerMode: true
//             }
//         },
//         {
//             breakpoint: 420,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 centerMode: true
//             }
//         }
//     ]
// });

// // Custom carousel nav
// $('.carousel-prev').click(function(){ 
//     $(this).parent().find('.carousel_body').slick('slickPrev');
// } );

// $('.carousel-next').click(function(e){
//     e.preventDefault(); 
//     $(this).parent().find('.carousel_body').slick('slickNext');
// } );