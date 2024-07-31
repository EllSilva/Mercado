import get_template from '../get_template.js'
import api from "../../../../../static/js/api/adm.js"

export default {
  data: function () {
    return {
      title: "home",
      type: 'A',

      email: null,
      password: null,
    }

  },

  methods: {

    async logar() {
      this.error = null;
      // localStorage.removeItem('token')
      localStorage.removeItem("token");
      let res = await api.login(this.email, this.password);
      try {
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
      } catch (error) {
        this.error = error;
        iziToast.error({
          title: "Error",
          message: this.error,
          position: "bottomCenter",
        });

        return null;
      }

    },

  },

  async mounted() {


  },

  template: await get_template('./assets/js/components/jls/login')
}