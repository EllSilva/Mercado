import get_template from '../../components/get_template.js'
import api from "../../../../../static/js/api/adm.js"

export default {
  data: function () {
    return {
      user_token: "",
      user_local: "",
      type: "A",
      carinho: [],
      img: '',

      estaActive: 2,
      estaActive1: false,
      estaActive2: false,
      estaActive3: false,
      estaActive4: false,
      estaActive5: false,

      totalCat: 0,
      qtddCart: 0,
      todas_encomenda: [],
      carinhoLista: [],

      dados_pessuais: false,


      id: "",
      cod_ref: null,
      telefone: null,
      gorjeta: 0,
      tipo_pagamento: "",
      total: 0,
      municipio: null,
      bairro: null,
      rua: null,
      estado: "",
      instrucoes: "",
      user_id: "",
      created_at: "",
      updated_at: "",
      produtos: [],
    }
  },


  methods: {

    verif_checkaut() {

     

      if (this.estaActive === 1) {
      
        this.estaActive1 = true,
          this.estaActive2 = false,
          this.estaActive3 = false,
          this.estaActive4 = false,
          this.estaActive5 = false
      } else if (this.estaActive === 2) {
    
        this.estaActive1 = false,
        this.estaActive2 = true,
        this.estaActive3 = false,
        this.estaActive4 = false

      } else if (this.estaActive === 3) {
     
        this.estaActive1 = false,
        this.estaActive2 = false,
        this.estaActive3 = true,
        this.estaActive4 = false
      } else if (this.estaActive === 4) {
 
        this.estaActive1 = false,
        this.estaActive2 = false,
        this.estaActive3 = false,
        this.estaActive4 = true
      }   else {

      }

    },


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
      this.user_id = data.usuario.id;


    },

    async lista_encomenda() {
      let res = await api.lista_encomenda_id(this.id);

      this.todas_encomenda = res.data

      this.id = this.todas_encomenda.id,
        this.gorjeta = this.todas_encomenda.gorjeta,
        this.tipo_pagamento = this.todas_encomenda.tipo_pagamento,
        this.total = this.todas_encomenda.total,
        this.municipio = this.todas_encomenda.municipio,
        this.bairro = this.todas_encomenda.bairro

      this.rua = this.todas_encomenda.rua,
        this.estado = this.todas_encomenda.estado
      this.produtos = this.todas_encomenda.produtos,

        console.log(this.produtos)

      return res;
    },

  },

  async mounted() {
    this.verif_checkaut()

    this.img = 'http://localhost:3333/api/uploads_produto/'
    this.id = this.$route.params.id

    this.verificarUser()
    this.lista_encomenda()

  },
  template: await get_template('./assets/js/view/checkout/encomenda_detalhe')
}
