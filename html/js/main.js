function sticky_header() {
  jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll > 50) {
      jQuery('.site-header').addClass('bg-scrolling ');
    }
    else {
      jQuery('.site-header').removeClass('bg-scrolling bglogo');
    }
  })

  }
  function addHeaderHeight()
  { var header = document.getElementById("masthead");
  var header_height = header.offsetHeight - "px";
  jQuery( '.main-content' ).css( {
          'padding-top': header_height
  } );}
  jQuery(function () {
    jQuery(".accordion-content:not(:first-of-type)").css("display", "none");
    jQuery(".js-accordion-title:first-of-type").addClass("open");
   
    jQuery(".js-accordion-title").click(function () {
      jQuery(".open").not(this).removeClass("open").next().slideUp(300);
      jQuery(this).toggleClass("open").next().slideToggle(300);
    });
  });


 
  jQuery(document).ready(function () {
    sticky_header();
    
    jQuery('.hamburger-icon').click(function () {
      jQuery('html,body').toggleClass('open-menu');
     
    });
    
  });
    


  




