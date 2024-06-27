import get_template from '../../components/get_template.js'
let cats = new Array();

export default {
    data: function () {
        return {
            title: "home",
            type: 'A',
            img: '',
            totalCat: 0,
            isActive2: true,
            qtddCart: 0,
            carinho: [], 
            carinhoLista: [],
            dados_pesuais: false,
        } 
        
    },

    methods:{

      carinhos() {

        if (localStorage.getItem('carinho')) {
          cats = JSON.parse(localStorage.getItem('carinho')) || [];
  
          this.carinhoLista = cats
  
  
          //  this.somaCats(); 
          this.qtddCart = cats.length
  
          //  alert("Remover")
          //  alert( this.qtddCart);
  
        } else {
          this.carinhoLista = "carinho vazio"
        }
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
this.img = 'http://localhost:3333/api/uploads_produto/'
      this.carinhos()
        if (localStorage.getItem('carinho')) {
          cats = JSON.parse(localStorage.getItem('carinho')) || [];
    
          this.carinho = cats
      
          this.somaCats();
     
        }
    
      },

    template: await get_template('./assets/js/view/checkout/home')
}
 