import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/styles/reset.scss'
import Nav from '@/components/Nav.vue';
import Icon from '@/components/Icon.vue';
import Layout from '@/components/Layout.vue';


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

if(document.documentElement.clientWidth>500){
  window.alert('请使用手机打开本页面，以保证显示效果');
  const img=document.createElement('img');
  img.src='./qrcode.png';
  img.style.position='fixed';
  img.style.left='50%';
  img.style.top='50%';
  img.style.transform='translate(-50%,-50%)';
  img.style.boxShadow='0 0 10px rgba(0,0,0,0.25)';
  img.style.width='30%';
  img.style.height='width';
  document.body.appendChild(img)
}