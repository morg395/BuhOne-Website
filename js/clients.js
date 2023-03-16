$(function() {
    $('.clients__content').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        infinite: false,
        draggable: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 730,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
//            {
//              breakpoint: 557,
//              settings: {
//                slidesToShow: 1,
//                slidesToScroll: 1,
//              }
//            },
        ]
    });

    
})