import { createApp } from 'vue'
//import {ValidationProvider, extend, defineRule} from 'vee-validate'
//import {required} from 'vee-validate/rules'
import App from './App.vue'
import store from '/src/store/store.js'
import router from '/src/router.js'
import axios from 'axios'
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


axios.defaults.headers.common['Authorization'] = store.state.token
//axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {
    config.headers = {
        'x-access-token': store.state.token
     }
  
      return config;
    }, function (error) {
   
       return Promise.reject(error);
    });