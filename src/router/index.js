import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestElement from '../components/element/testElement'
import TestElement2 from '../components/element/testElement2';
import TestElementMenu from '../components/element/testElementMenu';
import Main from '../components/element/main'

Vue.use(Router);

export default new Router({
  //默认为hash，也就是链接中带"#"
  mode: 'history',
  routes: [
    {
      mode: 'history',
      path: '/',
      component: HelloWorld
    },
    {
      mode: 'history',
      path: '/testElement',
      component: TestElement
    },
    {
      mode: 'history',
      path: '/testElement2',
      component: TestElement2
    },
    {
      mode: 'history',
      path: '/testElementMenu',
      component: TestElementMenu
    },
    {
      mode: 'history',
      path: '/main',
      component: Main
    }
  ]
})
