import get_template from '../../get_template.js'

export default {
  data: function () {
    return {
      title: "home"
    }

  },
 
 
  async mounted() {
   
    var swiper = new Swiper(".slide-dominio", {
      slidesPerView: 4,
      spaceBetween: 20,
      sliderPerGroup: 4,
      loop: true,
      centerSlide: "true",
      fade: "true",
      grabCursor: "true",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
      },
    });

},

  template: await get_template('./assets/js/components/jls/planos/dominio')
}