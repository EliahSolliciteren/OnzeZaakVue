import { createRouter, createWebHistory } from 'vue-router'
import registreren from '/src/components/klant/registreren.vue'
import bestellen from '/src/components/bestellingen1/bestelling.vue'
import winkelkar from '/src/components/bestellingen2/winkelkar.vue'
import smakelijk from '/src/components/bestellingen2/smakelijk.vue'
import categorie from '/src/components/test/categorie.vue'
import welkom from '/src/components/welkom/welkom.vue'
//import banner1 from '/src/components/welkom/bannerRegistreren.vue'
//import banner2 from '/src/components/welkom/bannerVers.vue'
//import banner3 from '/src/components/welkom/bannerPromotie.vue'
import test from '/src/components/test/bestelling.vue'


const routes=[
    {
    path: '/',
    name: 'Welkom',
    component: welkom,
    props: true
    
    },
    {
    path: '/bestellen',
    name:'bestellen',
    components:{
      
      default:bestellen,
      links: categorie
    
    },
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


  } ,




  {
path:'/smakelijk',
name:'smakelijk',
component: smakelijk,
props:true


  },{

  path:'/test',
  name:'test',
  components:{ default:test,
    links:categorie},
  props:true



}


]
    
    const router = createRouter({
        history: createWebHistory(),
        routes
      })
     export default router