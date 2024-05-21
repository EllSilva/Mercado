import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      title: "home", 
      type: 'A',  
    }

  },

  methods: {
 

    Xsite() { 
     
      this.type = 'A'
    },

    Xhospeda() { 
     
      this.type = 'B'
    },

    Xdominio() { 
      
      this.type = 'C'
    },
  },

  async mounted() {

 
  },

  template: await get_template('./assets/js/components/jls/cliente')
}