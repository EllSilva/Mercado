import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      nome: "",
      categoria: "",
      imagem: "",
      preco: "",
      descricao: "",
      codigo: '',

      title: "Contato",
      qdd: 3,

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

  computed: {
    filteredProduto() {
      let productos = [];
      productos = this.productos.filter((item) => {
        return (
          item.id == this.codigo
        );
      })

      this.id = productos[0].id,
        this.nome = productos[0].name,
        this.categoria = productos[0].categoria,
        this.preco = productos[0].price,
        this.descricao = productos[0].description, 
        this.imagem = productos[0].image,


        console.log(productos[0].id)
      return productos;
    },
  },

  methods: {
    persist() {
      localStorage.codigo = this.codigo;

    }
  },

  async mounted() {
 if (localStorage.codigo) {
      this.codigo = localStorage.codigo;
    }
    this.filteredProduto

    
  },
  template: await get_template('./assets/js/view/detalhes/home')
}