import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@#/Home'], resolve)
    },
    {
      path: '/clipboard',
      name: 'clipboard',
      component: () => import('@#/Clipboard')
    },
    {
      path: '/photo-preview',
      name: 'photo-preview',
      component: () => import('@#/Photo-preview')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('@#/Swiper')
    }
  ]
})
