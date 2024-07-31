import get_template from '../get_template.js'
import api from "../../../../../static/js/api/adm.js"

export default {
  data: function () {
    return {
      title: "home", 
      type: 'A',  
      
      usuario: null,
      telefone1: null,
      email: null,
      password: null,
    }

  },

  methods: {
   
    async cadusers() {
      this.error = null; 
      // localStorage.removeItem('token')
      let res = await api.cadastrar(this.usuario, this.email, this.password, this.telefone1 );

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

  },

  async mounted() {

 
  },

  template: await get_template('./assets/js/components/jls/cadastro')
}