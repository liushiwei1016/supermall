import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.scss'
import 'mint-ui/lib/style.css'
import '@/assets/js/rem.js'

import {Swipe, SwipeItem} from 'mint-ui'
//导入自定义插件toast(消息弹窗)
import toast from 'components/content/toast'
//移动端300毫秒延迟
import fastclick from 'fastclick'
//导入图片懒加载
import VueLazyload from 'vue-lazyload'
//使用图片懒加载
Vue.use(VueLazyload,{
  //添加懒加载时的占位图
  loading:require('./assets/images/common/placeholder.png')
});

fastclick.attach(document.body);

Vue.use(toast);


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
