// second navbar

$('#sec-icon').click(function (e) { 
  $('#sec-nav').toggleClass('sec-nav-active');
  $('#sec-items').toggleClass('show');
});
$('#sec-search-icon').click(function (e) { 
  $('#sec-nav').toggleClass('sec-nav-active');
  $('#sec-search').toggleClass('search-active');
});

$('#close-btn').click(function (e) { 
  $('#sec-items').toggleClass('show');
  $('#sec-nav').toggleClass('sec-nav-active');
});
function closeSearch() { 
  $('#sec-search').toggleClass('search-active');
  $('#sec-nav').toggleClass('sec-nav-active');
};

$('#sec-nav').click(function (e) { 
  if (e.target.id == "sec-nav" || e.target.id == "sec-search" ) {
    $('#sec-search').removeClass('search-active');
    $('#sec-items').removeClass('show');
    $('#sec-nav').removeClass('sec-nav-active');
  }
});


function show(e){
  $(e).toggleClass('active');
  console.log('called');
}



// swipers

//first slider
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 4000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
//products slider
var mySwiper = new Swiper('.s-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 6,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 6,
        spaceBetween: 10
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      // when window width is >= 480px
      782: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 250px
      150: {
        slidesPerView: 1,
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


