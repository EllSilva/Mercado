import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "home"
        } 
        
    },

    methods:{
         
    },

    async mounted() {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 20,
        sliderPerGroup: 6,
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
            slidesPerView: 3,
          },
          520: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 6,
          },
        },
      });

 
   
    },
    template: await get_template('./assets/js/view/categoria/home')
}
 