import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '../views/Welcome.vue'

import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Welcome
}, {
    path: '/details',
    component: Details
}]

const router = new VueRouter({
    // mode: 'hash',
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
