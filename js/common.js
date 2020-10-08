$(function () {
  $('.header__sroll-btn').on('click', function () {
    $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: $(this).offset().top + 10
    }, 1200);
  });

  $('.footer__bot-btn').on('click', function () {
    var scrolledElem = $(this).attr('href');
    var elem = $(scrolledElem).offset().top;
    $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: elem
    }, 1600);
  });

  $('.logo__link').on('click', function() {
    var scrolledElem = $(this).attr('href');
    var elem = $(scrolledElem).offset().top;
    $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: elem
    }, 1600);
  });

  $('.portfolion__nav-item').on('click', function () {
    $('.portfolion__nav-item').removeClass('active');
    $(this).addClass('active');
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= $('.footer').offset().top - $('.footer').height()) {
      $('.footer__bot-btn').addClass('active');
    } else {
      $('.footer__bot-btn').removeClass('active');
    }
    
    if ($('.info').offset().top - $(window).scrollTop() - (window.innerHeight - $('.footer').height()) <= 0 && scroll) {
      scroll = false;
      $('.info__title-conunt').each(function () {
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });

  $('.menu__btn').on('click', function() {
    $('.wrapper__menu').toggleClass('active');
    $('.wrapper__content').toggleClass('active');
    $('.wrapper__menu-wrapper').toggleClass('active');
    $('body').toggleClass('active');
    $('.menu__bnt-top').toggleClass('active');
    $('.menu__bnt-mid').toggleClass('active');
    $('.menu__bnt-bot').toggleClass('active');
  });

  function fixMenu() {
    if ($(window).width() > 1024) {
      $('.wrapper__menu-wrapper').removeClass('active');
      $('.wrapper__content').removeClass('active');
      $('.wrapper__menu').removeClass('active');
      $('.menu__bnt-top').removeClass('active');
      $('.menu__bnt-mid').removeClass('active');
      $('.menu__bnt-bot').removeClass('active');
      $('body').removeClass('active');
    }
  }

  $(window).on('resize', fixMenu);
  $(window).on('load', fixMenu);


  function showMemu() {
    if ($(window).scrollTop() >= $('.header__top').height()) {
      $('.header__top').addClass('hide');
    } else {
      $('.header__top').removeClass('hide');
    }
    
    if ($(window).scrollTop() >= ($('.header').height() - ($('.header__top').height() + 20))) {
      $('.header__top').addClass('fixed');
      $('.wrapper__menu').addClass('fixed');
      $('.header__top').removeClass('hide');
    } else {
      $('.header__top').removeClass('fixed');
      $('.wrapper__menu').removeClass('fixed');
    }
  }
  
  $(window).on('scroll', showMemu);
  $(window).on('load', showMemu);
  $(window).on('resize', showMemu);

  $('.header__menu-link, .menu__list-link').on('click', function() {
    $('.header__menu-link, .menu__list-link').removeClass('active');
    $(this).addClass('active');
  });

  $('.header__menu-link, .menu__list-link').on('click', function() {
    $('.wrapper__menu-wrapper').removeClass('active');
    $('.wrapper__content').removeClass('active');
    $('.wrapper__menu').removeClass('active');
    $('.menu__bnt-top').removeClass('active');
    $('.menu__bnt-mid').removeClass('active');
    $('.menu__bnt-bot').removeClass('active');
    $('body').removeClass('active');
    
    var idElem = $(this).attr('href');
    var elemToScroll = $(idElem);
    var coords = elemToScroll.offset().top;
    $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: coords - parseInt(elemToScroll.css('paddingTop')) / 2
    }, 1600);
  });

  function activeMenu() {
    var hash = location.href.slice(location.href.indexOf('#'));
    $('.header__menu-link[href="' + hash + '"], .menu__list-link[href="' + hash + '"]').addClass('active');
  }

  $(window).on('load', activeMenu);
  $(window).on('resize', activeMenu);

  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    $('.header__menu-link, .menu__list-link').each(function() {
      var elemId = $(this).attr('href');
      var target = $(elemId);
      if (scrollTop >= target.offset().top - $('.header__top').height() && scrollTop <  target.offset().top + target.height() - $('.header__top').height()) {
        $('.header__menu-link').removeClass('active');
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });

  $('.wrapper__menu-wrapper').on('click', function() {
    $(this).removeClass('active');
    $('.wrapper__content').removeClass('active');
    $('.wrapper__menu').removeClass('active');
    $('.menu__bnt-top').removeClass('active');
    $('.menu__bnt-mid').removeClass('active');
    $('.menu__bnt-bot').removeClass('active');
    $('body').removeClass('active');
  });
  
  /* Sliders */

  $('.header__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    pauseOnDotsHover: false,
    pauseOnFocus: true
  });

  $('.services__slider').slick({
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    pauseOnDotsHover: false,
  });

  $('.study__content-slider').slick({
    arrows: false,
    dots: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    asNavFor: '.study__photo-slider'
  });

  $('.study__photo-slider').slick({
    fade: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    asNavFor: '.study__content-slider'
  });
});