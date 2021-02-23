import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Content from '../components/Content'
import Main from '../components/Main'
import NotFound from '../components/NotFound'
import Select from '../components/Select'
import Menu from '../components/Menu'
import Api from '../components/Api'
Vue.use(Router)

export default new Router({
  // 路由模式有两种：
  // hash：路径带 # 符号，如 http://localhost/#/login
  // history：路径不带 # 符号，如 http://localhost/login
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      redirect: '/menu'
    },
    {
      // 路由路径
      path: '/content',
      // 路由名称
      name: 'content',
      // 跳转到组件
      component: Content
    },
    {
      // 路由路径
      path: '/main',
      // 路由名称
      name: 'main',
      // 跳转到组件
      component: Main
    },
    {
      // 路由路径
      path: '/select',
      // 路由名称
      name: 'select',
      // 跳转到组件
      component: Select
    },
    {
      // 路由路径
      path: '/menu',
      // 路由名称
      name: 'menu',
      // 跳转到组件
      component: Menu
    },
    {
      // 路由路径
      path: '/api',
      // 路由名称
      name: 'api',
      // 跳转到组件
      component: Api
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
