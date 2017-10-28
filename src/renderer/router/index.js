import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/canvas',
      name: 'canvas-try',
      component: require('@/components/Try/Canvas').default
    },
    {
      path: '/opencv',
      name: 'opencv-try',
      component: require('@/components/Try/Opencv').default
    },
    {
      path: '/form',
      name: 'form-try',
      component: require('@/components/Try/Form').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
