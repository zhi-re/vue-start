// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  //查找 index.html 中 id 为 app 的元素
  el: '#app',
  // 配置路由
  router,
  //引入组件，使用的是 import App from './App' 定义的 App 组件;
  components: {App},
  //模板，会将 index.html 中替换
  template: '<App/>',
  render: h => h(App)
});

