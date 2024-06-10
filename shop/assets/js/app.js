import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

import page_menu from './components/menu/home.js'
Vue.component('c-menu', page_menu)

import page_footer from './components/footer/home.js'
Vue.component('c-footer', page_footer)

import page_form_contact from './components/form/home.js'
Vue.component('c-form_contact', page_form_contact)
 




import page_loja from './components/jls/loja.js'
Vue.component('c-loja', page_loja)
 


import page_home from './view/home/home.js'
Vue.component('p-home', page_home) 
import page_detalhes from './view/detalhes/home.js'
Vue.component('p-detalhes', page_detalhes)
import page_categoria from './view/categoria/home.js'
Vue.component('p-categoria', page_categoria)


import page_checkout_hospedagem from './view/checkout/hospedagem.js'
Vue.component('p-checkout_hospedagem', page_checkout_hospedagem)

import page_checkout from './view/checkout/home.js'
Vue.component('p-checkout', page_checkout)

import page_checkout_website from './view/checkout/website.js'
Vue.component('p-checkout_website', page_checkout_website)

 
import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)
 

Vue.use(Router)

 
const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/loja', component: { template: '<c-loja></c-loja>' } },
    { path: '/loja/detalhes', name:"detalhes", component: { template: '<p-detalhes></p-detalhes>' } },
    { path: '/loja/detalhes/:id',  name:"novorota", component: { template: '<p-detalhes></p-detalhes>' } },
    { path: '/loja/categoria', name:"categoria", component: { template: '<p-categoria></p-categoria>' } },
    { path: '/loja/checkout', component: { template: '<p-checkout></p-checkout>' } },
 

    { path: '/hospedagem', component: { template: '<p-checkout_hospedagem></p-checkout_hospedagem>' } },
    { path: '/criacao-de-sites',  component: { template: '<p-checkout_website></p-checkout_website>' } }, 
   
      
     
    { path: '/contato', component: { template: '<p-contato></p-contato>' } },
 
]

const router = new Router({ routes })

new Vue({
    router,
    data: {},
    async mounted() {
 
    }

}).$mount('#app')

;(async () => { })()