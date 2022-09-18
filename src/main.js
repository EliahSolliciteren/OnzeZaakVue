import { createApp, VueElement } from 'vue'
import * as VeeValidate from 'vee-validate'
//import {required} from 'vee-validate/rules'
import persistedStateVuex from "persisted-state-vuex";

import App from './App.vue'
import store from '/src/store/store.js'
import router from '/src/router.js'
import axios from 'axios'
//Vue.Component('Field','Form','FormulateForm' )
createApp(App).use(store).use(router).mount('#app')

//defineRule('required', required)

const dictionary = {
  custom: {
    email: {
      required: ()=> 'Gelieve een geldig email adres op te geven'
    },
    naam: {
      required: () => 'Gelieve je voornaam te geven'
    }, 
    familienaam: {

required:() => 'Gelieve je familienaam te geven'

    }
  }
}


axios.defaults.headers.common['Authorization'] = store.getters["Klant/token"]
console.log('token: '+store.getters)
//axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {

    config.headers = {
        'x-access-token': store.getters["Klant/token"]
     }
  
      return config;
    }, function (error) {
   
       return Promise.reject(error);
    });