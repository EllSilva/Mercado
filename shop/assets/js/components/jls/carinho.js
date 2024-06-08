import get_template from '../get_template.js'
let cats = new Array();
const Storage = "";

export default {
  data: function () {
    return {
      title: "home",
      type: 'A',
      totalCat: 0,
      isActive2: true,
      carinho: [],
    }
  },

  methods: {

    addCat(index) {

      cats = this.productos[index];
      var nome = this.productos[index].name;
      var qtdd = this.productos[index].qdd;

      alert(cats)
      console.log("aquiii" + nome)
      let totalQuantity = 0;


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
      carinho.push({ cats });

      // Salva no localStorage
      localStorage.setItem("carinho", JSON.stringify(carinho));



    },

    removeCat(index) {

      this.carinho.splice(index, 1);
      localStorage.removeItem(index);
      localStorage.setItem("carinho", JSON.stringify(this.carinho));
      alert("Remover" + this.carinho.name)

      this.somaCats();
    },

    somaCats() {
      var soma = 0;
      for (var i = 0; i < this.carinho.length; i++) {
        soma += this.carinho[i].price;
      }
      this.totalCat = soma
    },




  },

  async mounted() {
    if (localStorage.getItem('carinho')) {
      cats = JSON.parse(localStorage.getItem('carinho')) || [];

      this.carinho = cats

      console.log(this.carinho[0].price)

      this.somaCats();

      console.log(cats.length)
      this.addCat();
    }

  },

  template: await get_template('./assets/js/components/jls/carinho')
}