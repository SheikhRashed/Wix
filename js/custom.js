//banner slide
$('.banner-slide').slick({
    prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
    dots: false,
  });


//client logo
$('.client-logo-slide').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
 
   // water ripple in video backgroung
    
   $('.water-ripple').ripples({
    resolution: 512,
    dropRadius: 10,
    perturbance: 0.04,
    interactive: true
  });


  // Parralax
  $('.bg-banner').parallax({imageSrc: 'images/bg.jpg'});

  $('.available').parallax({imageSrc: 'images/screen01.jpg'});


  // side bar
  function openNav() {
    document.getElementById("myNav").style.width = "60%";
    document.getElementById("myNav").style.display = "block";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.display = "none";
  }


  // wow js

  new WOW().init();