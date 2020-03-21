import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Middlepage from '@/components/Middlepage'
import Lastpage from '@/components/Lastpage'
import Footer from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/Middlepage',
      name: 'Middlepage',
      component: Middlepage
    },
    {
      path: '/Lastpage',
      name: 'Lastpage',
      component: Lastpage
    },
    {
    path: '/Footer',
    name: 'Footer',
    component: Footer
    }
  ]
})
