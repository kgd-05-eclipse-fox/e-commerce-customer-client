import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login'
import Register from '../views/Register'
import CartPage from '../views/CartPage'
import HistoryPage from '../views/HistoryPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: Login
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: Register
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/history',
    name: 'HistoryPage',
    component: HistoryPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name === 'RegisterPage' || to.name === 'LoginPage') && localStorage.token) next({ name: 'HomePage' })
  else if ((to.name === 'CartPage' || to.name === 'HistoryPage') && !localStorage.token) next({ name: 'LoginPage' })
  else next()
})

export default router
