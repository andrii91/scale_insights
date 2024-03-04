$( document ).ready(function() {
  $('.scroll').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 90
    }, 700);

  });


  function counter(id, start, end, duration) {
    var objId = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        objId.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  $('.animation-number').viewportChecker({
    classToAdd: 'visible',
    offset: '0%',
    repeat: false, 
    callbackFunction: function(elem, action){
      counter("num_1", 0, 12, 1050);
      counter("num_2", 0, 100, 1050);
    },
  });

  const checkbox = document.querySelector('input[name=mode]');

  $('input[name=mode]').change(function() {
    if($(this).is(':checked')) {
      document.documentElement.setAttribute('data-theme', 'dark')
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  });


  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('input[name=mode]').each(function() {
      $(this).prop('checked', true); 
    });

    document.documentElement.setAttribute('data-theme', 'dark')

  } else {
    $('input[name=mode]').each(function() {
      $(this).prop('checked', false);
    });

    document.documentElement.setAttribute('data-theme', 'light')
  }

  if ($(window).scrollTop() > 0) {
    $('.nav').addClass("fixed");
  }

  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.custom-video-play').click(function(e){
    e.preventDefault();
   
    const video = document.getElementById($(this).parents('.custom-video').find('video').attr('id'));
    video.play();
    $(video).attr('controls', 'controls')
    $(this).hide()
  })

  $('.fade-in-up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp', 
    offset: '50%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });

  $('.fade-in-up-0, .section-banner-small').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp', 
    offset: '5%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });

  $('.profit-img').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp', 
    offset: '0%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });

  $('.head-bottom-border, .contact-us').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp', 
    offset: '20%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });

  $('.fade-in').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeIn', 
    offset: '20%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });

  $('.fade-in-right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight', 
    offset: '50%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });

  $('.fade-in-left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInLeft', 
    offset: '0%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation"
  });

  $('.head-bottom-item').addClass("hidden_animation")
  $('.head-bottom').viewportChecker({
    offset: '0%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation",
    callbackFunction: function(elem, action){
      $('.show-1').removeClass("hidden_animation").addClass('visible animated fadeIn');
      setTimeout(function(){
        $('.show-2').removeClass("hidden_animation").addClass('visible animated fadeIn');
      },300)

      setTimeout(function(){
        $('.show-3').removeClass("hidden_animation").addClass('visible animated fadeIn');
      },600)
    }
  });

  $('.strategies-graph-text, .strategies-info-item').addClass("hidden_animation")
  $('.strategies-graph').viewportChecker({
    classToAdd: 'visible animated', 
    offset: '10%',
    classToRemove: "hidden_animation",
    callbackFunction: function(elem, action){

      $('.strategies-graph-row').addClass('visible animated');

      setTimeout(function(){
        $('.strategies-graph-text').removeClass("hidden_animation").addClass('visible animated fadeIn')
        $('.strategies-info-item:nth-child(1)').removeClass("hidden_animation").addClass('visible animated fadeInUp')
        $('.strategies-info-item:nth-child(2)').removeClass("hidden_animation").addClass('visible animated fadeInUp')
        $('.strategies-info-item:nth-child(3)').removeClass("hidden_animation").addClass('visible animated fadeInUp')
      }, 1000)
    },
  });

  $('.metrics-graphs-table').addClass("hidden_animation")
  $('.metrics-img-height').viewportChecker({
    offset: '40%',
    removeClassAfterAnimation: true,
    classToRemove: "hidden_animation",
    callbackFunction: function(elem, action){
     $('.metrics-graphs').addClass('visible');
     setTimeout(function() {
      $('.metrics-graphs-table').removeClass("hidden_animation").addClass('visible animated fadeInUp')
     }, 600)
    },
  });

  $('.automation-image-animation-border, .automation-image-animation-line-text, .automation-image-animation-title').addClass("hidden_animation")
  $('.automation-image-animation-svg').viewportChecker({
    classToAdd: 'visible animated', 
    offset: '40%',
    classToRemove: "hidden_animation",
    callbackFunction: function(elem, action){
     setTimeout(function() {
      $('.automation-image-animation-line-text').removeClass("hidden_animation").addClass('visible animated fadeIn')
     }, 900)

     setTimeout(function() {
      $('.automation-image-animation-border').removeClass("hidden_animation").addClass('visible animated fadeIn')
     }, 1300)

     setTimeout(function() {
      $('.automation-image-animation-title').removeClass("hidden_animation").addClass('visible animated fadeIn')
     }, 1900)

    },
  });

  $(`.campaigns-image-animation-item-text, 
  .campaigns-image-animation-title, 
  .campaigns-image-animation-border, 
  .campaigns-image-animation-text-first`).addClass("hidden_animation");

  $('.campaigns-image-animation-svg').viewportChecker({
    classToAdd: 'visible animated', 
    offset: '40%',
    classToRemove: "hidden_animation",
    callbackFunction: function(elem, action){
     setTimeout(function() {
      $('.campaigns-image-animation-item-text').removeClass("hidden_animation").addClass('visible animated fadeIn')
      $('.campaigns-image-animation-text-first').removeClass("hidden_animation").addClass('visible animated fadeIn')
     }, 900)

     setTimeout(function() {
      $('.campaigns-image-animation-border').removeClass("hidden_animation").addClass('visible animated fadeIn')
     }, 1300)

     setTimeout(function() {
      $('.campaigns-image-animation-title').removeClass("hidden_animation").addClass('visible animated fadeIn')
     }, 1900)

    },
  });
  

  $('.automation-slider').slick({
		rows: 3,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
    ]
  });

  // Tabs

  $('.tabs-nav li').click(function(){
    $(this).parents('.tabs').find('.tabs-nav li').removeClass('active');
    $(this).addClass('active')

    $(this).parents('.tabs').find('.tabs-item').removeClass('active');
    $(this).parents('.tabs').find(`#${$(this).data('tab')}`).addClass('active');
  })
  // end Tabs


  // change price type

  $('#checkbox-price').change(function(){
    $('.price-item-summ>div').removeClass('active');

    if($(this).is(':checked')) {
      $('.price-item-summ .monthly').addClass('active');
    }else{
      $('.price-item-summ .yearly').addClass('active');
    }
  })

  $('.custom-checkbox-yearly').click(function(){
    if($('#checkbox-price').is(':checked')) {
      $('#checkbox-price').trigger('click');
    }
  })

  $('.custom-checkbox-monthly').click(function(){
    if(!$('#checkbox-price').is(':checked')) {
      $('#checkbox-price').trigger('click');
    }
  })

  // end change price type


  $('.reviews-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
    prevArrow:`<div class='slick-prev'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M4.24807 11.4072C3.65433 11.0114 3.65433 10.139 4.24807 9.74314L13.4453 3.61165C14.1099 3.16862 15 3.64501 15 4.4437L15 16.7067C15 17.5054 14.1099 17.9818 13.4453 17.5387L4.24807 11.4072Z" fill="currentColor"/></svg></div>`,
    nextArrow:`<div class='slick-next'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M16.7519 9.74314C17.3457 10.139 17.3457 11.0114 16.7519 11.4072L7.5547 17.5387C6.89014 17.9818 6 17.5054 6 16.7067L6 4.44371C6 3.64502 6.89015 3.16863 7.5547 3.61166L16.7519 9.74314Z" fill="currentColor"/></svg></div>`,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });


  //FAQ
  $('.faq-item').click(function(e){
    e.preventDefault();

    $(this).find('.faq-item-title').toggleClass('active');
    $(this).find('.faq-item-info').slideToggle(200);
  })

  //mob menu
  $('.mob-btn').click(function(e){
    e.preventDefault();
    var nav = $(this).parents('.nav');
    var menu = nav.find('.menu');
  
    $(this).toggleClass('active');
    nav.toggleClass('open');
    menu.toggle(200, function() {
      if (menu.is(':visible')) {
        menu.css('display', 'flex');
      }
    });
  });

  $('.strategies-slider, .tabs-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  var slider = $('.price-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: true,
		arrows: true,
    infinite: true,
    prevArrow:`<div class='transparent-prev'></div>`,
    nextArrow:`<div class='transparent-next'></div>`,
  });

  function checkWindowSize() {
    var windowWidth = $(window).width();

    if (windowWidth < 992) { 
      if (!slider.hasClass('slick-initialized')) {
        slider.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          dots: true,
          arrows: true,
          infinite: true,
          prevArrow:`<div class='transparent-prev'></div>`,
          nextArrow:`<div class='transparent-next'></div>`,
        });
      }

      $('.about-us-item').removeClass('active')


      //about us

      $('.about-us-item-card').click(function(){
        const windowWidth = $(window).width();

        $('.about-us-item').removeClass('active');
        const $this = $(this).parents();
        $this.addClass('active');
       
        if (windowWidth < 992) {
          const top = $this.offset().top;

          $('body,html').animate({
            scrollTop: top - 90
          }, 0);
        }
        
      })
    } else {
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }

      $('.about-us-item:first-child').addClass('active');

      $('.about-us-item').addClass("hidden_animation")
      $('.about-us-row').viewportChecker({
        offset: '0%',
        removeClassAfterAnimation: true,
        classToRemove: "hidden_animation",
        callbackFunction: function(elem, action){
    
          for (let index = 1; index <= $('.about-us-item').length; index++) {
            setTimeout(function(){
              $(`.about-us-item:nth-child(${index})`).removeClass("hidden_animation").addClass('visible animated fadeIn');
    
              setTimeout(function(){
                $(`.about-us-item:nth-child(${index})`).removeClass('visible animated fadeIn')
              }, 1000)
            }, (200*index))
          }
        }
      });


  //about us

  $('.about-us-item-card').hover(function(){
    const windowWidth = $(window).width();

    $('.about-us-item').removeClass('active');
    const $this = $(this).parents();
    $this.addClass('active');
    $this.parents('.about-us-row').css({
      "padding-bottom": $this.find('.about-us-item-content').height() + 108
    })

    if (windowWidth < 992) {
      const top = $this.offset().top;

      $('body,html').animate({
        scrollTop: top - 90
      }, 0);
    }
    
  })
    }
  }

  checkWindowSize();
  $(window).resize(checkWindowSize);

  // modal

  $('[data-modal]').click(function (e) {
    e.preventDefault();
    const modal = $(this).data('modal');
    $('body').addClass('overflow-hidden')
    $(modal).addClass('show');
  })

  $('.modal .close').click(function () {
    var $this = $(this);
    $this.parents('.modal').removeClass('show');
    $('body').removeClass('overflow-hidden')
  })

  $(document).mouseup(function (e) {
    var container = $(".modal-dialog");
    if (container.has(e.target).length === 0) {
      container.parents('.modal').removeClass('show');
      $('body').removeClass('overflow-hidden');
    }
  });

  $(document).keydown(function (e) {
    // ESCAPE key pressed 
    if (e.keyCode == 27) {
      $('.modal').removeClass('show');
      $('body').removeClass('overflow-hidden');
    }
  })
  // end modal


  //

  $('[data-id]').click(function(){
    $(this).parents('.section').find('[data-id]').removeClass('active');
    $(this).parents('.section').find('[data-ids-row]>div').removeClass('active');

    $(this).addClass('active');
    $(`#${$(this).data('id')}`).addClass('active')
  })

  
}) 


