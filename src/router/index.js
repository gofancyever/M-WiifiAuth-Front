import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Login from '@/components/Login'
import Home from '@/components/Home'
Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path :'/login',
      name:'Login',
      component: Login
    },
    {
      path: '/home',
      name:'Home',
      component: Home
    }
  ]
})
