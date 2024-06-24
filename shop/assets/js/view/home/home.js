import get_template from '../../components/get_template.js'
import api from "../../../../../static/js/api/adm.js"

export default {


  data: function () {
    return {
      tarefa: "",
      qtddCart: 0,
      img: null,
      todos_categoria: [],
      categoria: [
        {
          "id": 1,
          "name": "CONGELADOS",
          "image": "./assets/img/categoria/congelado.png"
        },
        {
          "id": 2,
          "name": "ARROZ E MASSA",
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

    async lista_cat() {
      let res = await api.lista_categorias();

      this.todos_categoria = res.data

      console.log(this.todos_categoria)
      return res;
    },

    visualizar(index) {
      this.tarefa = this.todos_categoria[index].id;

      alert(this.tarefa)

      localStorage.setItem('catCodigo', this.tarefa);
      this.$router.push({ name: "categoria" })
    },

    visualizar2(index) {
      this.tarefa = this.categoria[index].name;

      localStorage.setItem('catCodigo', this.tarefa);
      this.$router.push({ name: "categoria" })
    },

  },

  async mounted() {
    this.img = 'http://localhost:3333/api/uploads_categoria/'
  
    this.lista_cat()

    if (localStorage.getItem('carinho')) {
      var cats = JSON.parse(localStorage.getItem('carinho'));
      this.qtddCart = cats.length
    }


  },

  template: await get_template('./assets/js/view/home/home')
}