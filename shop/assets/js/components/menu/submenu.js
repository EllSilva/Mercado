import get_template from '../../components/get_template.js'

let cats = new Array();
export default {
  props: {
    qtddCart: String,

  },


  data: function () {
    return {
      user_token: "",

    }
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
      this.user_token  = data.estaLogado;

      console.log(sms)
      console.log(this.user_token)

    },


    async logout() {

      iziToast.show({
        theme: 'dark',
        icon: 'icon-person',
        title: 'Sair',
        message: 'Desejas Terminar a Sessão ?',
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: '#ed2038',
        buttons: [
          ['<button>SIm</button>', function (instance, toast) {
            localStorage.removeItem("token");
            localStorage.removeItem("code");
            window.location.href = '#/'
          }, true], // true to focus
          ['<button>Não</button>', function (instance, toast) {
            instance.hide({
              transitionOut: 'fadeOutUp',
              onClosing: function (instance, toast, closedBy) {
                console.info('closedBy: ' + closedBy); // The return will be: 'closedBy: buttonName'
              }
            }, toast, 'buttonName');
          }]
        ],

      });
    },
  },

  async mounted() {
     this.verificarUser()

  },

  template: await get_template('./assets/js/components/menu/submenu')
}