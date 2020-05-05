import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//引入elementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入Vue-resource组件
import VueResource from 'vue-resource';
Vue.use(VueResource);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')