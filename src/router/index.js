import Vue from 'vue'
import Router from 'vue-router'
import leftContent from '@/components/leftContent'
import getstart from '@/components/getstart'
import api from '@/components/API'
import about from '@/components/about'
import signup from '@/components/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: leftContent
    },
    {
      path: '/getstart',
      name: 'getstart',
      component: getstart
    },
    {
      path: '/api',
      name: 'api',
      component: api
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: signup
    }
  ]
})
