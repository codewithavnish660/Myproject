$(document).ready(function () {

  // calculate pop value on document load
  var percentage = Math.round((($('#txtCalaPOP').val() * 30) / 100));
  var toatamt = $('#txtCalaPOP').val() * 6;
  $('#totalInvest').html("&#8377;" + toatamt);
  $('#totalInvget').html("&#8377;" + percentage);
  $('#calcGetInv').html("&#8377;" + percentage);
  $('#calcTotalInv').html("&#8377;" + toatamt);
  $('#totalinvalue').html("&#8377;" + (percentage + toatamt));

  // calculate pop
  $('#btnCalcPOP').click(function () {
    $(".pre_loader").css("display", "flex");
    setTimeout(function () {
      $('.pre_loader').hide();
    }, 2000);
    percentage = Math.round((($('#txtCalaPOP').val() * 30) / 100));
    toatamt = $('#txtCalaPOP').val() * 6;
    $('#totalInvest').html("&#8377;" + toatamt);
    $('#totalInvget').html("&#8377;" + percentage);
    $('#calcGetInv').html("&#8377;" + percentage);
    $('#calcTotalInv').html("&#8377;" + toatamt);
    $('#totalinvalue').html("&#8377;" + (percentage + toatamt));
  });

  // calcTotalInv
  // calcGetInv


  // terms slider
  $('#gemscare').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $(".gems_prev"),
    nextArrow: $(".gems_next")
  });

  // jewellery_guide
  $('#metal_Content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'cubic-bezier(1, 0, 0.6, 1.5)',
  });
  $('#jwr_slide1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    pauseOnHover: false,
    cssEase: 'linear'
  });
  $('#jwr_slide2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    pauseOnHover: false,
    cssEase: 'linear'
  });
  $('#jwr_slide3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    pauseOnHover: false,
    cssEase: 'linear'
  });




  $("#similar_pro").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow: $(".slick_prev"),
    nextArrow: $(".slick_next"),
  });

  $("#product_type").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow: $("#protype_prev"),
    nextArrow: $("#protype_next"),
  });

  $("#shop_by_insta").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  });
  $("#affiliation").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  });

  // $("#home_slider").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   dots: false,
  //   fade: true,
  //   prevArrow: $(".prev_anchor"),
  //   nextArrow: $(".next_anchor"),
  // });

  // $("#similar_pro_index").slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   dots: false,
  //   prevArrow: $(".slick_prev"),
  //   nextArrow: $(".slick_next"),
  // });
  // $("#testimonials").slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   dots: false,
  //   prevArrow: $(".slick_prev"),
  //   nextArrow: $(".slick_next"),
  // });




});





//====================testimonials-slider====================//

var swiper = new Swiper(".mySwiper_two", {
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});



/*============second_slider===========*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});



