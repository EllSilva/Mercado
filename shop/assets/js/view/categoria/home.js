import get_template from '../../components/get_template.js'
import Router from '../../vendor/vue-router.js'
let cats = new Array();

export default {
  data: function () {
    return {
      qtddCart: 0,
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
          "categoria": "Frutas & Legumes",
          "price": 200,
          "image": "./assets/img/produtos/tangerina.png",
          "description": "TANGERINA NACIONAL 600G DA HORTA"
        },
        {
          "id": 2,
          "qdd": 1,
          "name": "PIMENTO AMARELO 500G DA HORTA",
          "categoria": "Frutas & Legumes",
          "price": 250,
          "image": "./assets/img/produtos/pimenta.png",
          "description": " PIMENTO AMARELO 500G DA HORTA"
        },
        {
          "id": 3,
          "qdd": 1,
          "name": "PERA IMPORTADA 1KG",
          "categoria": "Frutas & Legumes",
          "price": 4699,
          "image": "./assets/img/produtos/import.png",
          "description": "PERA IMPORTADA 1KG"
        },
        {
          "id": 4,
          "qdd": 1,
          "name": "LIMÃO NACIONAL 1KG DA HORTA",
          "categoria": "Frutas & Legumes",
          "price": 299,
          "image": "./assets/img/produtos/limao.png",
          "description": "LIMÃO NACIONAL 1KG DA HORTA"
        },
        {
          "id": 5,
          "qdd": 1,
          "name": " UVA CHARDONNAY IMPORTADA 500G AVO PEDRO",
          "categoria": "Frutas & Legumes",
          "price": 300,
          "image": "./assets/img/produtos/uva.jpg",
          "description": " UVA CHARDONNAY IMPORTADA 500G AVO PEDRO"
        },
        {
          "id": 6,
          "qdd": 1,
          "name": "LARANJA NACIONAL 1,2KG DA HORTA",
          "categoria": "Frutas & Legumes",
          "price": 3699,
          "image": "./assets/img/produtos/laranja.png",
          "description": "LARANJA IMPORTADA 1KG"
        },
        {
          "id": 7,
          "qdd": 1,
          "name": " LARANJA IMPORTADA 1KG",
          "categoria": "Frutas & Legumes",
          "price": 5499,
          "image": "./assets/img/produtos/laranja_import2.png",
          "description": "LARANJA IMPORTADA 1KG"
        },
        {
          "id": 8,
          "qdd": 1,
          "name": "ALHO IMPORTADO 250G AVO PEDRO",
          "categoria": "Frutas & Legumes",
          "price": 200,
          "image": "./assets/img/produtos/alho.png",
          "description": "ALHO IMPORTADO 250G AVO PEDRO"
        },
        {
          "id": 9,
          "qdd": 1,
          "name": "BATATA 1KG GIRASSOL",
          "categoria": "Frutas & Legumes",
          "price": 2199,
          "image": "./assets/img/produtos/batata.jpg",
          "description": "BATATA 1KG GIRASSOL"
        },
        {
          "id": 10,
          "qdd": 1,
          "name": "BATATA DOCE 1KG GIRASSOL",
          "categoria": "Frutas & Legumes",
          "price": 2199,
          "image": "./assets/img/produtos/doce.png",
          "description": "BATATA DOCE 1KG GIRASSOL"
        }

      ]
    }

  },

  computed: {
    filteredCategoria() {
      let productos = [];
      productos = this.productos.filter((item) => {
        return (
          item.categoria.toLowerCase().indexOf(this.codigo.toLowerCase()) > -1
        );
      })

      return productos;
    },  
  },


  methods: {
      
    visualizar(id) {
      //this.task = this.productos[id].id;
      // this.editedTask = id; 
      //  localStorage.setItem('codigo', this.task); 
      this.$router.push({ name: "novorota", params: { id } })
    },
 
    add(index) {
      this.task = this.productos[index].id;
      this.awesome = this.task

    },

    // dados nao utilizado

    addCat(index) { 
     
     cats = this.productos[index];
      var nome = this.productos[index].name;
      var qtdd = this.productos[index].qdd;
      var preco = this.productos[index].price;
      var categoria = this.productos[index].categoria;
      var image = this.productos[index].image;
      var descricao = this.productos[index].description;
      var totalPreco = qtdd * preco;

      alert(cats)
      console.log("aquiii" +nome)
      let totalQuantity = 0;

      console.log(nome.length )
      if(cats.length > 0){
        
      }
      this.qdd = totalQuantity;

 
      // O Array() é usado para criar Array de objetos
      let carinho = new Array();

      // Verifica se a propriedade no localStorage
      if (localStorage.hasOwnProperty("carinho")) {
        // Recuperar os valores da propriedade carinho do localStorage
        // Converte de String para Object
        carinho = JSON.parse(localStorage.getItem("carinho"));
      }



      // Adiciona um novo objeto no array criado
      //carinho.push(cats);
      carinho.push({ nome, qtdd, preco, categoria, image, descricao, totalPreco });

      // Salva no localStorage
      localStorage.setItem("carinho", JSON.stringify(carinho));

      cats = JSON.parse(localStorage.getItem('carinho')); 
     // this.addCat();
      this.qtddCart = cats.length

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
     // this.saveCats();
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

    if(localStorage.getItem('carinho')){
      cats = JSON.parse(localStorage.getItem('carinho'));
      console.log(cats.length)
     // this.addCat();
      this.qtddCart = cats.length
  }
   
 

    if (localStorage.catCodigo) { 
      this.codigo = localStorage.catCodigo;
    }
    this.filteredCategoria

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
