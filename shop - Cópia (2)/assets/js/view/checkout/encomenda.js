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
      user_id: "",
      totalCat: 0,
      qtddCart: 0,
      todas_encomenda: [],
      carinhoLista: [],
      dados_pesuais: false,
    }
  },


  computed: {
    mostrarEncomenda() {
      let encomenda = [];
      encomenda = this.todas_encomenda.filter((item) => {
        return (
          item.user_id == this.user_id
        );
      })

      return encomenda;
    },

  },

  methods: {
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
      let res = await api.lista_encomenda();

      this.todas_encomenda = res.data

      return res;
    },


    visualizaratual(id) {
      this.$router.push({ name: "encomenda_detalhe", params: { id } })
      this.codigo = this.$route.params.id
      alert(this.codigo)


    },


  },

  async mounted() {
    this.verificarUser()
    this.lista_encomenda()
 
  },

  template: await get_template('./assets/js/view/checkout/encomenda')
}
