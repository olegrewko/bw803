const swiper = new Swiper('.slider-block', {
    slidesPerView: 1,
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const sliderNavItems = document.querySelectoAll('.slider-nav__item');
  sliderNavItems.forEach((el, index)=> {
    el.setAttribute('data-index', index);
  })

  