function equalHeights() {
    jQuery.fn.extend({
      equalHeight: function () {
        var top = 0;
        var row = [];
        var classname = ("equalHeight" + Math.random()).replace(".", "");
        jQuery(this)
          .each(function () {
            var thistop = jQuery(this).offset().top;
            if (thistop > top) {
              jQuery("." + classname).removeClass(classname);
              top = thistop;
            }
            jQuery(this).addClass(classname);
            jQuery(this).height("auto");
            var h = Math.max.apply(
              null,
              jQuery("." + classname)
                .map(function () {
                  return jQuery(this).outerHeight();
                })
                .get()
            );
            jQuery("." + classname).height(h);
          })
          .removeClass(classname);
      },
    });
    
    jQuery(".home-learn .learn-slide-item .slide-content h3").equalHeight();
    jQuery(".reach-out-grid .grid-item .title-block").equalHeight();
    jQuery(".reach-out-grid .grid-item .content-block").equalHeight();
    jQuery(".brands-slider-section .brands-slider-wrapper .slider-item").equalHeight();
    jQuery(".home-needs-section .needs-slider-item-wrapper").equalHeight();
    jQuery(".article-gallary-section .article-gallary-grid h4").equalHeight();
    jQuery(".collection-product-grid .collection-product-grid-item .product-link a h2").equalHeight();
    jQuery(".shades-compare-section .shade-blends").equalHeight();
    jQuery(".shades-compare-section .shade-complements").equalHeight();
    jQuery(".shades-compare-section .shade-title-wrap").equalHeight();
    jQuery(".cart-slider-wrapper h3").equalHeight();
    jQuery(".result-contact-section .result-contact-grid .grid-inner .contact-item-content p").equalHeight();
  }
  
  // home learn slider
  var learn_slider_flag = false;
  
  function home_learn_slider() {
    if (jQuery(window).innerWidth() <= 1199) {
      if (!learn_slider_flag) {
        jQuery(".home-learn .home-learn-slider-wrapper .home-learn-slider").slick(
          {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            responsive: [
              {
                breakpoint: 999999,
                settings: "unslick",
              },
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
          }
        );
        learn_slider_flag = true;
      }
    } else {
      learn_slider_flag = false;
    }
  }
  
  var getstarted_slider_flag = false;
  
  function quiz_getstarted_slider() {
    if (jQuery(window).innerWidth() <= 767) {
      if (!getstarted_slider_flag) {
        jQuery(".quiz-get-started .quiz-banner.quiz-banner-slider").slick({
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 999999,
              settings: "unslick",
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
        getstarted_slider_flag = true;
      }
    } else {
      getstarted_slider_flag = false;
    }
  }
  
  var prev_scroll = jQuery(window).scrollTop();
  
  function stickyHeader() {
    var current_scroll = jQuery(window).scrollTop();
    var headerH = jQuery("#shopify-section-header").outerHeight(true);
    var topHeaderH = jQuery(".header-top").outerHeight(true);
    var total = headerH + topHeaderH;
    if (current_scroll > prev_scroll && jQuery(window).scrollTop() > total) {
      jQuery("#shopify-section-header").addClass("hide");
      jQuery("#shopify-section-header").css("top", -headerH);
    } else if (current_scroll < prev_scroll) {
      jQuery("#shopify-section-header").removeClass("hide");
      jQuery("#shopify-section-header").css("top", 0);
    }
    prev_scroll = current_scroll;
  }
  var linkListWidth;
  //header
  function headerResponsive() {
    if (jQuery(".mobile-header-navigation ul").length) {
      jQuery(".mobile-header-navigation ul").each(function () {
        var linkWidth = 0;
        jQuery(this)
          .find("li")
          .each(function () {
            linkWidth += jQuery(this).outerWidth(true);
          });
        linkListWidth =
          linkWidth - jQuery(this).closest(".mobile-header-navigation").width();
        if (linkWidth > jQuery(window).width()) {
          jQuery(this)
            .closest(".mobile-header-navigation")
            .addClass("left-align");
          // jQuery(this).closest('.mobile-header-navigation').find('.next').addClass('disable');
          jQuery(this)
            .closest(".mobile-header-navigation")
            .addClass("activate-right-arrow");
          jQuery(this).scroll(function (event) {
            if (jQuery(this).scrollLeft() == 0) {
              jQuery(this)
                .closest(".mobile-header-navigation")
                .removeClass("activate-left-arrow");
            } else {
              jQuery(this)
                .closest(".mobile-header-navigation")
                .addClass("activate-left-arrow");
            }
            if (linkListWidth - jQuery(this).scrollLeft() < 1) {
              jQuery(this)
                .closest(".mobile-header-navigation")
                .removeClass("activate-right-arrow");
            } else {
              jQuery(this)
                .closest(".mobile-header-navigation")
                .addClass("activate-right-arrow");
            }
          });
        }
      });
    }
  }
  var alreadyMobilized = 0;
  
  function mobileMenu() {
    if (jQuery(window).width() <= 1199) {
      if (alreadyMobilized == 0) {
        alreadyMobilized = 1;
  
      
        
        jQuery(
          ".header-nav .header-nav-inner .header-menu .header-menu-item.has-children .header-menu-item-link"
        ).click(function (e) {
          e.preventDefault();
          if (jQuery(this).parent().hasClass("active-list")) {
            jQuery(this).parent().removeClass("active-list");
            jQuery(this)
              .parent()
              .children(".megamenu-desktop")
              .removeClass("active-list");
            jQuery(this).parent().children(".megamenu-desktop").slideUp("fast");
            if (jQuery(this).parent().find(".has-inner-children").length) {
              jQuery(this)
                .parent()
                .find(".has-inner-children")
                .removeClass("active-list");
              jQuery(this)
                .parent()
                .find(".inner-submenu-wrapper")
                .removeClass("active-list");
              jQuery(this)
                .parent()
                .find(".inner-submenu-wrapper")
                .slideUp("fast");
              if (jQuery(this).parent().find(".has-inner-submenu").length) {
                jQuery(this)
                  .parent()
                  .find(".has-inner-submenu")
                  .removeClass("active-list");
                jQuery(this)
                  .parent()
                  .find(".inner-submenu-listing")
                  .removeClass("active-list");
                jQuery(this)
                  .parent()
                  .find(".inner-submenu-listing")
                  .slideUp("fast");
              }
            }
          } else {
            jQuery(this).parent().addClass("active-list");
            jQuery(this)
              .parent()
              .find(".megamenu-desktop")
              .stop(true, true)
              .slideDown("fast")
              .addClass("active-list");
            jQuery(this)
              .parent()
              .siblings()
              .find(".megamenu-desktop")
              .slideUp("fast")
              .removeClass("active-list");
            jQuery(this).parent().siblings().removeClass("active-list");
          }
        });
      }
    } else {
      jQuery("html, body").removeClass("open-menu");
      jQuery(
        ".header-nav .header-nav-inner .header-menu .header-menu-item.has-children"
      ).each(function () {
        jQuery(this).find(".submenu-arrow").remove();
      });
    }
  }
  
  function thumbnail_slider() {
  
  
    
    if (jQuery(".productpage-gallery-thumbnails").length) {
  
  
  
         
      jQuery(".productpage-gallery-thumbnails").on("init", function (e, slider) {
  
  
  
  
  
        jQuery('.productpage-gallery-thumbnails').on('click', '.slick-slide.thumbnail-image', function(){
          
  
  
            // Change the main image to match this thumbnail button
            var index = jQuery(this).closest(".slick-slide").data("slick-index");
  
  
          
            jQuery(".productpage-gallery-featured").slick("slickGoTo", index);
  
  console.log('Thumb Clicked');
          
        });
      });
  
   
      jQuery(".productpage-gallery-thumbnails").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: ".productpage-gallery-featured",
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false,
        draggable: true,
        verticalSwiping: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              vertical: false,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 480,
            settings: {
              vertical: false,
              slidesToShow: 3,
            },
          },
        ],
      });
  
  
  
  
      
      
    }
  }
  var swatches_count_flag1 = false;
  var swatches_count_flag2 = false;
  var swatches_count_flag3 = false;
  
  function swatches_count() {
    var windowSize = jQuery(window).width();
    var swatches_child = jQuery(
      ".productpage-content .custom-radiobtn-wrapper .custom-radiobtn-grp"
    );
    var swatches_length = jQuery(
      ".productpage-content .custom-radiobtn-wrapper .custom-radiobtn-grp"
    ).length;
    if (windowSize > 1200) {
      if (!swatches_count_flag1) {
        if (jQuery(".productpage-content .more-swatches").length) {
          swatches_child
            .closest(".productpage-content .custom-radiobtn-wrapper")
            .removeClass("more-swatches");
          jQuery(".two-row-radio").each(function () {
            jQuery(this)
              .find(".custom-radiobtn-grp")
              .detach()
              .appendTo(".productpage-content .custom-radiobtn-wrapper");
            jQuery(this).remove();
          });
        }
        if (swatches_length > 28) {
          swatches_child
            .closest(".productpage-content .custom-radiobtn-wrapper")
            .addClass("more-swatches");
          for (var i = 0, len = swatches_child.length; i < len; i += 2) {
            swatches_child
              .slice(i, i + 2)
              .wrapAll('<div class="two-row-radio"/>');
          }
        }
        swatches_count_flag1 = true;
      }
    } else if (windowSize >= 576 && windowSize <= 1199) {
      if (!swatches_count_flag2) {
        if (jQuery(".productpage-content .more-swatches").length) {
          swatches_child
            .closest(".productpage-content .custom-radiobtn-wrapper")
            .removeClass("more-swatches");
          jQuery(".two-row-radio").each(function () {
            jQuery(this)
              .find(".custom-radiobtn-grp")
              .detach()
              .appendTo(".productpage-content .custom-radiobtn-wrapper");
            jQuery(this).remove();
          });
        }
        if (swatches_length > 24) {
          swatches_child
            .closest(".productpage-content .custom-radiobtn-wrapper")
            .addClass("more-swatches");
          for (var i = 0, len = swatches_child.length; i < len; i += 2) {
            swatches_child
              .slice(i, i + 2)
              .wrapAll('<div class="two-row-radio"/>');
          }
        }
        swatches_count_flag2 = true;
      }
    } else if (windowSize <= 575) {
      if (!swatches_count_flag3) {
        if (jQuery(".productpage-content .more-swatches").length) {
          swatches_child
            .closest(".productpage-content .custom-radiobtn-wrapper")
            .removeClass("more-swatches");
          jQuery(".two-row-radio").each(function () {
            jQuery(this)
              .find(".custom-radiobtn-grp")
              .detach()
              .appendTo(".productpage-content .custom-radiobtn-wrapper");
            jQuery(this).remove();
          });
        }
        if (swatches_length > 14) {
          swatches_child
            .closest(".productpage-content .custom-radiobtn-wrapper")
            .addClass("more-swatches");
          for (var i = 0, len = swatches_child.length; i < len; i += 2) {
            swatches_child
              .slice(i, i + 2)
              .wrapAll('<div class="two-row-radio"/>');
          }
        }
        swatches_count_flag3 = true;
      }
    }
  }
  
  jQuery(document).ready(function () {
    var links = document.links;
    for (let i = 0, linksLength = links.length; i < linksLength; i++) {
      if (
        links[i].hostname !== window.location.hostname &&
        links[i].hostname != "" &&
        links[i].hostname != "#"
      ) {
        links[i].target = "_blank";
        links[i].rel = "noreferrer noopener";
      }
    }
  });
  
  
  jQuery(document).ready(function () {
    equalHeights();
    stickyHeader();
    headerResponsive();
    mobileMenu();
    thumbnail_slider();
    setTimeout(function () {
      swatches_count();
    }, 100);
   
    // ADA JS for header
    jQuery(
      ".header-nav .header-nav-inner .header-menu li .header-menu-item-link"
    ).focus(function () {
      if (jQuery(this).closest("li").hasClass("has-children")) {
        jQuery(this).closest("li").siblings().find("a").removeClass("focus-in");
        jQuery(this)
          .closest("li")
          .siblings()
          .find(".megamenu")
          .removeClass("show");
        jQuery(this).closest("li").siblings().removeClass("active-menu");
        jQuery(this).closest("li").addClass("active-menu");
        jQuery(this).addClass("focus-in");
        jQuery(this).closest("li").find(".megamenu").addClass("show");
      } else {
        jQuery(this).closest("li").siblings().find("a").removeClass("focus-in");
        jQuery(this).closest("li").siblings().removeClass("active-menu");
        jQuery(this)
          .closest("li")
          .siblings()
          .find(".megamenu")
          .removeClass("show");
      }
    });
    jQuery(".megamenu-menu .has-inner-children > .megamenu-item-link").focus(
      function () {
        if (jQuery(this).parent().hasClass("active-list")) {
          jQuery(this).parent().removeClass("active-list");
          jQuery(this)
            .parent()
            .children(".inner-submenu-wrapper")
            .removeClass("active-list");
          jQuery(this)
            .parent()
            .children(".inner-submenu-wrapper")
            .slideUp("fast");
          if (jQuery(this).parent().find(".has-inner-submenu").length) {
            jQuery(this)
              .parent()
              .find(".has-inner-submenu")
              .removeClass("active-list");
            jQuery(this)
              .parent()
              .find(".inner-submenu-listing")
              .removeClass("active-list");
            jQuery(this).parent().find(".inner-submenu-listing").slideUp("fast");
          }
        } else {
          jQuery(this).parent().addClass("active-list");
          jQuery(this)
            .parent()
            .find(".inner-submenu-wrapper")
            .stop(true, true)
            .slideDown("fast")
            .addClass("active-list");
          jQuery(this)
            .parent()
            .siblings()
            .find(".inner-submenu-wrapper")
            .slideUp("fast")
            .removeClass("active-list");
          jQuery(this).parent().siblings().removeClass("active-list");
        }
      }
    );
    jQuery(".megamenu-menu .megamenu-item > .megamenu-item-link").focus(
      function () {
        if (jQuery(this).parent().hasClass("active-list")) {
          jQuery(this).parent().removeClass("active-list");
          jQuery(this)
            .parent()
            .children(".inner-submenu-listing")
            .removeClass("active-list");
          jQuery(this)
            .parent()
            .children(".inner-submenu-listing")
            .slideUp("fast");
        } else {
          jQuery(this)
            .parent()
            .siblings()
            .find(".inner-submenu-listing")
            .slideUp("fast")
            .removeClass("active-list");
          jQuery(this).parent().siblings().removeClass("active-list");
          jQuery(this).parent().addClass("active-list");
          jQuery(this)
            .parent()
            .find(".inner-submenu-listing")
            .stop(true, true)
            .slideDown("fast")
            .addClass("active-list");
        }
      }
    );
    jQuery(".hamburger")
      .unbind("click")
      .click(function () {
        jQuery("html, body").toggleClass("open-menu");
        jQuery(
          ".header-nav .header-nav-inner .header-menu .header-menu-item"
        ).removeClass("active-list");
        jQuery(
          ".header-nav .header-nav-inner .header-menu .header-menu-item .megamenu-desktop"
        ).slideUp();
        jQuery(".mobile-header-navigation").addClass("left-align-nav");
      });
    jQuery(".header .header-overlay").click(function () {
      jQuery("html, body").removeClass("open-menu");
    });
    jQuery(".mobile-header-navigation .next").click(function () {
      var space_width_flag = true;
      var current_index;
      jQuery(this)
        .closest(".mobile-header-navigation")
        .find("ul li")
        .each(function () {
          if (
            jQuery(this).outerWidth(true) + jQuery(this).position().left >
              jQuery(this)
                .closest(".mobile-header-navigation")
                .find("ul")
                .scrollLeft() +
                jQuery(this).closest(".mobile-header-navigation").width() +
                48 &&
            space_width_flag
          ) {
            current_index = jQuery(this).index();
            space_width_flag = false;
          }
        });
      var nextScroll =
        jQuery(this)
          .closest(".mobile-header-navigation")
          .find("ul")
          .scrollLeft() +
        jQuery(this)
          .closest(".mobile-header-navigation")
          .find("ul li")
          .eq(current_index)
          .outerWidth(true);
      jQuery(this)
        .closest(".mobile-header-navigation")
        .removeClass("activate-left-arrow");
      if (linkListWidth > nextScroll) {
        jQuery(this).closest(".mobile-header-navigation").find("ul").animate(
          {
            scrollLeft: nextScroll,
          },
          500
        );
        jQuery(this)
          .closest(".mobile-header-navigation")
          .removeClass("activate-right-arrow");
      } else {
        jQuery(this).closest(".mobile-header-navigation").find("ul").animate(
          {
            scrollLeft: linkListWidth,
          },
          500
        );
        jQuery(this)
          .closest(".mobile-header-navigation")
          .removeClass("activate-left-arrow");
      }
    });
    jQuery(".mobile-header-navigation .previous").click(function () {
      var space_width_flag = true;
      var current_index = 0;
      jQuery(this)
        .closest(".mobile-header-navigation")
        .find("ul li")
        .each(function () {
          if (jQuery(this).position().left < 0) {
            if (jQuery(this).index() > current_index) {
              current_index = jQuery(this).index();
            }
            space_width_flag = false;
            current_index = current_index;
          }
        });
      var prevScroll =
        jQuery(this)
          .closest(".mobile-header-navigation")
          .find("ul")
          .scrollLeft() -
        jQuery(this)
          .closest(".mobile-header-navigation")
          .find("ul li")
          .eq(current_index)
          .outerWidth(true);
      jQuery(this)
        .closest(".mobile-header-navigation")
        .removeClass("activate-right-arrow");
      if (prevScroll > 0) {
        jQuery(this).closest(".mobile-header-navigation").find("ul").animate(
          {
            scrollLeft: prevScroll,
          },
          500
        );
        jQuery(this)
          .closest(".mobile-header-navigation")
          .removeClass("activate-left-arrow");
      } else {
        jQuery(this).closest(".mobile-header-navigation").find("ul").animate(
          {
            scrollLeft: 0,
          },
          500
        );
        jQuery(this)
          .closest(".mobile-header-navigation")
          .removeClass("activate-right-arrow");
      }
    });
    //collcetion-page-sidebar
    jQuery(
      ".custom-checkbox.has-inner-links .custom-checkbox-inner input"
    ).change(function () {
      if (jQuery(this).is(":checked")) {
        jQuery(this)
          .closest(".custom-checkbox")
          .find(".sidebar-link-wrapper")
          .slideDown(300);
      } else {
        jQuery(this)
          .closest(".custom-checkbox")
          .find(".sidebar-link-wrapper")
          .slideUp(300);
      }
    });
    // videos-page-show-hide-content
    jQuery(".view-description-btn").click(function () {
      jQuery(this).toggleClass("view-less");
      if (jQuery(this).hasClass("view-less")) {
        jQuery(this).text("View Less");
      } else {
        jQuery(this).text("View Instructions");
      }
      jQuery(this)
        .closest(".video-title-wrapper")
        .siblings(".video-hidden-content")
        .toggleClass("show-content")
        .slideToggle(300);
    });
    //common accordion structure
    jQuery(".accordion-title").click(function () {
      var clickedElement = $(this);
  
      //close all others
      jQuery(this)
        .parent()
        .parent()
        .find(".accordion-content-wrapper")
        .each(function (index) {
          if (
            $(this).find(".accordion-title.open").length &&
            clickedElement[0] != $(this).find(".accordion-title")[0]
          ) {
            $(this).find(".accordion-title").removeClass("open");
            $(this).find(".accordion-content").slideToggle(300);
          }
        });
  
      jQuery(this).toggleClass("open").next().slideToggle(300);
    });
  
    //custom - dropdown with searchbar and product_slider-slide-toggle
    jQuery(document).on(
      "click",
      `.custom-dropdown-wrapper .dropdown-toggle`,
      function () {
        jQuery(this)
          .closest(".custom-dropdown-wrapper")
          .toggleClass("open")
          .find(".custom-dropdown-slidedown")
          .slideToggle(300);
      }
    );
    jQuery(document).on(
      "click",
      `.custom-dropdown-wrapper .dropdown-menu-link li`,
      function () {
  
        jQuery(this).closest(".custom-dropdown-wrapper").removeClass("open");
        jQuery(this)
          .closest(".custom-dropdown-wrapper")
          .find(".dropdown-toggle")
          .html(jQuery(this).html());
        jQuery(this).closest(".custom-dropdown-slidedown").slideUp(300);
        jQuery(this).addClass("active").siblings().removeClass("active");
        var activeSlide = jQuery(this).attr("data-filter");
  
  
       $('.productpage-gallery-thumbnails, .productpage-gallery-featured').slick('slickGoTo', 0);
  
            $('.productpage-gallery-thumbnails, .productpage-gallery-featured').slick('slickUnfilter');
        
  $('.productpage-gallery-thumbnails, .productpage-gallery-featured').slick('slickFilter','[data-target="' + activeSlide + '"],.always').slick('refresh');
  
  
  
  
  
        
        jQuery(this)
          .closest(".custom-dropdown-wrapper")
          .find('.custom-radiobtn-grp[data-input="' + activeSlide + '"]')
          .find(".custom-radio-input")
          .trigger("click");
      }
    );
    jQuery(".custom-dropdown-wrapper .dropdown-menu-link li").each(function (e) {
      jQuery(this).on("keydown", function (e) {
        if (e.keyCode == 13) {
          jQuery(this).trigger("click");
        }
      });
    });
    jQuery(document).on("click", `.custom-radio-input`, function () {
      var activeRadio = jQuery(this)
        .closest(".custom-radiobtn-grp")
        .attr("data-input");
  
  
      console.log('variant clicked');
  
       $('.productpage-gallery-thumbnails, .productpage-gallery-featured').slick('slickGoTo', 0);
  
      
  
      $('.productpage-gallery-thumbnails, .productpage-gallery-featured').slick('slickUnfilter');
      
  $('.productpage-gallery-thumbnails, .productpage-gallery-featured').slick('slickFilter','[data-target="' + activeRadio + '"],.always').slick('refresh');
  
  
  
  
  
  
      
      jQuery(this)
        .closest(".custom-dropdown-wrapper")
        .find('.dropdown-menu-link li[data-filter="' + activeRadio + '"]')
        .toggleClass("link-click")
        .siblings()
        .removeClass("link-click");
      var valueofLi = jQuery(".dropdown-menu-link li.link-click").html();
      jQuery(this)
        .closest(".custom-dropdown-wrapper")
        .find(".dropdown-toggle")
        .html(valueofLi);
    });
    jQuery(
      ".custom-radiobtn-wrapper .custom-radiobtn-grp .custom-radio-input"
    ).each(function (e) {
      jQuery(this).on("keydown", function (e) {
        if (e.keyCode == 13) {
          jQuery(this).trigger("click");
          
        }
      });
    });
  
    //  shade-chart-page-remove-option
    jQuery(document).on("click", `.remove-filter`, function () {
      var optionval = jQuery("#shades-filters").val();
      jQuery("#shades-filters > option[value=" + optionval + "]").remove();
    });
    //video-click-function
    jQuery(".slider-banner-image.with-video-main ").click(function () {
      jQuery(this).toggleClass("play-video");
      jQuery(this).find(".productpage-gallery-featured-video").trigger("play");
    });
    jQuery(".productpage-gallery .thumbnail-image").click(function () {
      jQuery(this)
        .closest(".productpage-gallery")
        .find(".slider-banner-image.with-video-main ")
        .removeClass("play-video");
    });
  
  
  
      // product page horizotal slider
    if (jQuery(".you-may-like-section").length) {
      jQuery(".you-may-like-section .collection-product-grid").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1367,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  
  
  
    
    // cart page inner radio slider
    if (jQuery(".cart-dropdown-radio-wrapper .custom-radiobtn-wrapper").length) {
      jQuery(".cart-dropdown-radio-wrapper .custom-radiobtn-wrapper").slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        centerMode: false,
        centerPadding: "0",
        responsive: [
          {
            breakpoint: 1750,
            settings: {
              slidesToShow: 6,
            },
          },
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1130,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 6,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 7,
            },
          },
        ],
      });
    }
  
    
  
  
    //collection page slick refresh
    jQuery(".collection-product-pagination .primary-btn").click(function (e) {
      jQuery(".custom-radiobtn-wrapper").slick("refresh");
    });
  
    //search page slick refresh
    jQuery(".search-page-section .tab-heading li").click(function (e) {
      jQuery(".custom-radiobtn-wrapper").slick("refresh");
    });
  
    if (jQuery(".search-page-section").length) {
      jQuery(".tab-heading li").click(function (e) {
        var _this = jQuery(this).attr("data-tab");
        jQuery(".tab-content[data-id='" + _this + "']")
          .siblings()
          .fadeOut(0);
        jQuery(".tab-content[data-id='" + _this + "']").fadeIn(300);
        jQuery(this).addClass("active");
        jQuery(this).siblings().removeClass("active");
        equalHeights();
      });
    }
  
    //about contact slider
    if (jQuery(".about-contact-section").length) {
      jQuery(".about-contact-section .about-slider-wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: "0",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  
    // cart page horizotal slider
    if (jQuery(".productpage-slider-wrapper.cart-slider-wrapper").length) {
      jQuery(" .collection-product-grid").slick({
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
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  
  
    //product page vertical slider with thumbnails
    if (jQuery(".productpage-gallery-featured").length) {
  
  
      
      jQuery(".productpage-gallery-featured").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite:false,
        fade: true,
        asNavFor: ".productpage-gallery-thumbnails",
      });
  
  
  $('.productpage-gallery-thumbnails, .productpage-gallery-featured').slick('slickUnfilter');
  $('.productpage-gallery-thumbnails, .productpage-gallery-featured').slick('slickFilter','.always,.variant-default').slick('refresh');
  $('.productpage-gallery-thumbnails, .productpage-gallery-featured').slick('slickGoTo', 0);
  
     
      
      jQuery(".productpage-gallery-featured").on("afterChange", function () {
        jQuery(".productpage-gallery-featured .slider-banner-image.with-video-main iframe").each(function () {
          var _this_src = jQuery(this).attr("src");
          jQuery(this).attr("src", _this_src);
        });
      });
  
    }
  
    // home slider
    if (jQuery(".home-banner-section").length) {
      jQuery(".home-banner-section .home-banner-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
      });
      // On after slide change
      jQuery(".home-banner-section .home-banner-slider").on(
        "afterChange",
        function (event, slick, currentSlide) {
          jQuery(".home-banner-section .slick-dots").blur();
          jQuery(
            ".home-banner-section .home-banner-slider .slick-slide.slick-current"
          ).attr("tabindex", "1");
         /*
          jQuery(
            ".home-banner-section .home-banner-slider .slick-slide.slick-current"
          )
            .find(".primary-btn")
            .focus();
          */
        }
      );
      jQuery(
        ".home-banner-section .home-banner-slider .slick-slide.slick-current"
      )
        .find(".primary-btn")
        .on("focusout", function (e) {
          
          jQuery(this)
            .closest(".home-banner-slider")
            .find(".slick-dots .slick-active")
            .focus();
        });
    }
    // brands logo slider
    if (jQuery(".brands-slider-section").length) {
      jQuery(".brands-slider-section .brands-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1367,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  
    // home needs slider
    if (jQuery(".home-needs-section").length) {
      jQuery(".home-needs-section .home-needs-list").on(
        "init",
        function (e, slider) {
  
  console.log(slider.$slides);
          
          jQuery(slider.$slides).each(function (index) {
            jQuery(this).on("click", function () {
              // Move aria-current="true" to this button
              jQuery(
                slider.$slides.find(".home-needs-text").removeAttr("aria-current")
              );
              jQuery(this).attr("aria-current", true);
  
              // Change the main image to match this thumbnail button
              var index = jQuery(this)
                .closest(".slick-slide")
                .data("slick-index");
              jQuery(".home-needs-slider-wrapper").slick("slickGoTo", index);
            });
          });
        }
      );
  
      jQuery(".home-needs-section .home-needs-slider-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // fade: false,
        accesibility: false,
        draggable: true,
        swipe: true,
        touchMove: true,
        asNavFor: ".home-needs-list",
      });
      jQuery(".home-needs-section .home-needs-list").slick({
        slidesToShow: 6,
        asNavFor: ".home-needs-slider-wrapper",
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: false,
        // focusOnSelect: true,
      });
      jQuery(".home-needs-section .home-needs-nav .home-needs-prev").click(
        function () {
          jQuery(this)
            .closest(".home-needs-section")
            .find(".home-needs-slider-wrapper .slick-prev")
            .trigger("click");
        }
      );
      jQuery(".home-needs-section .home-needs-nav .home-needs-next").click(
        function () {
          jQuery(this)
            .closest(".home-needs-section")
            .find(".home-needs-slider-wrapper .slick-next")
            .trigger("click");
        }
      );
      // Update the thumbnail slider when the user changes the main slider directly.
      jQuery(".home-needs-slider-wrapper").on(
        "beforeChange",
        function (e, slider, currentSlide, nextSlide) {
          // Remove aria-current from the last selected thumbnail image button
          jQuery(
            '.home-needs-list .home-needs-text[aria-current="true"]'
          ).removeAttr("aria-current");
  
          // Select the thumbnail image button that goes with this main image. Most importantly, this updates Slick's internal state to be consistent with the visual change.
          jQuery(".home-needs-list").slick("slickGoTo", nextSlide);
  
          // Add aria-current="true" to the correct thumbnail image button to convey to screen readers that it's active.
          jQuery(".home-needs-list .home-needs-text:eq(" + nextSlide + ")").attr(
            "aria-current",
            true
          );
        }
      );
  
      // jQuery('.home-needs-section .home-needs-content .home-needs-list .home-needs-text').on('focus',function(){
      //   
      // });
    }
  
    // home featured slider
    if (jQuery(".home-featured-section").length) {
      jQuery(" .home-featured-section .featured-slider-wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        dots: true,
        arrowsPlacement: "afterSlides",
        responsive: [
          {
            breakpoint: 1540,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    // home learn slider
    if (jQuery(".home-learn .home-learn-slider-wrapper").length) {
      home_learn_slider();
    }
    if (jQuery(".quiz-get-started .quiz-banner.quiz-banner-slider").length) {
      quiz_getstarted_slider();
    }
    // collection banner slider
    if (jQuery(".collection-banner-section").length) {
      jQuery(".collection-banner-section .collection-banner-slider").on(
        "init",
        function () {
          var _this = jQuery(this);
          setTimeout(function () {
            _this
              .find(".slick-dots")
              .detach()
              .appendTo(_this.find(".slick-current .slider-dots"));
          }, 10);
        }
      );
      jQuery(".collection-banner-section .collection-banner-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
      });
  
      jQuery(".collection-banner-section .collection-banner-slider").on(
        "afterChange",
        function () {
          var _this = jQuery(this);
          setTimeout(function () {
            _this
              .find(".slick-dots")
              .detach()
              .appendTo(_this.find(".slick-current .slider-dots"));
          }, 10);
        }
      );
    }
  
    //learn-how video slider
    if (jQuery(".how-to-videos-section").length) {
      jQuery(".how-to-videos-section .video-slider-wrapper").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  
    if (jQuery(".quiz-step-section").length) {
      jQuery(".quiz-row-wrapper .quiz-row-slider").slick({
        arrows: false,
        slidesToShow: 4,
        infinite: false,
        accessibility: true,
        speed: 100,
        touchThreshold: 100,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3.2,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 2.31,
            },
          },
        ],
      });
    }
  
    // custom popup
    jQuery(".custom-popup-link").click(function (e) {
      e.preventDefault();
      var _this_id = jQuery(this).attr("data-popup");
      jQuery("body,html").addClass("overflow-hidden");
      jQuery('.custom-popup[data-modal="' + _this_id + '"]').addClass("show");
      jQuery('.custom-popup[data-modal="' + _this_id + '"]').addClass(
        "tab-focus-none"
      );
      current_focus_element = _this_id;
      setTimeout(function () {
        jQuery('.custom-popup[data-modal="' + _this_id + '"]').addClass(
          "popup-open"
        );
      }, 100);
    });
  
    jQuery(
      ".custom-popup .popup-dialog-wrapper,.custom-popup .close-popup, .custom-popup .cancel-link"
    ).click(function () {
      jQuery("body,html").removeClass("overflow-hidden");
      jQuery(".custom-popup").removeClass("popup-open");
      if (jQuery(this).closest(".custom-popup").hasClass("video-popup")) {
        var _this_src = jQuery(this)
          .closest(".custom-popup")
          .find("iframe")
          .attr("src");
        jQuery(this).closest(".custom-popup").find("iframe").attr("src", "");
        jQuery(this)
          .closest(".custom-popup")
          .find("iframe")
          .attr("src", _this_src);
      }
      setTimeout(function () {
        jQuery(".custom-popup").removeClass("show");
        jQuery(
          '.custom-popup-link[data-popup="' + current_focus_element + '"]'
        ).focus();
      }, 500);
    });
  
    jQuery(".custom-popup .popup-dialog").click(function (e) {
      e.stopPropagation();
    });
  
    // filter sidebar
    jQuery(
      ".filter-sidebar-wrapper .filter-sidebar-list .filter-sidebar-list-item .list-heading .filter-name"
    ).click(function (e) {
      e.preventDefault();
      jQuery(this).closest(".filter-sidebar-list-item").toggleClass("active");
      jQuery(this)
        .closest(".filter-sidebar-list-item")
        .find(".list-content")
        .stop(true, true)
        .slideToggle();
    });
    jQuery(
      ".collection-shop-section .collection-grid-wrapper .filter-btn-mble"
    ).click(function () {
      jQuery("body,html").addClass("filter-overflow-hidden");
      jQuery(".filter-sidebar-wrapper").addClass("filter-open");
    });
  
    jQuery(
      ".collection-shop-section .collection-grid-wrapper .filter-sidebar-wrapper .filter-close-btn"
    ).click(function () {
      jQuery("body,html").removeClass("filter-overflow-hidden");
      jQuery(".filter-sidebar-wrapper").removeClass("filter-open");
    });
  
    jQuery(".megamenu-menu .has-inner-children .sub-menu-arrow")
      .unbind("click")
      .click(function (e) {
        e.preventDefault();
        if (jQuery(this).parent().hasClass("active-list")) {
          jQuery(this).parent().removeClass("active-list");
          jQuery(this)
            .parent()
            .children(".inner-submenu-wrapper")
            .removeClass("active-list");
          jQuery(this)
            .parent()
            .children(".inner-submenu-wrapper")
            .slideUp("fast");
          if (jQuery(this).parent().find(".has-inner-submenu").length) {
            jQuery(this)
              .parent()
              .find(".has-inner-submenu")
              .removeClass("active-list");
            jQuery(this)
              .parent()
              .find(".inner-submenu-listing")
              .removeClass("active-list");
            jQuery(this).parent().find(".inner-submenu-listing").slideUp("fast");
          }
        } else {
          jQuery(this).parent().addClass("active-list");
          jQuery(this)
            .parent()
            .find(".inner-submenu-wrapper")
            .stop(true, true)
            .slideDown("fast")
            .addClass("active-list");
          jQuery(this)
            .parent()
            .siblings()
            .find(".inner-submenu-wrapper")
            .slideUp("fast")
            .removeClass("active-list");
          jQuery(this).parent().siblings().removeClass("active-list");
        }
      });
    jQuery(".megamenu-menu .has-inner-submenu .sub-menu-arrow")
      .unbind("click")
      .click(function (e) {
        e.preventDefault();
        if (jQuery(this).parent().hasClass("active-list")) {
          jQuery(this).parent().removeClass("active-list");
          jQuery(this)
            .parent()
            .children(".inner-submenu-listing")
            .removeClass("active-list");
          jQuery(this)
            .parent()
            .children(".inner-submenu-listing")
            .slideUp("fast");
        } else {
          jQuery(this).parent().addClass("active-list");
          jQuery(this)
            .parent()
            .find(".inner-submenu-listing")
            .stop(true, true)
            .slideDown("fast")
            .addClass("active-list");
          jQuery(this)
            .parent()
            .siblings()
            .find(".inner-submenu-listing")
            .slideUp("fast")
            .removeClass("active-list");
          jQuery(this).parent().siblings().removeClass("active-list");
        }
      });
    //search bar functionality
    jQuery(".header-search-form .search__input").on("focusin", function () {
      jQuery(this).closest(".header-search-wrapper").addClass("open");
    });
    jQuery(".header-search-wrapper .header-search-submit").focusout(function () {
      jQuery(this).closest(".header-search-wrapper").removeClass("open");
    });
    jQuery(".header-search-wrapper .header-search-icon .search-button").on(
      "click",
      function () {
        jQuery(this).closest(".header-search-wrapper").addClass("open");
      }
    );
    jQuery(".header-search-wrapper .header-search-result-overlay").on(
      "click",
      function () {
        jQuery(this).closest(".header-search-wrapper").removeClass("open");
      }
    );
    jQuery(".header-search-wrapper .form-close-icon").on("click", function () {
      jQuery(this).closest(".header-search-wrapper").removeClass("open");
    });
  
    jQuery(window).scroll(function () {
      var topPos = jQuery(this).scrollTop();
      if (topPos > 200) {
        jQuery(".footer-totop-link").addClass("show");
      } else {
        jQuery(".footer-totop-link").removeClass("show");
      }
    });
  
    jQuery(".footer-totop-link").click(function () {
      jQuery("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  
    jQuery(".footer-nav-title").click(function () {
      jQuery(this).toggleClass("open");
      jQuery(this).siblings(".footer-slidedown").slideToggle(200);
    });
    var current_focus_element;
    jQuery(window).bind("keydown", function (e) {
      // SPACE key
      // if (e.keyCode == 32) {
      //   e.preventDefault();
      //   jQuery(
      //     ".productpage-content .custom-radiobtn-wrapper .custom-radiobtn-grp"
      //   ).each(function () {
      //     var _this = jQuery(this);
      //     if (_this.is(":focus")) {
      //       _this.find("input").click();
      //     }
      //   });
      // }
      if (e.keyCode == "9") {
        if (jQuery(".custom-popup.tab-focus-none").hasClass("show")) {
          jQuery(".custom-popup-link").blur();
          setTimeout(function () {
            jQuery(".custom-popup .close-popup").focus();
          }, 10);
          jQuery(".custom-popup").removeClass("tab-focus-none");
        }
      }
    });
  });
  jQuery(window).on("load", function () {
    // $('.brands-slider-section .brands-slider-wrapper .brands-slider').css('position','relative');
    // $('.brands-slider-section .brands-slider-wrapper .brands-slider').css('display','block');
  
    setTimeout(function () {
      equalHeights();
      // to rearrange buttons on cart drawer
      if (jQuery(".hs-popup-cart-sp-load").length) {
        jQuery(
          ".hs-footer-layout form .hs-finalize-purchase .hs-continue-shopping"
        ).appendTo(
          ".hs-footer-layout form .hs-finalize-purchase .hs-content-buttons"
        );
      }
    
    }, 1000);
  });
  jQuery(window).resize(function () {
    swatches_count();
    setTimeout(function () {
      equalHeights();
      headerResponsive();
      mobileMenu();
      if (jQuery(".home-learn .home-learn-slider-wrapper").length) {
        home_learn_slider();
      }
      if (jQuery(".quiz-get-started .quiz-banner.quiz-banner-slider").length) {
        quiz_getstarted_slider();
      }
    }, 500);
  });
  jQuery(window).scroll(function () {
    stickyHeader();
  });
  jQuery(document).on("keyup", function (e) {
    if (e.key == "Escape") {
      jQuery(".header .header-search-wrapper").removeClass("open");
    }
  });
  