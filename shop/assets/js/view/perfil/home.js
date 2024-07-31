import get_template from '../../components/get_template.js'
import api from "../../../../../static/js/api/adm.js"
let cats = new Array();

export default {
  data: function () {
    return {
      id: '',
      usuario: null,
      telefone1: null,
      telefone2: null,
      email: null,
      password: null,
      provincia: '',
      municipio: '',
      bairro: '',
      rua: '',
      conplementar: '',

      perfil: true
      
    }
  },

  methods: {

    async cadusers() {
      this.error = null;
      // localStorage.removeItem('token')
      let res = await api.alteraruser( 
      this.id,
      this.usuario,
      this.email,
      this.telefone1,
      this.telefone2, 
      this.provincia,
      this.municipio,
      this.bairro,
      this.rua,
        
        );

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
      localStorage.setItem("token", res.token.token);
      localStorage.setItem("code", res.usuario.id);
      window.location.href = '#/'
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


      this.id = data.usuario.id;
      this.usuario = data.usuario.usuario;
      this.email = data.usuario.email;
      this.telefone1 = data.usuario.telefone1;
      this.telefone2 = data.usuario.telefone2;  
      this.provincia = data.usuario.provincia;
      this.municipio = data.usuario.municipio;
      this.bairro = data.usuario.bairro;
      this.rua = data.usuario.rua;
 
      var sms = data.usuario.email;
      var isLoggedIn = data.estaLogado;

      console.log(sms)
      console.log(isLoggedIn)

    },
 
  },

  async mounted() {
    this.verificarUser()
 
    this.img = 'http://localhost:3333/api/uploads_produto/'
 
  },

  template: await get_template('./assets/js/view/perfil/home')
}
