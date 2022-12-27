'use strict';
{
  new WOW().init();

  //drawer//
  jQuery('.header__sp__right').click(function () {
    jQuery('.header__sp__right').addClass('is-active');
    jQuery('.drawer-content').addClass('is-active');
    jQuery('.drawer-close__button').addClass('is-active');
    jQuery('.drawer-background').addClass('is-active');
    return false;
  });
  jQuery('.drawer-close__button').click(function () {
    jQuery('.header__sp__right').removeClass('is-active');
    jQuery('.drawer-content').removeClass('is-active');
    jQuery('.drawer-close__button').removeClass('is-active');
    jQuery('.drawer-background').removeClass('is-active');
    return false;
  });

  //To top button
  jQuery(window).on('scroll', function () {
    if (100 < jQuery(this).scrollTop()) {
      jQuery('.footer_totop').addClass('is-show')
    }
    else {
      jQuery('.footer_totop').removeClass('is-show')
    }
  });

  //header link
  jQuery('a[href^="#"]').click(function () {
    console.log('hello');
    let header = jQuery('#header').innerHeight();
    let id = jQuery(this).attr('href');
    let position = 0;
    if (id != '#') {
      position = jQuery(id).offset().top - header;
    }
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      300);
  });

  //faqのアコーディオン
  jQuery('.faq__question').click(function () {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.faq__question__icon').toggleClass('is-open');
  });

//contact form check//
$(document).ready(function () {
  let $submit = $( '#js-submit' );
  $( '#js-form input, #js-form textarea' ).on( 'change', function() {
    if(
      $( '#js-form input[type="text"]' ).val() !== "" &&
      $( '#js-form input[type="email"]' ).val() !== "" &&
      $( '#js-form input[name="checkbox__name"]' ).prop( 'checked' ) === true
      ){
        //全て入力されたとき
        $submit.prop( 'disabled', false)
        $submit.addClass( 'active')
      } else {
        //入力されていないとき
        $submit.prop( 'disabled', true)
        $submit.removeClass( 'active')
      }
  });
  });


  //swiper//
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView:'auto'/* スライド数の指示*/,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });
}
