function equalHeight() {
  jQuery.fn.extend({
      equalHeight: function() {
          var top = 0;
          var row = [];
          var classname = ('equalHeight' + Math.random()).replace('.', '');
          jQuery(this).each(function() {
              var thistop = jQuery(this).offset().top;
              if (thistop > top) {
                  jQuery('.' + classname).removeClass(classname);
                  top = thistop;
              }
              jQuery(this).addClass(classname);
              jQuery(this).height('auto');
              var h = (Math.max.apply(null, jQuery('.' + classname).map(function() {
                  return jQuery(this).outerHeight();
              }).get()));
              jQuery('.' + classname).height(h);
          }).removeClass(classname);
      }
  });
  //home page
  jQuery('.home-learn .learn-slide-item .slide-content h4').equalHeight();

  //contact-us -- reach-out
  jQuery('.reach-out-grid .grid-item .title-block').equalHeight();
  jQuery('.reach-out-grid .grid-item .content-block').equalHeight();

  //brands
  jQuery('.brands-slider-section .brands-slider-wrapper .slider-item').equalHeight();
  jQuery('.home-needs-section .needs-slider-item-wrapper').equalHeight();

  //article gallary section
  jQuery('.article-gallary-section .article-gallary-grid h4').equalHeight();

  //you may like
  jQuery('.you-may-like-section .collection-product-grid .collection-product-grid-item .product-link a h2').equalHeight();
  
  //collection-page
  jQuery('.collection-product-grid .collection-product-grid-item .product-link a h2').equalHeight();
}


// home learn slider
var learn_slider_flag = false;
function home_learn_slider() {
  if (jQuery(window).innerWidth() <= 1199) {
      if (!learn_slider_flag) {
          jQuery('.home-learn .home-learn-slider-wrapper .home-learn-slider').slick({
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              responsive: [{
                  breakpoint: 999999,
                  settings: "unslick"
              },
              {
                  breakpoint: 1199,
                  settings: {
                      slidesToShow: 2
                  }
              },
               {
                  breakpoint: 769,
                  settings: {
                      slidesToShow: 1
                  }
              },          
              ]
          });
          learn_slider_flag = true;
      }
  } else {
      learn_slider_flag = false;
  }
}
var prev_scroll = jQuery(window).scrollTop();
function stickyHeader() {
  var current_scroll = jQuery(window).scrollTop();
  var headerH = jQuery('#shopify-section-header').outerHeight(true);
  var topHeaderH = jQuery('.header-top').outerHeight(true);
  var total = headerH + topHeaderH;
  if (current_scroll > prev_scroll && jQuery(window).scrollTop() > total){
      jQuery('#shopify-section-header').addClass('hide');
      jQuery('#shopify-section-header').css('top', -headerH);
  }
  else if (current_scroll < prev_scroll){
      jQuery('#shopify-section-header').removeClass('hide');   
      jQuery('#shopify-section-header').css('top', 0);
  }
  prev_scroll = current_scroll;
}
var linkListWidth;
//header 
function headerResponsive(){
  if(jQuery('.mobile-header-navigation ul').length){        
      jQuery('.mobile-header-navigation ul').each(function(){
      var linkWidth = 0;
      jQuery(this).find("li").each(function(){
          linkWidth += jQuery(this).outerWidth(true);
      });
        console.log(linkWidth);
      linkListWidth = linkWidth - jQuery(this).closest('.mobile-header-navigation').width();
      if (linkWidth > jQuery(window).width()) {   
          jQuery(this).closest('.mobile-header-navigation').addClass('left-align');   
          // jQuery(this).closest('.mobile-header-navigation').find('.next').addClass('disable');
          jQuery(this).closest('.mobile-header-navigation').addClass('activate-right-arrow'); 
          jQuery(this).scroll(function (event) {
            if(jQuery(this).scrollLeft() == 0){              
              jQuery(this).closest('.mobile-header-navigation').removeClass('activate-left-arrow'); 
            }
            else{ 
             jQuery(this).closest('.mobile-header-navigation').addClass('activate-left-arrow'); 
            }
            if (linkListWidth - jQuery(this).scrollLeft() < 1) {
                jQuery(this).closest('.mobile-header-navigation').removeClass('activate-right-arrow'); 
            } 
            else {
                jQuery(this).closest('.mobile-header-navigation').addClass('activate-right-arrow'); 
            }
          });
      }
    });
  }
}
function mobileMenu() {
    if (jQuery(window).width() <= 1199) {
        jQuery('.header-nav .header-nav-inner .header-menu .header-menu-item.has-children').each(function(){
            jQuery(this).find('.header-menu-item-link').attr("href","javascript:void(0);");
        });
        jQuery('.mobile-header-navigation ul li.has-children a').click(function(e){
          e.preventDefault();          
          var current = jQuery(this).text().toUpperCase();
          jQuery('.header-nav .header-nav-inner .header-menu .header-menu-item.has-children .header-menu-item-link').each(function(){
              var title = jQuery(this).text().toUpperCase();
              if(title == current){
                console.log("match");
                jQuery(this).parent().siblings().find('.megamenu-desktop').slideUp('slow').removeClass('active-list');
                jQuery(this).parent().siblings().removeClass('active-list'); 
                jQuery(this).parent().addClass('active-list');
                jQuery(this).parent().find('.megamenu-desktop').stop(true, true).slideDown('slow').addClass('active-list');
              }
          });
          jQuery('html, body').toggleClass('open-menu');
        });
        jQuery('.header-nav .header-nav-inner .header-menu .header-menu-item.has-children .header-menu-item-link').click(function(e){
          e.preventDefault();
          if(jQuery(this).parent().hasClass('active-list')){
              jQuery(this).parent().removeClass('active-list');
              jQuery(this).parent().children('.megamenu-desktop').removeClass('active-list');
              jQuery(this).parent().children('.megamenu-desktop').slideUp('slow');
              if(jQuery(this).parent().find('.has-inner-children').length){
                jQuery(this).parent().find('.has-inner-children').removeClass('active-list');
                jQuery(this).parent().find('.inner-submenu-wrapper').removeClass('active-list');
                jQuery(this).parent().find('.inner-submenu-wrapper').slideUp('slow');
                if(jQuery(this).parent().find('.has-inner-submenu').length){
                  jQuery(this).parent().find('.has-inner-submenu').removeClass('active-list');
                  jQuery(this).parent().find('.inner-submenu-listing').removeClass('active-list');
                  jQuery(this).parent().find('.inner-submenu-listing').slideUp('slow');
                }   
            }
          }
          else{
              jQuery(this).parent().addClass('active-list');
              jQuery(this).parent().find('.megamenu-desktop').stop(true, true).slideDown('slow').addClass('active-list');
              jQuery(this).parent().siblings().find('.megamenu-desktop').slideUp('slow').removeClass('active-list');
              jQuery(this).parent().siblings().removeClass('active-list'); 
          }          
        });        

    } else {        
        jQuery('html, body').removeClass('open-menu');
        jQuery('.header-nav .header-nav-inner .header-menu .header-menu-item.has-children').each(function(){
            jQuery(this).find('.submenu-arrow').remove();
        });
    }
}
function thumbnail_slider(){
    if(jQuery('.productpage-gallery-thumbnails').length) {
    jQuery('.productpage-gallery-thumbnails').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical:true,
        asNavFor: '.productpage-gallery-featured',
        dots: false,
        arrows: false,
        focusOnSelect:true,
        infinite:false,
        draggable: true,
        verticalSwiping:true,
        responsive: [          
          {
            breakpoint: 768,
            settings: {
              vertical: false,
              slidesToShow: 5,
              }
          },
        ],
      });
    }
}

function swatches_count(){
  var swatches_child = jQuery('.productpage-content .custom-radiobtn-wrapper .custom-radiobtn-grp');
  var swatches_length = jQuery('.productpage-content .custom-radiobtn-wrapper .custom-radiobtn-grp').length;
  if(swatches_length > 28){
    swatches_child.closest('.productpage-content .custom-radiobtn-wrapper').addClass('more-swatches');
    for(var i=0, len = swatches_child.length; i < len; i+=2){
        swatches_child.slice(i, i+2).wrapAll('<div class="two-row-radio"/>');
    } 
  }
}

jQuery(document).ready(function(){  
  equalHeight(); 
  stickyHeader();
  headerResponsive();
  mobileMenu();
  thumbnail_slider();
  setTimeout(function(){
    swatches_count();
  },100);
  jQuery('.hamburger').unbind('click').click(function () {
    jQuery('html, body').toggleClass('open-menu');   
    jQuery('.header-nav .header-nav-inner .header-menu .header-menu-item').removeClass('active-list');
    jQuery('.header-nav .header-nav-inner .header-menu .header-menu-item .megamenu-desktop').slideUp();
    jQuery('.mobile-header-navigation').addClass('left-align-nav');
  });
  jQuery(".header .header-overlay").click(function () {
     jQuery('html, body').removeClass('open-menu');
  });
  jQuery(".mobile-header-navigation .next").click(function () {
      var space_width_flag = true;
      var current_index ; 
      jQuery(this).closest('.mobile-header-navigation').find('ul li').each(function(){        
          if (jQuery(this).outerWidth(true) + jQuery(this).position().left > jQuery(this).closest('.mobile-header-navigation').find('ul').scrollLeft() + jQuery(this).closest('.mobile-header-navigation').width() + 48 && space_width_flag) {            
              current_index = jQuery(this).index();
              space_width_flag = false; 
          }    
      });        
      var nextScroll = jQuery(this).closest('.mobile-header-navigation').find('ul').scrollLeft() + jQuery(this).closest('.mobile-header-navigation').find('ul li').eq(current_index).outerWidth(true);
      jQuery(this).closest('.mobile-header-navigation').removeClass('activate-left-arrow');
      if (linkListWidth > nextScroll) {
          jQuery(this).closest('.mobile-header-navigation').find('ul').animate({ scrollLeft: nextScroll }, 500);
          jQuery(this).closest('.mobile-header-navigation').removeClass('activate-right-arrow');
      } 
      else {
          jQuery(this).closest('.mobile-header-navigation').find('ul').animate({ scrollLeft: linkListWidth }, 500);
          jQuery(this).closest('.mobile-header-navigation').removeClass('activate-left-arrow');
      }
  });
  jQuery(".mobile-header-navigation .previous").click(function () {
      var space_width_flag = true;
      var current_index = 0; 
      jQuery(this).closest('.mobile-header-navigation').find('ul li').each(function(){
          if (jQuery(this).position().left < 0) {
              if(jQuery(this).index() > current_index ) {
                  current_index = jQuery(this).index();
              } 
              space_width_flag = false; 
              current_index = current_index;
          }    
      });
      var prevScroll = jQuery(this).closest('.mobile-header-navigation').find('ul').scrollLeft() - jQuery(this).closest('.mobile-header-navigation').find('ul li').eq(current_index).outerWidth(true);
      jQuery(this).closest('.mobile-header-navigation').removeClass('activate-right-arrow');
      if (prevScroll > 0) {
          jQuery(this).closest('.mobile-header-navigation').find('ul').animate({ scrollLeft: prevScroll }, 500);
          jQuery(this).closest('.mobile-header-navigation').removeClass('activate-left-arrow');
      } else {
          jQuery(this).closest('.mobile-header-navigation').find('ul').animate({ scrollLeft: 0 }, 500);
          jQuery(this).closest('.mobile-header-navigation').removeClass('activate-right-arrow');
      }
  });
// videos-page-show-hide-content 
  jQuery('.view-description-btn').click(function() {
  jQuery(this).toggleClass("view-less");
    if (jQuery(this).hasClass("view-less")) {     
      jQuery(this).text("View Less")
    } 
    else {
      jQuery(this).text("View Instructions")
    }
  jQuery(this).closest('.video-title-wrapper').siblings(".video-hidden-content").toggleClass('show-content').slideToggle(300);
  });
 //common accordion structure
   jQuery(".accordion-title").click(function () {
    jQuery(this).toggleClass("open").next().slideToggle(300);
  });
  
//custom - dropdown with searchbar and product_slider-slide-toggle
  jQuery('.custom-dropdown-wrapper .dropdown-toggle').click(function() {
      jQuery(this).closest('.custom-dropdown-wrapper').toggleClass('open').find('.custom-dropdown-slidedown').slideToggle(300);
  });
  jQuery('.custom-dropdown-wrapper .dropdown-menu-link li').click(function() {
    jQuery(this).closest('.custom-dropdown-wrapper').removeClass('open');
      jQuery(this).closest('.custom-dropdown-wrapper').find('.dropdown-toggle').html(jQuery(this).html());
      jQuery(this).closest('.custom-dropdown-slidedown').slideUp(300)
      jQuery(this).addClass('active').siblings().removeClass('active');
      var activeSlide = jQuery(this).attr("data-filter");
      jQuery(this).closest(".productpage-main-inner").find('.thumbnail-image[data-target="' + activeSlide + '"]').trigger( "click" );   
      jQuery(this).closest('.custom-dropdown-wrapper').find('.custom-radiobtn-grp[data-input="' + activeSlide + '"]').find('.custom-radio-input').trigger( "click" );
  });
  jQuery('.custom-radio-input').click(function() {
    var activeRadio = jQuery(this).closest('.custom-radiobtn-grp').attr("data-input");
    jQuery(this).closest(".productpage-main-inner").find('.thumbnail-image[data-target="' + activeRadio + '"]').trigger( "click" );   
    jQuery(this).closest(".custom-dropdown-wrapper").find('.dropdown-menu-link li[data-filter="' + activeRadio + '"]').toggleClass("link-click").siblings().removeClass("link-click"); 
    var valueofLi =  jQuery('.dropdown-menu-link li.link-click').html();
    jQuery(this).closest('.custom-dropdown-wrapper').find('.dropdown-toggle').html(valueofLi);
  
  });
//video-click-function
jQuery('.slider-banner-image.with-video-main ').click(function() {  
  jQuery(this).toggleClass("play-video");
  jQuery(this).find(".productpage-gallery-featured-video").trigger("play");
});
jQuery(".productpage-gallery .thumbnail-image").click(function(){
  jQuery(this).closest(".productpage-gallery").find('.slider-banner-image.with-video-main ').removeClass("play-video");
})
  // cart page inner radio slider
if(jQuery('.cart-dropdown-radio-wrapper .custom-radiobtn-wrapper').length) {
  jQuery('.cart-dropdown-radio-wrapper .custom-radiobtn-wrapper').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: false,
     responsive: [   
        {
            breakpoint: 1367,
            settings: {
              slidesToShow: 4,
              }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
              }
          },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              }
          },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 6,
              }
          },
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 4,
              }
          },
        ],
       });
  }
  
 //about contact slider
 if(jQuery('.about-contact-section').length) {
  jQuery('.about-contact-section .about-slider-wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: '0',
        responsive: [
          
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });
 }

// cart page horizotal slider
if(jQuery('.productpage-slider-wrapper.cart-slider-wrapper').length) {
   jQuery(' .collection-product-grid').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       arrows: true,
       dots: false,
       infinite: false,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
      });
   }


   

  //product page vertical slider with thumbnails 
if(jQuery('.productpage-gallery-featured').length) {
jQuery('.productpage-gallery-featured').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.productpage-gallery-thumbnails',
});
}
 

  // home slider
  if(jQuery('.home-banner-section').length) {
     jQuery('.home-banner-section .home-banner-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
      });
  }
// brands logo slider
   if(jQuery('.brands-slider-section').length) {
     jQuery('.brands-slider-section .brands-slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          responsive: [
              {
                breakpoint: 1367,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 1201,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
      });
  }

  // product page horizotal slider
if(jQuery('.you-may-like-section').length) {
  jQuery('.you-may-like-section .collection-product-grid').slick({
       slidesToShow: 5,
       slidesToScroll: 1,
       arrows: true,
       dots: false,
       responsive: [
           {
             breakpoint: 1367,
             settings: {
               slidesToShow: 4,
             }
           },
           {
             breakpoint: 1201,
             settings: {
               slidesToShow: 3,
             }
           },
           {
             breakpoint: 992,
             settings: {
               slidesToShow: 2,
             }
           },
           {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
         ]
   });
}
// home needs slider
 if(jQuery('.home-needs-section').length) { 
      jQuery('.home-needs-section .home-needs-slider-wrapper').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          accesibility: false,
          draggable: false,
          swipe: false,
          touchMove: false,
          asNavFor: '.home-needs-list',
      });
      jQuery('.home-needs-section .home-needs-list').slick({
          slidesToShow: 6,
          asNavFor: '.home-needs-slider-wrapper',
          dots: false,
          arrows:false,
          vertical: true,
          verticalSwiping: false,
          focusOnSelect: true,
      });
      jQuery('.home-needs-section .home-needs-nav .home-needs-prev').click(function(){
         jQuery(this).closest('.home-needs-section').find('.home-needs-slider-wrapper .slick-prev').trigger('click');
      });
      jQuery('.home-needs-section .home-needs-nav .home-needs-next').click(function(){
         jQuery(this).closest('.home-needs-section').find('.home-needs-slider-wrapper .slick-next').trigger('click');
      });
  }

// home featured slider
 if(jQuery('.home-featured-section').length) {
  jQuery(' .home-featured-section .featured-slider-wrapper').slick({
       slidesToShow: 5,
       slidesToScroll: 5,
       arrows: true,
       dots: true,
       responsive: [
           {
             breakpoint: 1540,
             settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
             }
           },
           {
             breakpoint: 1366,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
             }
           },
           {
             breakpoint:992,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
             }
           },
           {
             breakpoint:767,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
             }
           },
         ]
   });
}
// home learn slider
if(jQuery('.home-learn .home-learn-slider-wrapper').length) {
    home_learn_slider();
}
// collection banner slider
if(jQuery('.collection-banner-section').length) {
    jQuery('.collection-banner-section .collection-banner-slider').on('init',function(){
        var _this = jQuery(this);
        setTimeout(function(){
            _this.find('.slick-dots').detach().appendTo(_this.find('.slick-current .slider-dots'));
        },10);
     });
    jQuery('.collection-banner-section .collection-banner-slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
     });
    
     jQuery('.collection-banner-section .collection-banner-slider').on('afterChange',function(){
        var _this = jQuery(this);
        setTimeout(function(){
            _this.find('.slick-dots').detach().appendTo(_this.find('.slick-current .slider-dots'));
        },10);
     });
 }


//learn-how video slider
if(jQuery('.how-to-videos-section').length) {
  jQuery('.how-to-videos-section .video-slider-wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite:true,
        responsive: [
          
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
    });
 }

// custom popup
jQuery('.custom-popup-link').click(function (e) {
  e.preventDefault();
  var _this_id = jQuery(this).attr('data-popup');
  jQuery('body,html').addClass('overflow-hidden');
  jQuery('.custom-popup[data-modal="' + _this_id + '"]').addClass('show');
  setTimeout(function () {
      jQuery('.custom-popup[data-modal="' + _this_id + '"]').addClass('popup-open');
  }, 100);
});

jQuery('.custom-popup .popup-dialog-wrapper,.custom-popup .close-popup').click(function () {
    jQuery('body,html').removeClass('overflow-hidden');
    jQuery('.custom-popup').removeClass('popup-open');
    if(jQuery(this).closest('.custom-popup').hasClass('video-popup')) {
      var _this_src = jQuery(this).closest('.custom-popup').find('iframe').attr('src');
      jQuery(this).closest('.custom-popup').find('iframe').attr('src','');
      jQuery(this).closest('.custom-popup').find('iframe').attr('src',_this_src);
    }
    setTimeout(function () {
        jQuery('.custom-popup').removeClass('show');
    }, 500)
});

jQuery('.custom-popup .popup-dialog').click(function (e) {
    e.stopPropagation();
});

// filter sidebar
jQuery('.filter-sidebar-wrapper .filter-sidebar-list .filter-sidebar-list-item .list-heading .filter-name').click(function(e) {
  e.preventDefault();
  jQuery(this).closest('.filter-sidebar-list-item').toggleClass('active');
  jQuery(this).closest('.filter-sidebar-list-item').find('.list-content').stop(true,true).slideToggle();
});
jQuery('.collection-shop-section .collection-grid-wrapper .filter-btn-mble').click(function(){
  jQuery('body,html').addClass('filter-overflow-hidden');
    jQuery('.filter-sidebar-wrapper').addClass('filter-open');
});

jQuery('.collection-shop-section .collection-grid-wrapper .filter-sidebar-wrapper .filter-close-btn').click(function(){
    jQuery('body,html').removeClass('filter-overflow-hidden');
    jQuery('.filter-sidebar-wrapper').removeClass('filter-open');
});


  jQuery('.megamenu-menu .has-inner-children .sub-menu-arrow').unbind("click").click(function (e) {
      e.preventDefault();        
      if(jQuery(this).parent().hasClass('active-list')){
          jQuery(this).parent().removeClass('active-list');
          jQuery(this).parent().children('.inner-submenu-wrapper').removeClass('active-list');
          jQuery(this).parent().children('.inner-submenu-wrapper').slideUp('slow');
          if(jQuery(this).parent().find('.has-inner-submenu').length){
              jQuery(this).parent().find('.has-inner-submenu').removeClass('active-list');
              jQuery(this).parent().find('.inner-submenu-listing').removeClass('active-list');
              jQuery(this).parent().find('.inner-submenu-listing').slideUp('slow');
          }
      }
      else{               
          jQuery(this).parent().addClass('active-list');
          jQuery(this).parent().find('.inner-submenu-wrapper').stop(true, true).slideDown('slow').addClass('active-list');
          jQuery(this).parent().siblings().find('.inner-submenu-wrapper').slideUp('slow').removeClass('active-list');
          jQuery(this).parent().siblings().removeClass('active-list');             
      }
  }); 
  jQuery('.megamenu-menu .has-inner-submenu .sub-menu-arrow').unbind("click").click(function (e) {
      e.preventDefault();        
      if(jQuery(this).parent().hasClass('active-list')){
          jQuery(this).parent().removeClass('active-list');
          jQuery(this).parent().children('.inner-submenu-listing').removeClass('active-list');
          jQuery(this).parent().children('.inner-submenu-listing').slideUp('slow');            
      }
      else{               
          jQuery(this).parent().addClass('active-list');
          jQuery(this).parent().find('.inner-submenu-listing').stop(true, true).slideDown('slow').addClass('active-list');
          jQuery(this).parent().siblings().find('.inner-submenu-listing').slideUp('slow').removeClass('active-list');
          jQuery(this).parent().siblings().removeClass('active-list');             
      }
  });  
  //search bar functionality    
      jQuery('.header-search-form .search__input').on("focusin", function(){        
        jQuery(this).closest('.header-search-wrapper').addClass('open');
      });       
  jQuery('.header-search-wrapper .header-search-icon .search-button').on("click", function(){        
      jQuery(this).closest('.header-search-wrapper').addClass('open');
  });   
  jQuery('.header-search-wrapper .header-search-result-overlay').on("click", function(){        
      jQuery(this).closest('.header-search-wrapper').removeClass('open');
  });
  jQuery('.header-search-wrapper .form-close-icon').on("click", function(){        
      jQuery(this).closest('.header-search-wrapper').removeClass('open');
  });

  jQuery(window).scroll(function() {
    var topPos = jQuery(this).scrollTop();
    if (topPos > 200) {
      jQuery('.footer-totop-link').addClass('show');
    } else {
      jQuery('.footer-totop-link').removeClass('show');
    }
  });

  jQuery('.footer-totop-link').click(function() {
    jQuery('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  }); 

  jQuery('.footer-nav-title').click(function() {
    jQuery(this).toggleClass('open');
    jQuery(this).siblings('.footer-slidedown').slideToggle(200);
  });

  



  
  
});
jQuery(window).on('load',function() {
  setTimeout(function() {
    equalHeight();
  // to rearrange buttons on cart drawer
	if(jQuery('.hs-popup-cart-sp-load').length){
		console.log('inside if');
		jQuery('.hs-footer-layout form .hs-finalize-purchase .hs-continue-shopping').appendTo('.hs-footer-layout form .hs-finalize-purchase .hs-content-buttons');
		console.log('appended');
	}
  },1000);
  
});
jQuery(window).resize(function() {
  setTimeout(function() {
    equalHeight();
    headerResponsive();
    mobileMenu();
    if(jQuery('.home-learn .home-learn-slider-wrapper').length) {
        home_learn_slider();
    }
  },500);
});
jQuery(window).scroll(function () {
  stickyHeader();
});
