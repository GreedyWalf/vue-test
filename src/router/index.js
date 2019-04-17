import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestElement from '@/components/element/testElement'

Vue.use(Router);

export default new Router({
  //默认为hash，也就是链接中带"#"
  mode: 'history',
  routes: [
    {
      mode: 'history',
      path: '/',
      component: HelloWorld
    }, {
      mode: 'history',
      path: '/testElement',
      component: TestElement
    }
  ]
})
