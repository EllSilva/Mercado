import get_template from '../../components/get_template.js'
import api from "../../../../../static/js/api/adm.js"

let cats = new Array();
export default {
  props: {
    qtddCart: String,

    carinhoLista: {
      type: Array,
    },
  },


  data: function () {
    return {
      user_token: "",
      codigo: '',
      verif: "",
      carrinhoVerif: false,



      totalCat: 0,
      carinhoLista: [],
      todos_produto: [],



      search: "",
      selected: null,
      options: [
        { value: null, text: "Selecione um status" },
        { value: true, text: "Ativo" },
        { value: false, text: "Inativo" },
      ],

      qdd: 1,
      awesome: false,

      totalCat: 0,
      carinho: [],

      img: "",
      isActive1: true,
      isActive2: false,

      activo: false,

    }
  },

  computed: {

    filteredProduto() {
      let productos = [];
      productos = this.todos_produto.filter((item) => {
        return (
          item.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      productos = productos.filter((item) => {
        if (this.selected == null) return item;
        return item.isActive === this.selected;
      });
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

    async lista_produto() {
      let res = await api.lista_produtos();
      this.todos_produto = res
      return res;
    },

    addCat(index) {
      cats = this.todos_produto
      this.id = this.todos_produto[index].id;
      var id = this.todos_produto[index].id;
      var nome = this.todos_produto[index].nome;
      var qtdd = this.todos_produto[index].quantidade;
      var preco = this.todos_produto[index].preco;
      var categoria = this.todos_produto[index].categoria;
      var image = this.todos_produto[index].img;
      var descricao = this.todos_produto[index].descricao;
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
      carinho.push({ id, nome, qtdd, preco, categoria, image, descricao, totalPreco });

      // Salva no localStorage
      localStorage.setItem("carinho", JSON.stringify(carinho));
      iziToast.success({
        title: 'OK',
        position: 'bottomCenter',
        message: 'Compra realizado com sucesso !',
      });
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

    removeCat(index) {

      this.carinhoLista.splice(index, 1);
      localStorage.removeItem(index);
      localStorage.setItem("carinho", JSON.stringify(this.carinhoLista));



      this.somaCats();

      this.carinhoLista
      this.carinhos();

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
      var catverif = JSON.parse(localStorage.getItem('carinho')) || [];
 
      if (catverif && catverif.length > 0) {

        this.carrinhoVerif = true
        cats = JSON.parse(localStorage.getItem('carinho')) || [];

        this.carinhoLista = cats
 
        //  aler this.somaCats(); 
        this.qtddCart = cats.length

        //  alert("Remover")
        //  alert( this.qtddCart);
    
      } else {
        this.carrinhoVerif = false
 
      }
    },

    mostrar() {
      this.isActive2 = !this.isActive2;
      this.isActive3 = !this.isActive3;
    },

    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("code");
      this.$router.push({ name: "detalhes" })
    },

    click() {

    },

  },

  async mounted() {

    $(document).ready(function () {

      $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
      });

      $('.menu-btn').click(function () {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
      });

      $('.carinho-btn').click(function () {
        $('.side-carinho').addClass('active');
        $('.menu-carinho').css("visibility", "hidden");
      });

      $('.close-btn').click(function () {
        $('.side-carinho').removeClass('active');
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
      });

      $('.close-carinho').click(function () {
        $('.side-carinho').removeClass('active');
        $('.menu-carinho').css("visibility", "visible");
      });

    });








    this.verificarUser()

    this.img = 'http://localhost:3333/api/uploads_produto/'
    this.lista_produto()

    this.carinhos();
    this.somaCats();


  },
  template: await get_template('./assets/js/components/menu/home')
}