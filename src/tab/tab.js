import Vue from 'vue';
import App from './App';
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

Vue.component("icon", Icon);

new Vue({
  el: '#app',
  render: h => h(App)
});
