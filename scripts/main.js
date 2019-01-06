
// TODO:My slider with swiper.js lets begin!!!!
window.addEventListener('load', function() {
  var swiper = new Swiper('.swiper-container', {
    
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    
    },
  });
  var mySwiper = document.querySelector('.swiper-container').swiper;
  mySwiper.height;
})
 