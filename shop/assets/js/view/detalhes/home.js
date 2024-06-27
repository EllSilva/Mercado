import get_template from '../../components/get_template.js'
import api from "../../../../../static/js/api/adm.js"
let cats = new Array();
 
export default {
  data: function () {
    return {
      qtddCart: 0,
      img: "",
      nome: "",
      categoria: "",
      imagem: "",
      preco: "",
      descricao: "",
      codigo: '',
      qdd: 1,

      produtoId: "",
      
      carinhoLista: [],
      detalhe_produto: [],

    }
  },

  methods: {

    async lista_produto() {
      let res = await api.lista_um_produto(this.produtoId);
      this.detalhe_produto = res

      this.id = this.detalhe_produto.id,
        this.nome = this.detalhe_produto.nome,
        this.categoria = this.detalhe_produto.categoria,
        this.preco = this.detalhe_produto.preco,
        this.descricao = this.detalhe_produto.descricao,
        this.imagem = this.detalhe_produto.img

      console.log(this.detalhe_produto.id)

      return res;
    },

    async addCat() {
      cats = this.detalhe_produto;
      var id = this.id;
      var nome = this.nome;
      var qtdd = this.qdd;
      var preco = this.preco;
      var categoria = this.categoria;
      var image = this.imagem;
      var descricao = this.descricao;
      var totalPreco = qtdd * preco;

      let verificarexiste = new Array();

      verificarexiste = JSON.parse(localStorage.getItem("carinho"));
      for (var i = 0; i < verificarexiste.length; i++) {
        this.verif = verificarexiste[i].id;
        if (this.verif === this.id) {
          //  alert("certo existe")
          this.editeCat()
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
        message: 'Compra realizado com sucesso !',
      });
      this.carinhos()
    },

    async editeCat() {
      // let editcarinho = new Array();  
      let editcarinho = new Array();
      editcarinho = JSON.parse(localStorage.getItem("carinho")).filter(item => item.id != this.id)

      const guarda = editcarinho;
      //console.log(this.id)
      localStorage.setItem('carinho', JSON.stringify(guarda));
    },
    async carinhos() {

      if (localStorage.getItem('carinho')) {
        cats = JSON.parse(localStorage.getItem('carinho')) || [];

        this.carinhoLista = cats
 
        //  this.somaCats(); 
        this.qtddCart = cats.length 
        // console.log(this.carinhoLista)
        //  alert( this.qtddCart);

      } else {
        this.carinhoLista = "carinho vazio"
      }
    },

    async somaCats() { 
      if (localStorage.getItem('carinho')) {
        cats = JSON.parse(localStorage.getItem('carinho')) || [];

        var soma = 0;
        for (var i = 0; i < cats.length; i++) {
          soma += cats[i].totalPreco;
          this.totalCat = soma
        }
      }
    },
  },

  async mounted() {
    this.img = 'http://localhost:3333/api/uploads_produto/'

    this.produtoId = this.$route.params.id
    this.carinhos()
    this.lista_produto()
 

    if (localStorage.getItem('catCodigo')) {
      this.codigo = localStorage.getItem('catCodigo');
    }

    this.lista_produto()
    this.carinhos()


    //this.carinhoLista.splice(index, 1);
    //localStorage.removeItem(index);
    //localStorage.setItem("carinho", JSON.stringify(this.carinhoLista));
     this.somaCats();


   
  },

  template: await get_template('./assets/js/view/detalhes/home')
}