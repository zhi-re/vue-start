import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Content from '../components/Content'
import Main from '../components/Main'
import NotFound from '../components/NotFound'
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
      redirect: '/content'
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
      path: '*',
      component: NotFound
    }
  ]
})
