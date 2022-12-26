$(document).ready(function(){
     $('.counter').counterUp({
                delay: 10,
                time: 1000,

            });
});

//responsive item start
$(document).ready(function(){
  
  $('.wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:1,
     speed: 300,
     arrows: false,
     autoplay:true,




     responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    
      ]
  

  });



});
//responsive item end