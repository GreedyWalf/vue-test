// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui前端框架
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;

//暂时设置加载全部element-ui插件
Vue.use(Element);
Vue.use(Element, { size: 'small', zIndex: 3000 });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});


