import Vue from 'vue'
import Router from 'vue-router'
import body from '@/components/body'
import create from '@/components/create'
import blog from '@/components/blog'

Vue.use(Router)

export default new Router({
  mode: history,
  routes: [
    {path: "/", redirect: "/home"},
    {path: "/home", component: body},
    {path: "/home/new", component: create},
    {path: "/home/blog/:id", component: blog}
  ]
})
