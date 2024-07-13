import get_template from '../../components/get_template.js'
import Router from '../../vendor/vue-router.js'
import api from "../../../../../static/js/api/adm.js"
let cats = new Array();

export default {
  data: function () {
    return {
      modal_login: false,
      user_token: "",
      user_local: "",

      id: "",
      qtddCart: 0,
      cats: [],
      img: "",
      imgcat: "",
      task: "",
      editedTask: null,

      codigo: '',
      verif: "",
      totalCat: 0,
      carinhoLista: [],
      todos_subc_produto: [],
      todos_categoria: [],
      productos: [],

      localizacao: [
        "luanda", "namibia", "uige", "benguela", "huila",
      ],


    }

  },

  computed: {
    filteredCategoria() {
      let productos = [];
      productos = this.todos_subc_produto.filter((item) => {
        return (
          item.ref == this.codigo
        );
      })

      return productos;
    },

    filteredCategoriaxxx() {
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

    async verificarUser() {

      const token = localStorage.getItem('token') || "";

      const myHeaders = new Headers({
        'Authorization': `Bearer ${token}`
      });

      let res = await fetch(
        `http://localhost:3333/api/dashboard`,
        {
          method: 'GET',
          headers: myHeaders
        }
      );

      let data = await res.json();

      var sms = data.message;
      this.user_token = data.estaLogado;

      console.log(sms)
      console.log(this.user_token)

    },

    async lista_cat() {
      let res = await api.lista_categorias();

      this.todos_categoria = res.data

      console.log(this.todos_categoria)
      return res;
    },

    async lista_subcat_produtos() {
      let res = await api.lista_subcategorias_produtos();
      this.todos_subc_produto = res.data
      return res;
    },

    visualizar(id) {
      //this.task = this.productos[id].id;
      // this.editedTask = id; 
      //  localStorage.setItem('codigo', this.task); 
      this.$router.push({ name: "detalhes", params: { id } })
    },


    visualizaratual(id) {
      this.$router.push({ name: "categoria", params: { id } })
      this.codigo = this.$route.params.id

      this.lista_cat()
      this.lista_subcat_produtos()
      this.carinhos()

    },


    editeCat() {
      // let editcarinho = new Array();  
      let editcarinho = new Array();
      editcarinho = JSON.parse(localStorage.getItem("carinho")).filter(item => item.id != this.id)

      const guarda = editcarinho;
      //console.log(this.id)
      localStorage.setItem('carinho', JSON.stringify(guarda));

    },

    addCat(indexc, index) {

      this.user_local = this.localizacao.includes("luanda")

      if (this.user_token && this.user_local) {

        cats = this.todos_subc_produto[indexc].produtos;
        this.id = cats[index].id;
        var id = cats[index].id;
        var nome = cats[index].nome;
        var qtdd = cats[index].quantidade;
        var preco = cats[index].preco;
        var categoria = cats[index].categoria;
        var image = cats[index].img;
        var descricao = cats[index].descricao;
        var totalPreco = qtdd * preco;

        if (localStorage.getItem('carinho')) {
          let verificarexiste = new Array();
          verificarexiste = JSON.parse(localStorage.getItem("carinho"));
          for (var i = 0; i < verificarexiste.length; i++) {
            this.verif = verificarexiste[i].id;
            if (this.verif === this.id) {
              //  alert("certo existe")
              this.editeCat()
            }
          }
        }
        let totalQuantity = 0;
        if (cats.length == 0) {
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
        carinho.push({ id, nome, qtdd, preco, categoria, image, descricao, totalPreco });

        // Salva no localStorage
        localStorage.setItem("carinho", JSON.stringify(carinho));
        iziToast.success({
          title: 'OK',
          position: 'bottomCenter',
          message: 'Compra Adicionado ao Carinho!',
        });

        this.carinhos()
      }

      else if (!this.user_token) {
        this.modal_login = true
      }
      else if (!this.user_local) {
        alert(" Este Produto nao esta Disponivel na sua Localizacao  ")
      }


    },

    somaCats() {
      if (localStorage.getItem('carinho')) {
        cats = JSON.parse(localStorage.getItem('carinho')) || [];

        var soma = 0;
        for (var i = 0; i < cats.length; i++) {
          soma += cats[i].totalPreco;
          this.totalCat = soma
        }
      }
    },

    carinhos() {

      if (localStorage.getItem('carinho')) {
        cats = JSON.parse(localStorage.getItem('carinho')) || [];

        this.carinhoLista = cats

        this.somaCats();
        this.qtddCart = cats.length

      } else {

      }
    },

    removeCat(index) {
    },

  },

  async mounted() {
    this.verificarUser()

    this.img = 'http://localhost:3333/api/uploads_produto/'
    this.imgcat = 'http://localhost:3333/api/uploads_categoria/'



    this.codigo = this.$route.params.id

    this.lista_cat()
    this.lista_subcat_produtos()
    this.carinhos()
    //console.log(this.filteredCategoria) 


    //this.carinhoLista.splice(index, 1);
    //localStorage.removeItem(index);
    //localStorage.setItem("carinho", JSON.stringify(this.carinhoLista));
    this.somaCats();


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
