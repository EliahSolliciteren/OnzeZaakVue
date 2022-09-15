<template>
  <div is="geheel">
<ul>
<li  v-for="(gerecht,index) in menukaart" :key="gerecht._id" :gerecht="gerecht" ref="gerechtenlijst" >
  {{gerecht.naam}} <br/>{{gerecht.prijs}} euro 
<div v-if="gerecht.aantal>0">  {{gerecht.aantal}}</div>
<button @click="keuze(index)"> + </button>
<button v-if="gerecht.aantal>0" @click="verwijderen(index)">-</button>
</li>
</ul>
<button @click="selectie('drank')">drank</button>
<button @click="selectie('alles')">gehele kaart</button>
<button @click="herbeginnen">Herbegin selectie</button>
</div> 

{{totaal}}  {{categorie}}
</template>

<script>
//import { createDOMCompilerError } from '@vue/compiler-dom';


export default {
  data(){
return{
//menukaart: this.$store.state.Bestelling.menukaart,
    //Zou dit niet bij computed moeten komen??
//menukaart:  this.$store.state.Bestelling.menukaart,

}

  },
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

categorie(){ return this.$store.state.Bestelling.categorie},



  
  menukaart(){
  const categorie= this.categorie 

console.log(categorie)
if(categorie=='alles'){
return this.$store.state.Bestelling.menukaart
}
else

{
let menu=this.$store.state.Bestelling.menukaart
return menu.filter(e=>e.categorie==categorie)
}



}},
  



methods:{

keuze(index)
{

let gerecht=this.menukaart[index]//this.$refs.gerechtenlijst[index]
//console.log()
this.$store.dispatch('Bestelling/toevoegenAanBestelling', gerecht)


},
herbeginnen(){

this.$store.dispatch('Bestelling/herbeginnen')

},
verwijderen(index){

  let gerecht=this.menukaart[index]

  this.$store.dispatch('Bestelling/verwijderen', gerecht)

},




}
  
 
}
</script>

<style scoped>












</style>

