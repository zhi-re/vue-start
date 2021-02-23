<template><!--HTML 代码模板，会替换 < App /> 中的内容-->
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <!--router-link： 默认会被渲染成一个 <a> 标签，to 属性为指定链接 router-view： 用于渲染路由匹配到的组件 -->
    <router-link to="/menu">菜单</router-link>
    <router-link to="/main">首页</router-link>
    <router-link to="/content">内容</router-link>
    <router-link to="/select">选择框</router-link>
    <router-link to="/api">api</router-link>
    <router-view></router-view>
  </div>
</template>
<!--
导出 NodeJS 对象，作用是可以通过 import 关键字导入
name: 'App'：定义组件的名称
components: { HelloWorld }：定义子组件
-->
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
