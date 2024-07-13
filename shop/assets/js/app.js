import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

import page_menu from './components/menu/home.js'
Vue.component('c-menu', page_menu)
import page_submenu from './components/menu/submenu.js'
Vue.component('c-submenu', page_submenu)

import page_footer from './components/footer/home.js'
Vue.component('c-footer', page_footer)

 




import page_login from './components/jls/login.js'
Vue.component('c-login', page_login)
import page_cadastro from './components/jls/cadastro.js'
Vue.component('p-cadastro', page_cadastro)
 
import page_escolhe from './components/jls/escolhe.js'
Vue.component('c-escolhe', page_escolhe)


import page_home from './view/home/home.js'
Vue.component('p-home', page_home) 
import page_detalhes from './view/detalhes/home.js'
Vue.component('p-detalhes', page_detalhes)
import page_categoria from './view/categoria/home.js'
Vue.component('p-categoria', page_categoria)


import page_encomenda from './view/checkout/encomenda.js'
Vue.component('p-encomenda', page_encomenda)

import page_checkout from './view/checkout/home.js'
Vue.component('p-checkout', page_checkout)

import page_checkout_website from './view/checkout/website.js'
Vue.component('p-checkout_website', page_checkout_website)

 

 

Vue.use(Router)

 
const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/login', component: { template: '<c-login></c-login>' } },
    { path: '/cadastro', component: { template: '<p-cadastro></p-cadastro>' } }, 
    

    //{ path: '/loja/detalhes', name:"detalhes", component: { template: '<p-detalhes></p-detalhes>' } },
    { path: '/loja/detalhes/:id',  name:"detalhes", component: { template: '<p-detalhes></p-detalhes>' } },
    { path: '/loja/categoria/:id', name:"categoria", component: { template: '<p-categoria></p-categoria>' } },
    { path: '/loja/checkout', component: { template: '<p-checkout></p-checkout>' } },
    { path: '/loja/encomenda', component: { template: '<p-encomenda></p-encomenda>' } },

   
    { path: '/criacao-de-sites',  component: { template: '<p-checkout_website></p-checkout_website>' } }, 
   
      
     
 
]

const router = new Router({ routes })

new Vue({
    router,
    data: {},
    async mounted() {
 
    }

}).$mount('#app')

;(async () => { })()