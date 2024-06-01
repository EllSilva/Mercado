import get_template from '../../components/get_template.js'


export default {


  data: function () {
    return {
      title: "home",

      categoria: [
        {
          "id": 1,
          "name": "CONGELADOS",
          "image": "./assets/img/categoria/congelado.png"
        },
        {
          "id": 2,
          "name": "ARROZ & MASSA",
          "image": "./assets/img/categoria/arroz.png"
        },
        {
          "id": 3,
          "name": "LATAS E FRASCOS",
          "image": "./assets/img/categoria/latas.png"
        },
        {
          "id": 4,
          "name": "FRUTAS & LEGUMES",
          "image": "./assets/img/categoria/frutas.png"
        },
        {
          "id": 5,
          "name": "PASTELARIA & DOÇARIA",
          "image": "./assets/img/categoria/pastelaria.png"
        },
        {
          "id": 6,
          "name": "LACTICÍNIOS E OVOS",
          "image": "./assets/img/categoria/laticinio.png"
        },
        {
          "id": 7,
          "name": "SAUDÁVEL",
          "image": "./assets/img/categoria/saudavel.png",
        },
        {
          "id": 8,
          "name": "PADARIA",
          "image": "./assets/img/categoria/padaria.png"
        },
        {
          "id": 9,
          "name": "MOLHOS & CONDIMENTOS",
          "image": "./assets/img/categoria/molhos.png"
        },
        {
          "id": 10,
          "name": "ÁLCOOL",
          "image": "./assets/img/categoria/alcol.png"
        },
        {
          "id": 11,
          "name": "BEBIDAS",
          "image": "./assets/img/categoria/bebida.png"
        },
        {
          "id": 12,
          "name": "HIGIENE",
          "image": "./assets/img/categoria/higiene.png"
        },
        {
          "id": 13,
          "name": "BEBÉ",
          "image": "./assets/img/categoria/bebe.png"
        },
        {
          "id": 14,
          "name": "CASA",
          "image": "./assets/img/categoria/casa.png"
        },
        {
          "id": 13,
          "name": "ELETRODOMÉSTICOS",
          "image": "./assets/img/categoria/eletrodomestico.png"
        },
        {
          "id": 14,
          "name": "ELECTRÓNICA",
          "image": "./assets/img/categoria/eletronica.png"
        }
      ]
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