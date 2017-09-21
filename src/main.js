// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import vueRouter from "vue-router"
import vueResource from "vue-resource"
import SocialSharing from 'vue-social-sharing'


import body from "@/components/body"
import create from "@/components/create"
import blog from "@/components/blog"

Vue.use(vueResource);
Vue.use(vueRouter);
Vue.use(SocialSharing);

Vue.config.productionTip = false

/* eslint-disable no-new */

const routes = [
  {path: "/", redirect: "/home"},
  {path: "/home", component: body},
  {path: "/home/new", component: create},
  {path: "/home/blog/:id", component: blog}
]

const router = new vueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
