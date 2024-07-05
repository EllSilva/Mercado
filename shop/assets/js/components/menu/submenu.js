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
     this.user_token = localStorage.getItem('token')
     if (this.user_token) {

     }

  },

  template: await get_template('./assets/js/components/menu/submenu')
}