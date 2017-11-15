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
import register from "@/components/register"
import logout from "@/components/logout"
import userprofile from "@/components/userprofile"

Vue.use(vueResource);
Vue.use(vueRouter);
Vue.use(SocialSharing);

Vue.config.productionTip = false


/* eslint-disable no-new */

const routes = [
  {path: "/", redirect: "/home"},
  {path: "/home", component: body},
  {path: "/home/new", component: create},
  {path: "/home/entry/:id", component: blog},
  {path: "/register", component: register},
  {path: "/logout", component: logout},
  {path: "/home/user/:userprofile", component: userprofile}
  
]

const router = new vueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {

    const toArr = to.path.split("/");
    if(toArr.length > 3 && toArr[2] !== "user") {
    
    return { x: 0, y: 600 }
    
    } else {

      return { x: 0, y: 0}

    }
}

});

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
