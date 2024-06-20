import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

import page_menu from './components/menu/home.js'
Vue.component('c-menu', page_menu)

import page_footer from './components/footer/home.js'
Vue.component('c-footer', page_footer)

import page_form_contact from './components/form/home.js'
Vue.component('c-form_contact', page_form_contact)

import page_carinho from './components/jls/carinho.js'
Vue.component('c-carinho', page_carinho)

import page_loja from './components/jls/loja.js'
Vue.component('c-loja', page_loja)
 
  

import page_home from './view/home/home.js'
Vue.component('p-home', page_home) 

import page_categoriaCad from './view/paginas/categoria_cad.js'
Vue.component('p-categoriaCad', page_categoriaCad)

import page_cadastroProd from './view/paginas/produto_cad.js'
Vue.component('p-cadastroProd', page_cadastroProd)

import page_subcategoriaCad from './view/paginas/subcategoria_cad.js'
Vue.component('p-subcategoriaCad', page_subcategoriaCad)


import page_detalhes from './view/detalhes/home.js'
Vue.component('p-detalhes', page_detalhes)
import page_categoria from './view/categoria/home.js'
Vue.component('p-categoria', page_categoria)


import page_encomendas from './view/paginas/encomenda.js'
Vue.component('p-encomendas', page_encomendas)


import page_servicos_website from './view/paginas/website.js'
Vue.component('p-servicos_website', page_servicos_website)


import page_servicos_loja_virtual from './view/paginas/loja.js'
Vue.component('p-servicos_loja_virtual', page_servicos_loja_virtual)

import page_logotipo from './view/paginas/logotipo.js'
Vue.component('p-logotipo', page_logotipo)

import page_cartoes from './view/paginas/cartoes.js'
Vue.component('p-cartoes', page_cartoes)

import page_flyers from './view/paginas/flyers.js'
Vue.component('p-flyers', page_flyers)


import page_email from './view/paginas/email.js'
Vue.component('p-email', page_email)

import page_email_marketig from './view/paginas/email_marketig.js'
Vue.component('p-email_marketig', page_email_marketig)

import page_gestao_redes_social from './view/paginas/gestao_redes_social.js'
Vue.component('p-gestao_redes_social', page_gestao_redes_social)

import page_identidade from './view/paginas/identidade.js'
Vue.component('p-identidade', page_identidade)

 


import page_servicos from './view/paginas/home.js'
Vue.component('p-servicos', page_servicos)




import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)
 

Vue.use(Router)

 
const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/loja', component: { template: '<c-loja></c-loja>' } },
    { path: '/loja/detalhes', component: { template: '<p-detalhes></p-detalhes>' } },
    { path: '/loja/categoria', component: { template: '<p-categoria></p-categoria>' } },



    
    { path: '/encomenda', component: { template: '<p-encomendas></p-encomendas>' } },
    { path: '/produto/cadastro', component: { template: '<p-cadastroProd></p-cadastroProd>' } },
    { path: '/produto/categoria', component: { template: '<p-categoriaCad></p-categoriaCad>' } },
    { path: '/produto/subcategoria', component: { template: '<p-subcategoriaCad></p-subcategoriaCad>' } },
     
  
    { path: '/criacao-de-sites', component: { template: '<p-servicos_website></p-servicos_website>' } },
    { path: '/criacao-de-loja-virtual', component: { template: '<p-servicos_loja_virtual></p-servicos_loja_virtual>' } },
    { path: '/criacao-de-logotipo', component: { template: '<p-logotipo></p-logotipo>' } },
    { path: '/criacao-de-cartoes', component: { template: '<p-cartoes></p-cartoes>' } },
    { path: '/criacao-flyer-folder', component: { template: '<p-flyers></p-flyers>' } },
    { path: '/email-profissional', component: { template: '<p-email></p-email>' } },
    { path: '/gestao-de-redes-sociais', component: { template: '<p-gestao_redes_social></p-gestao_redes_social>' } },
    { path: '/email-marketing', component: { template: '<p-email_marketig></p-email_marketig>' } },
   
     
    { path: '/criacao-visual', component: { template: '<p-identidade></p-identidade>' } },
     

    { path: '/contato', component: { template: '<p-contato></p-contato>' } },
 
]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()