import get_template from '../../components/get_template.js'
 
export default {
  data: function () {
    return {
      qdd: 3,
      awesome: true,

      productos: [
        {
          "id": 1,
          "name": " PIMENTO AMARELO 500G DA HORTA",
          "categoria": "Fruta e Legumes",
          "price": 200,
          "image": "./assets/img/produtos/tangerina.png",
          "description": " PIMENTO AMARELO 500G DA HORTA"
        },
        {
          "id": 2,
          "name": "TANGERINA NACIONAL 600G DA HORTA",
          "categoria": "Fruta e Legumes",
          "price": 250,
          "image": "./assets/img/produtos/pimenta.png",
          "description": "TANGERINA NACIONAL 600G DA HORTA"
        },
        {
          "id": 3,
          "name": " PERA IMPORTADA 1KG",
          "categoria": "Fruta e Legumes",
          "price": 4699,
          "image": "./assets/img/produtos/import.png",
          "description": "PERA IMPORTADA 1KG"
        },
        {
          "id": 4,
          "name": "LIMÃO NACIONAL 1KG DA HORTA",
          "categoria": "Fruta e Legumes",
          "price": 299,
          "image": "./assets/img/produtos/limao.png",
          "description": "LIMÃO NACIONAL 1KG DA HORTA"
        },
        {
          "id": 5,
          "name": " UVA CHARDONNAY IMPORTADA 500G AVO PEDRO",
          "categoria": "Fruta e Legumes",
          "price": 300,
          "image": "./assets/img/produtos/grapes.png",
          "description": " UVA CHARDONNAY IMPORTADA 500G AVO PEDRO"
        },
        {
          "id": 6,
          "name": "LARANJA NACIONAL 1,2KG DA HORTA",
          "categoria": "Fruta e Legumes",
          "price": 3699,
          "image": "./assets/img/produtos/laranja.png",
          "description": "LARANJA IMPORTADA 1KG"
        },
        {
          "id": 7,
          "name": " LARANJA IMPORTADA 1KG",
          "categoria": "Fruta e Legumes",
          "price": 5499,
          "image": "./assets/img/produtos/laranja_import2.png",
          "description": "LARANJA IMPORTADA 1KG"
        },
        {
          "id": 8,
          "name": "ALHO IMPORTADO 250G AVO PEDRO",
          "categoria": "Fruta e Legumes",
          "price": 200,
          "image": "./assets/img/produtos/alho.png",
          "description": "ALHO IMPORTADO 250G AVO PEDRO"
        },
        {
          "id": 9,
          "name": "BATATA 1KG GIRASSOL",
          "categoria": "Fruta e Legumes",
          "price": 2199,
          "image": "./assets/img/produtos/alho.png",
          "description": "BATATA 1KG GIRASSOL"
        },
        {
          "id": 10,
          "name": "BATATA DOCE 1KG GIRASSOL",
          "categoria": "Fruta e Legumes",
          "price": 2199,
          "image": "./assets/img/produtos/doce.png",
          "description": "BATATA DOCE 1KG GIRASSOL"
        }
    

      ]
    }

  },

  methods: {

  },

  async mounted() {


    var swiper = new Swiper(".mySwiper", {

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
          slidesPerView: 2,
        },
        520: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 5,
        },
      },
    });



  },
  template: await get_template('./assets/js/view/categoria/home')
}
