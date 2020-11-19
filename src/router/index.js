import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Product from '../views/Product.vue'
import History from '../views/History.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'Product',
        component: Product
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/history',
        name: 'History',
        component: History
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('../views/RegisterPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
