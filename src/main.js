import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import wares from 'components/wares/wares';
import comments from 'components/comments/comments';
import sellers from 'components/sellers/sellers';

// 导入公用的stylus样式,index.styl的作用加载其它stylus文件
import './common/stylus/index.styl';

// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// });

//  使用vue router
Vue.use(VueRouter);

// 使用vue resource
Vue.use(VueResource);

// 需要有一个根组件
let app = Vue.extend(App);

// 新建一个vue-router实例
let router = new VueRouter({
    'linkActiveClass': 'active',
    hashbang: false,
    history: true
});
router.map({
    '/wares': {
        component: wares
    },
    '/comments': {
        component: comments
    },
    '/sellers': {
        component: sellers
    }
});

// 启动路由
router.start(App, '#app');
// 路由一开始的跳转地址
router.go('/wares');