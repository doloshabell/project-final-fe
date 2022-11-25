import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("nama")) {
      next({
        path: "/login",
      });
    } else if (localStorage.getItem("nama")) {
      next();
    }
  } else if (to.matched.some((record) => record.meta.alreadyLogged)) {
    if (localStorage.getItem("nama")) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
