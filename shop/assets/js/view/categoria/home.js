import get_template from '../../components/get_template.js'
import Router from '../../vendor/vue-router.js'
export default {
  data: function () {
    return {
      cats: [],
      newCat: null,

      task: "",
      editedTask: null,

      codigo: '',
      qdd: 1,
      awesome: true,

      productos: [
        {
          "id": 1,
          "qdd": 1,
          "name": "TANGERINA NACIONAL 600G DA HORTA",
          "categoria": "Fruta e Legumes",
          "price": 200,
          "image": "./assets/img/produtos/tangerina.png",
          "description": "TANGERINA NACIONAL 600G DA HORTA"
        },
        {
          "id": 2,
          "qdd": 1,
          "name": "PIMENTO AMARELO 500G DA HORTA",
          "categoria": "Fruta e Legumes",
          "price": 250,
          "image": "./assets/img/produtos/pimenta.png",
          "description": " PIMENTO AMARELO 500G DA HORTA"
        },
        {
          "id": 3,
          "qdd": 1,
          "name": " PERA IMPORTADA 1KG",
          "categoria": "Fruta e Legumes",
          "price": 4699,
          "image": "./assets/img/produtos/import.png",
          "description": "PERA IMPORTADA 1KG"
        },
        {
          "id": 4,
          "qdd": 1,
          "name": "LIMÃO NACIONAL 1KG DA HORTA",
          "categoria": "Fruta e Legumes",
          "price": 299,
          "image": "./assets/img/produtos/limao.png",
          "description": "LIMÃO NACIONAL 1KG DA HORTA"
        },
        {
          "id": 5,
          "qdd": 1,
          "name": " UVA CHARDONNAY IMPORTADA 500G AVO PEDRO",
          "categoria": "Fruta e Legumes",
          "price": 300,
          "image": "./assets/img/produtos/uva.jpg",
          "description": " UVA CHARDONNAY IMPORTADA 500G AVO PEDRO"
        },
        {
          "id": 6,
          "qdd": 1,
          "name": "LARANJA NACIONAL 1,2KG DA HORTA",
          "categoria": "Fruta e Legumes",
          "price": 3699,
          "image": "./assets/img/produtos/laranja.png",
          "description": "LARANJA IMPORTADA 1KG"
        },
        {
          "id": 7,
          "qdd": 1,
          "name": " LARANJA IMPORTADA 1KG",
          "categoria": "Fruta e Legumes",
          "price": 5499,
          "image": "./assets/img/produtos/laranja_import2.png",
          "description": "LARANJA IMPORTADA 1KG"
        },
        {
          "id": 8,
          "qdd": 1,
          "name": "ALHO IMPORTADO 250G AVO PEDRO",
          "categoria": "Fruta e Legumes",
          "price": 200,
          "image": "./assets/img/produtos/alho.png",
          "description": "ALHO IMPORTADO 250G AVO PEDRO"
        },
        {
          "id": 9,
          "qdd": 1,
          "name": "BATATA 1KG GIRASSOL",
          "categoria": "Fruta e Legumes",
          "price": 2199,
          "image": "./assets/img/produtos/batata.jpg",
          "description": "BATATA 1KG GIRASSOL"
        },
        {
          "id": 10,
          "qdd": 1,
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

    visualizar(index) {
      this.task = this.productos[index].id;
      this.editedTask = index;

      localStorage.setItem('codigo', this.task); 
      this.$router.push({ name: "detalhes"}) 
    },


    // dados nao utilizado

    addCat() {

      if (!this.newCat) {
        return;
      }

      this.productos.push(this.task);
      this.task = '';
      this.saveCats();
    },

    removeCat(x) {
      this.productos.splice(x, 1);
      this.saveCats();
    },

    saveCats() {
      const parsed = JSON.stringify(this.task);
      localStorage.setItem('gatoo', parsed);
    },


    persist() {
      if (!this.newCat) {
        return;
      }

      this.cats.push(this.newCat);
      this.newCat = '';
      this.saveCats();
    },



    edit(index) {
      localStorage.codigo = this.productos.id;
      alert("oiiiiiiii 2222")

    },


    qdd_p(id) {
      this.productos.id = id;
      this.qdd++
      window.location.href = "/";
    },

    qdd_n(id) {
      this.productos.id = id;
      this.qdd++
      alert()
    },

    adicionar(variavel, quantidade) {
      variavel += quantidade;
      alert(variavel += quantidade)
    },

    remover(variavel, quantidade) {
      variavel -= quantidade;
    }


  },

  async mounted() {

    if (localStorage.getItem('gatoo')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('gatoo'));
      } catch (e) {
        localStorage.removeItem('gatoo');
      }
    }


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
