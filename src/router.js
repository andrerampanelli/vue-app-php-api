import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login'
import Home from './views/Home'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        redirect: {
          name: 'login'
        }
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },
    ]
  })