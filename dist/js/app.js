$( document ).ready(function() {
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
      counter("num_1", 0, 12, 1500);
      counter("num_2", 0, 100, 1500);
    },
  });

  const checkbox = document.querySelector('input[name=mode]');

  checkbox.addEventListener('change', function() {
      if(this.checked) {
          trans()
          document.documentElement.setAttribute('data-theme', 'dark')
      } else {
          trans()
          document.documentElement.setAttribute('data-theme', 'light')
      }
  })

  let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
          document.documentElement.classList.remove('transition');
      }, 1000)
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('input[name=mode]').each(function() {
      $(this).prop('checked', true); 
    });

    trans()
    document.documentElement.setAttribute('data-theme', 'dark')

  } else {
    $('input[name=mode]').each(function() {
      $(this).prop('checked', false);
    });

    trans()
    document.documentElement.setAttribute('data-theme', 'light')
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


  $('.tabs-nav li').click(function(){
    $(this).parents('.tabs').find('.tabs-nav li').removeClass('active');
    $(this).addClass('active')

    $(this).parents('.tabs').find('.tabs-item').removeClass('active');
    $(this).parents('.tabs').find(`#${$(this).data('tab')}`).addClass('active');
  })


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
      }
    ]
});

}) 


