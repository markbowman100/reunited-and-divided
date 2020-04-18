import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Richard from '../views/Richard.vue'
import George from '../views/George.vue'
import Mark from '../views/Mark.vue'
import About from '../views/About.vue'
import Episodes from '../views/Episodes.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: About
  },
  {
    path: '/richard',
    name: 'Richard',
    component: Richard
  },
  {
    path: '/george',
    name: 'George',
    component: George
  },
  {
    path: '/mark',
    name: 'Mark',
    component: Mark
  },
  //{
  //  path: '/contact-us',
  //  name: 'Contact Us',
  //  component: About
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //},
  {
    path: '/episodes',
    name: 'All Episodes',
    component: Episodes
  }
]

const router = new VueRouter({
  routes
})

export default router
