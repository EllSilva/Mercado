import get_template from '../../components/get_template.js' 
  

export default {
  data: function () {
    return {
      title: "home"
    }
  },

 
  async mounted() {
    
    var swiper = new Swiper(".slide-principal", {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 12500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
  },
  template: await get_template('./assets/js/components/jls/slider_principal')
}