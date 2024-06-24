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
      detalhe_produto: [],
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

    async lista_produto() {
      let res = await api.lista_um_produto(this.produtoId);
  
      this.detalhe_produto = res 

      this.id = this.detalhe_produto.id,
      this.nome = this.detalhe_produto.nome,
      this.categoria = this.detalhe_produto.categoria,
      this.preco = this.detalhe_produto.price,
      this.descricao = this.detalhe_produto.description,
      this.imagem = this.detalhe_produto.img

      console.log(this.detalhe_produto.id) 
 
      return res;
    },

    addCat() {
      cats = this.productos[this.produtoId];
      var nome = this.nome;
      var qtdd = this.qdd;
      var preco = this.preco;
      var categoria = this.categoria;
      var image = this.imagem;
      var descricao = this.descricao;
      var totalPreco = qtdd * preco;

      alert(cats)
      console.log("aquiii" + nome)
      let totalQuantity = 0;

      console.log(nome.length)
      if (cats.length > 0) {

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

  },

  async mounted() {
    this.img = 'http://localhost:3333/api/uploads/'
    this.produtoId = this.$route.params.id,
    this.lista_produto()

  //  console.log(this.detalhe_produto)
    if (localStorage.codigo) {
      this.codigo = localStorage.codigo;
    } 

    if (localStorage.getItem('carinho')) {
      var cats = JSON.parse(localStorage.getItem('carinho'));
     // console.log(cats.length)
      // this.addCat();
      this.qtddCart = cats.length
    }
  },

  template: await get_template('./assets/js/view/detalhes/home')
}