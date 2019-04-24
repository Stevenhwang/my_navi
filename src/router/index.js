import Vue from 'vue'
import Router from 'vue-router'
import piv from '@/pages/piv/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: piv
    }
  ]
})
