import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Richard from '../views/Richard.vue'
import George from '../views/George.vue'
import Mark from '../views/Mark.vue'
import About from '../views/About.vue'
import Episodes from '../views/Episodes.vue'
//import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: About
  },
  {
    path: '/episodes',
    name: 'All Episodes',
    component: Episodes
  }
  /*
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: Contact
   }
   */
]

const router = new VueRouter({
  routes
})

export default router
