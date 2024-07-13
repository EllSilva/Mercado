import get_template from '../../components/get_template.js'
import api from "../../../../../static/js/api/adm.js"
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


      usuario: '',
      email: '',

      id: '',
      cod_ref: '',
      telefone: '000000000000',
      gorjeta: '0',
      tipo_pagamento: 'Sem',
      total: '100',
      municipio: '',
      bairro: '',
      rua: '',
      estado: 'activo',
      instrucoes: '',
      user_id: '',



      produtos: [],

    }
  },

  methods: {

    carinhos() {
      if (localStorage.getItem('carinho')) {
        cats = JSON.parse(localStorage.getItem('carinho')) || [];

        this.carinho = cats

        this.qtddCart = cats.length
        var soma = 0;
        for (var i = 0; i < this.carinho.length; i++) {
          soma += this.carinho[i].totalPreco;

        }
        this.totalCat = soma
      } else {
        this.carinhoLista = "carinho vazio"
      }
    },

    removeCat(index) {
      this.carinho.splice(index, 1);
      localStorage.removeItem(index);
      localStorage.setItem("carinho", JSON.stringify(this.carinho));

    },

    async finalizarpedido() {

      // Verifica se a propriedade no localStorage
      if (localStorage.hasOwnProperty("carinho")) {
        let carinho = JSON.parse(localStorage.getItem("carinho"));

        for (var i = 0; i < carinho.length; i++) {
          this.produtos[i] = carinho[i].id;
        }
        this.error = null;

        this.produtos

        let res = await api.encomenda(this.id, this.cod_ref, this.gorjeta, this.tipo_pagamento,
          this.total, this.bairro, this.rua, this.estado, this.instrucoes, this.user_id, this.produtos);

        if (res.error) {
          this.error = res.message;
          iziToast.error({
            title: "Error",
            message: this.error,
            position: "bottomCenter",
          });

          return null;
        }

        this.msg = res.message;
        iziToast.success({
          title: "OK",
          message: this.msg,
          position: "bottomCenter",
        });



      } else {
        alert("Errroooooo")
      }


    },

    async finalizarpedidoxl() {
      alert("bearer")
      //  cats = JSON.parse(localStorage.getItem('carinho')) || [];
      const token = 'MjI.EVgh-x6aJeD36xpQqnlzXn-cqpnGPEgjy_TxwdfUjms5CK7YmsyOvNQ49vGS';

      const myHeaders = new Headers({
        'Authorization': `Bearer ${token}`
      });

      const myInit = {
        method: 'GET',
        headers: myHeaders
      };

      const myRequest = new Request('http://localhost:3333/api/dashboard', myInit);

      fetch(myRequest).then(response => {
        return response.json();
      })
        .then(data => {
          const { id } = data
          console.log(id);
        });


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



      this.usuario = data.usuario.usuario;
      this.email = data.usuario.email;
      this.user_id = data.usuario.id;
      var sms = data.usuario.email;
      var isLoggedIn = data.estaLogado;

      console.log(sms)
      console.log(isLoggedIn)

    },


  },

  async mounted() {
    this.verificarUser()

    this.img = 'http://localhost:3333/api/uploads_produto/'

    this.carinhos()
  },

  template: await get_template('./assets/js/view/checkout/home')
}
