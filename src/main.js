import { createApp } from 'vue'
import * as VeeValidate from 'vee-validate'
//import {required} from 'vee-validate/rules'
import persistedStateVuex from "persisted-state-vuex";

import App from './App.vue'
import store from '/src/store/store.js'
import router from '/src/router.js'
import axios from 'axios'

createApp(App).use(store).use(router).mount('#app')





axios.defaults.headers.common['Authorization'] = store.getters["Klant/token"]
console.log('token: '+ store.getters["Klant/token"])
//axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {

    config.headers = {
        'x-access-token': store.getters["Klant/token"]
     }
  
      return config;
    }, function (error) {
   
       return Promise.reject(error);
    });