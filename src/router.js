import { createRouter, createWebHistory } from 'vue-router'
import registreren from '/src/components/klant/registreren.vue'
import winkelkar from '/src/components/bestellingen2/winkelkar.vue'
import smakelijk from '/src/components/bestellingen2/smakelijk.vue'
import categorie from '/src/components/bestellingen/categorie.vue'
import welkom from '/src/components/welkom/welkom.vue'
import bestellen from '/src/components/bestellingen/bestelling.vue'
import bronnen from '/src/components/welkom/bronnen.vue'

const routes=[
    {
    path: '/',
    name: 'Welkom',
    components:{ default:welkom,links:bronnen},
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

  path:'/bestellen',
  name:'bestellen',
  components:{ default:bestellen,
    links:categorie},
  props:true



}/*,{
path:'*',
name:'HTTP404',
components:{ default:welkom,links:bronnen},
props:true
}*/



]
    
    const router = createRouter({
        history: createWebHistory(),
        routes
      })
     export default router