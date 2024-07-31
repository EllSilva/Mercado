import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

import page_menu from './components/menu/home.js'
Vue.component('c-menu', page_menu)

import page_footer from './components/footer/home.js'
Vue.component('c-footer', page_footer)
 

import page_home from './view/home/home.js'
Vue.component('p-home', page_home) 
import page_privacidade from './view/privacidade/home.js'
Vue.component('p-privacidade', page_privacidade)
 
Vue.use(Router)
 
const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/loja', component: { template: '<c-loja></c-loja>' } },
    { path: '/politica-privacidade', component: { template: '<p-privacidade></p-privacidade>' } },
]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()