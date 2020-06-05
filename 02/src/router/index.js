import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cartoon from '@/components/cartoon'
import input from '@/components/input'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'input',
      component: input
    }
  ]
})
