<template>
  <div is="geheel">
<ul id="menukaart">
<li   v-for="(gerecht,index) in menukaart" :key="gerecht._id" :gerecht="gerecht" ref="gerechtenlijst" >
  {{gerecht.naam}} <br/>{{gerecht.prijs}} euro 
<div v-if="gerecht.aantal>0">  {{gerecht.aantal}}</div>
<button @click="keuze(index)"> + </button>
<button v-if="gerecht.aantal>0" @click="verwijderen(index)">-</button>
</li>
</ul>

<input v-model="datum" type="datetime-local"/> <br/>

<button @click="herbeginnen">Herbegin selectie</button>
<button @click="plaatsen">Bestelling plaatsen</button>
</div> 





</template>

<script>
//import { createDOMCompilerError } from '@vue/compiler-dom';

//import router from '/src/router.js'


export default {
  data(){
return{
datum:''
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

}
#menukaart{

display:flex;
flex-wrap: wrap;
list-style: none;


}











</style>

