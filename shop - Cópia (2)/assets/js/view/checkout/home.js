import get_template from '../../components/get_template.js'
import api from "../../../../../static/js/api/adm.js"
let cats = new Array();
alert
export default {
  data: function () {
    return {
      title: "home",
      type: 'nao',
      img: '',
      totalCat: 0,
      isActivo2: true,
      qtddCart: 0,
      carinho: [],
      carinhoLista: [],
      dados_pesuais: false,


      usuario: '',
      email: '',

      id: '',
      cod_ref: '',
      telefone: '',
      gorjeta: '0',
      tipo_pagamento: 'Sem',
      total: '',
      municipio: '',
      bairro: '',
      rua: '',
      estado: 1,
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
        this.total = soma

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

      try {
        // Verifica se a propriedade no localStorage
        if (localStorage.hasOwnProperty("carinho")) {
          let carinho = JSON.parse(localStorage.getItem("carinho"));

          for (var i = 0; i < carinho.length; i++) {
            this.produtos[i] = carinho[i].id;
          }
          this.error = null;

          this.produtos

          let res = await api.encomenda(this.id, this.cod_ref, this.telefone, this.gorjeta, this.tipo_pagamento,
            this.total, this.municipio, this.bairro, this.rua, this.estado, this.instrucoes, this.user_id, this.produtos);

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
          localStorage.removeItem('carinho')
          iziToast.success({
            title: "OK",
            message: this.msg,
            position: "bottomCenter",
          });

        } else {
          alert("Errroooooo")
        }
      } catch (error) {
        this.error = error
        iziToast.error({
          title: "Error",
          message: this.error,
          position: "bottomCenter",
        });

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

      this.telefone = data.usuario.telefone1;
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

    this.carinhos()

    const menu2 = document.querySelector(".menu2");
    const menu2Main = menu2.querySelector(".menu2-main");
    const goBack = menu2.querySelector(".go-back");
    const menu2Trigger = document.querySelector(".mobile-menu2-trigger");
    const closeMenu2 = menu2.querySelector(".mobile-menu2-close");
    let subMenu2;
    menu2Main.addEventListener("click", (e) => {
      if (!menu2.classList.contains("activo")) {
        return;
      }
      if (e.target.closest(".menu2-item-has-children")) {
        const hasChildren = e.target.closest(".menu2-item-has-children");
        showSubMenu2(hasChildren);
      }
    });
    goBack.addEventListener("click", () => {
      hideSubMenu2();
    })
    menu2Trigger.addEventListener("click", () => {
      toggleMenu2();
    })

    closeMenu2.addEventListener("click", () => {
      toggleMenu2();
    })
    document.querySelector(".menu2-overlay").addEventListener("click", () => {
      toggleMenu2();
    })
    function toggleMenu2() {
      
      menu2.classList.toggle("activo");
      document.querySelector(".menu2-overlay").classList.toggle("activo");
    }
    function showSubMenu2(hasChildren) {
      subMenu2 = hasChildren.querySelector(".sub-menu2");
      subMenu2.classList.add("activo");
      subMenu2.style.animation = "slideLeft 0.5s ease forwards";
      const menu2Title = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
      menu2.querySelector(".current-menu2-title").innerHTML = menu2Title;
      menu2.querySelector(".mobile-menu2-head").classList.add("activo");
    }

    function hideSubMenu2() {
      subMenu2.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => {
        subMenu2.classList.remove("activo");
      }, 300);
      menu2.querySelector(".current-menu2-title").innerHTML = "";
      menu2.querySelector(".mobile-menu2-head").classList.remove("activo");
    }

    window.onresize = function () {
      if (this.innerWidth > 991) {
        if (menu2.classList.contains("activo")) {
          toggleMenu2();
        }

      }
    }





  },

  template: await get_template('./assets/js/view/checkout/home')
}
