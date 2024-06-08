import get_template from '../../components/get_template.js'
let cats = new Array();

export default {
    data: function () {
        return {
            title: "home",
            type: 'A',
            totalCat: 0,
            isActive2: true,
            carinho: [], 
            dados_pesuais: false,
        } 
        
    },

    methods:{
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
      
          this.somaCats();
     
        }
    
      },

    template: await get_template('./assets/js/view/checkout/home')
}
 