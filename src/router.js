import { createRouter, createWebHistory } from 'vue-router'
import registreren from '/src/components/klant/registreren.vue'
import bestellen from '/src/components/bestellingen1/bestelling.vue'
import winkelkar from '/src/components/bestellingen2/winkelkar.vue'


const routes=[
    {
    path: '/',
    name: 'Welkom',
    component: bestellen,
    props: true
    
    },
    {
    path: '/bestellen',
    name:'bestellen',
    component:bestellen,
    props:true
    
    },
    {
    path: '/registreren',
    name:'registratie',
    component: registreren,
    props:true
    
    },
    {
      path: '/overzicht',
      name:'winkelkarTijdensBestelling',
      component: winkelkar,
      props:true



    },{
  path: '/winkelkar',
  name:'winkelkarNaBestelling',
  component:winkelkar,
  props:true


  } 

]
    
    const router = createRouter({
        history: createWebHistory(),
        routes
      })
     export default router