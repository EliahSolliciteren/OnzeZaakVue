<template>
  <div :class="classObject" id="geheel">
<div>voorgerecht</div>
    <ul id="menukaart">
<li   v-for="(gerecht,index) in menukaart" :key="gerecht._id" :gerecht="gerecht" ref="gerechtenlijst" >
  {{gerecht.naam}} <br/>{{gerecht.prijs}} euro 
<div v-if="gerecht.aantal>0">  {{gerecht.aantal}}</div>
<button @click="keuze(index)"> + </button>
<button v-if="gerecht.aantal>0" @click="verwijderen(index)">-</button>
</li>
</ul>

</div> 





</template>

<script>



export default {
  data(){
return{}},

 
  props:['menukaart','cat'],

  computed:{
classObject(){
  return {hidden:this.cat!=='alles'&&this.cat!=='voorgerecht'}}
}, 
methods:{

keuze(index)
{

let gerecht=this.menukaart[index]
//console.log()
this.$store.dispatch('Bestelling/toevoegenAanBestelling', gerecht)


},

verwijderen(index){

  let gerecht=this.menukaart[index]
console.log(gerecht)
  this.$store.dispatch('Bestelling/verwijderen', gerecht)

},




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

.hidden{

display:none

}













</style>

