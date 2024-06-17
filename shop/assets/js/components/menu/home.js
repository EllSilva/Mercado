import get_template from '../../components/get_template.js'

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

      fields: [
        {
          key: "name",
          label: "Nome",
        },
        {
          key: "email",
          label: "E-mail",
        },
        {
          key: "isActive",
          label: "Status",
        },
      ],

      productos: [
        {
          "id": 1,
          "qdd": 1,
          "name": " PIMENTO AMARELO 500G DA HORTA",
          "categoria": "Fruta e Legumes",
          "preco": 200,
          "image": "./assets/img/produtos/tangerina.png",
          "description": " PIMENTO AMARELO 500G DA HORTA"
        },
        {
          "id": 2,
          "qdd": 1,
          "name": "TANGERINA NACIONAL 600G DA HORTA",
          "categoria": "Fruta e Legumes",
          "preco": 250,
          "image": "./assets/img/produtos/pimenta.png",
          "description": "TANGERINA NACIONAL 600G DA HORTA"
        },
        {
          "id": 3,
          "qdd": 1,
          "name": " PERA IMPORTADA 1KG",
          "categoria": "Fruta e Legumes",
          "preco": 4699,
          "image": "./assets/img/produtos/import.png",
          "description": "PERA IMPORTADA 1KG"
        },
        {
          "id": 4,
          "qdd": 1,
          "name": "LIMÃO NACIONAL 1KG DA HORTA",
          "categoria": "Fruta e Legumes",
          "preco": 299,
          "image": "./assets/img/produtos/limao.png",
          "description": "LIMÃO NACIONAL 1KG DA HORTA"
        },
        {
          "id": 5,
          "qdd": 1,
          "name": " UVA CHARDONNAY IMPORTADA 500G AVO PEDRO",
          "categoria": "Fruta e Legumes",
          "preco": 300,
          "image": "./assets/img/produtos/grapes.png",
          "description": " UVA CHARDONNAY IMPORTADA 500G AVO PEDRO"
        },
        {
          "id": 6,
          "qdd": 1,
          "name": "LARANJA NACIONAL 1,2KG DA HORTA",
          "categoria": "Fruta e Legumes",
          "preco": 3699,
          "image": "./assets/img/produtos/laranja.png",
          "description": "LARANJA IMPORTADA 1KG"
        },
        {
          "id": 7,
          "qdd": 1,
          "name": " LARANJA IMPORTADA 1KG",
          "categoria": "Fruta e Legumes",
          "preco": 5499,
          "image": "./assets/img/produtos/laranja_import2.png",
          "description": "LARANJA IMPORTADA 1KG"
        },
        {
          "id": 8,
          "qdd": 1,
          "name": "ALHO IMPORTADO 250G AVO PEDRO",
          "categoria": "Fruta e Legumes",
          "preco": 200,
          "image": "./assets/img/produtos/alho.png",
          "description": "ALHO IMPORTADO 250G AVO PEDRO"
        },
        {
          "id": 9,
          "qdd": 1,
          "name": "BATATA 1KG GIRASSOL",
          "categoria": "Fruta e Legumes",
          "preco": 2199,
          "image": "./assets/img/produtos/alho.png",
          "description": "BATATA 1KG GIRASSOL"
        },
        {
          "id": 10,
          "qdd": 1,
          "name": "BATATA DOCE 1KG GIRASSOL",
          "categoria": "Fruta e Legumes",
          "preco": 2199,
          "image": "./assets/img/produtos/doce.png",
          "description": "BATATA DOCE 1KG GIRASSOL"
        }


      ],

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


      isActive1: true,
      isActive2: false,
      isActive3: false,

      title: "home",
      activo: false,
      activoService: false,
      activoSite: false,
      activoDesign: false,
      activoMarketig: false,
      activoOutros: false,
      activo1: true,
      activo2: false,
      activo3: false,
      activo4: false,
      activo5: false,
    }
  },

  computed: {
    filteredProduto() {
      let productos = [];
      productos = this.productos.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.categoria.toLowerCase().indexOf(this.search.toLowerCase()) > -1
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
    
      if (localStorage.getItem('carinho')) {
        cats = JSON.parse(localStorage.getItem('carinho')) || [];

        this.carinhoLista = cats


      //  this.somaCats(); 
        this.qtddCart = cats.length

        alert("Remover")
        alert( this.qtddCart);
      
      } else {
        this.carinhoLista = "carinho vazio"
      }
    },

    mostrar() {
      this.isActive2 = !this.isActive2;
      this.isActive3 = !this.isActive3;
    },

    mostrarMenu() {
      this.activo = !this.activo;
    },

  },

  async mounted() {
    this.carinhos();
    this.somaCats();

  },
  template: await get_template('./assets/js/components/menu/home')
}