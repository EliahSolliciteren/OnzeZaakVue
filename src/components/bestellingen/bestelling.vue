<template>
  <div id="geheel">
<drank :menukaart="drank" :cat="categorie"></drank>
<voorgerecht :menukaart="voorgerecht" :cat="categorie"></voorgerecht>
<vlees :menukaart="vlees" :cat="categorie"></vlees>
<vis :menukaart="vis" :cat="categorie"></vis>
<nagerecht :menukaart="nagerecht" :cat="categorie"></nagerecht>


<input v-model="datum" type="datetime-local"/> <br/>

<button @click="herbeginnen">Herbegin selectie</button>
<button @click="plaatsen">Bestelling plaatsen</button>
</div> 





</template>

<script>

import drank from './drank.vue'
import vlees from './vlees.vue'
import vis from './vis.vue'
import voorgerecht from './voorgerecht.vue'
import nagerecht from './nagerecht.vue'

export default {
  data(){
return{
datum:''
}

  },
  components: {drank,vlees,vis,nagerecht,voorgerecht},

  created(){
 
return{
  
  menu: this.$store.dispatch('Bestelling/menukaart')
 
}





  },
  mounted(){
return {
  loggen: console.log(this.$refs.gerechtenlijst/*.innerText*/)

}

  },
  computed:{
totaal(){
const bestelling=this.$store.state.Bestelling.bestelling
let totaal=0
if (bestelling.length>0){
bestelling.forEach(gerecht=>{
totaal=totaal+gerecht.prijs*gerecht.aantal
//totaal=totaal +gerecht*prijs+gerecht*aantal



})}
else{
totaal=0
}
return totaal




},

categorie(){ return this.$store.getters["Bestelling/categorie"]



},
  menukaart(){
  
return this.$store.getters["Bestelling/menukaart"]




},


drank(){
  let menu=this.$store.state.Bestelling.menukaart
return menu.filter(e=>e.categorie=='drank') 

},

voorgerecht(){
  let menu=this.$store.state.Bestelling.menukaart
return menu.filter(e=>e.categorie=='voorgerecht') 

},

vlees(){
  let menu=this.$store.state.Bestelling.menukaart
return menu.filter(e=>e.categorie=='vlees') 

},

vis(){
  let menu=this.$store.state.Bestelling.menukaart
return menu.filter(e=>e.categorie=='vis') 

},

nagerecht(){
  let menu=this.$store.state.Bestelling.menukaart
return menu.filter(e=>e.categorie=='nagerecht') 

}

/*eenheid(){ return this.$store.getters["Bestelling/bestelling"]},*/
}, 

/*watch:{
eenheid(){
this.menukaart=this.$store.getters["Bestelling/menukaart"]
*/












  



methods:{

keuze(index)
{

let gerecht=this.menukaart[index]//this.$refs.gerechtenlijst[index]
//console.log()
this.$store.dispatch('Bestelling/toevoegenAanBestelling', gerecht)


},
herbeginnen(){

this.$store.dispatch('Bestelling/herbeginnen')
this.$store.dispatch('Bestelling/menukaart')
},
verwijderen(index){

  let gerecht=this.menukaart[index]
console.log(gerecht)
  this.$store.dispatch('Bestelling/verwijderen', gerecht)

},
plaatsen(){
  console.log(this.datum)
this.$store.dispatch('Bestelling/plaatsen', {totaal: this.totaal, datum: this.datum})
this.$router.push('/winkelkar')






}





}




}
  
 

</script>

<style scoped>
*{

  font-size:1.3rem;
color: red;
}
#menukaart{

display:flex;
flex-wrap: wrap;
list-style: none;


}











</style>

