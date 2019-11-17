

  // Parralax
  // $('.bg-banner').parallax({imageSrc: 'images/bg.jpg'});

  // $('.available').parallax({imageSrc: 'images/screen01.jpg'});


  // side bar
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.display = "block";
    document.getElementsByClassName("sidebar").style.display = "none";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.display = "none";
  }  

  $(function(){
    //Parallax
    $('.bg-banner').parallax('100%', 0.2);
  
    $('.available').parallax('100%', .3);
  
  
  //back to top button
  $(".b2t").click(function(){
    $("html, body").animate({
        "scrollTop" : "0"
    }, 500)
});
  
    //wow jquery plugins
    new WOW().init();
  }); 
  

$(document).ready(function() {
  $('.sidebarBtn').click(function() {
    $('.sidebar').toggleClass('active');
    $('.sidebarBtn').toggleClass('toggle');
  })
});

   