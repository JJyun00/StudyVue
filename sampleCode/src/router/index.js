import Vue from 'vue'
import VueRouter from 'vue-router'
import info from '../components/infoPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        // redirect: ''
        name: 'home',
        component: () => import('../components/menuPage1.vue')
    },{
        path: '/home',
        name: 'home',
        component: () => import('../components/menuPage1.vue')
    },{
        path: '/about',
        name: 'about',
        component: () => import('../components/menuPage2.vue')
    },{
        path: '/info',
        name: 'info',
        component: info
    },{
        path: '/hello',
        name: 'hello',
        component: () => import('../components/HelloWorld.vue')
    }]
})