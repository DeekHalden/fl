import Vue from 'vue'
import Router from 'vue-router'
import VueCookie from 'vue-cookie'

import Home from '@/components/Home'
import Favorite from '@/components/Favorite'
import Login from '@/components/login-form'
import { getToken } from '@/services/auth'

Vue.use(require('vue-moment'))
Vue.use(Router)
Vue.use(VueCookie)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    // inline guard
    {
      path: '/home',
      component: Home,
      meta: {
        protected: true
      }
    },
    // using meta properties on the route config
    // and check them in a global before hook
    {
      path: '/Favorite',
      component: Favorite,
      meta: {
        protected: true
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = getToken() || ''
  if (to.matched.some(record => record.meta.protected)) {
    if (!token) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
