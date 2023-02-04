$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></img> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></img> </button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: false,
                arrows: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                dots: false,
                arrows: false
              }
            },
            {
              breakpoint:  575,
              settings: {
                dots: false,
                arrows: false
              }
            }

          ]
    })
  });
      