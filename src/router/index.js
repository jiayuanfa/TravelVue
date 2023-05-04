import Vue from 'vue'
import Router from 'vue-router'

// @符号表示src文件夹
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'

Vue.use(Router)

// 路由统一放置的位置
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
