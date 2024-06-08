import get_template from '../../components/get_template.js'
 

export default {
 

  data: function () {
    return {
      title: "home"
    }

  },

  methods: {

  },

  async mounted() {

    var swiper = new Swiper(".slider_flayer", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },

  template: await get_template('./assets/js/view/home/home')
}