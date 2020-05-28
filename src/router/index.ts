import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact Us',
    component: Contact
   }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
