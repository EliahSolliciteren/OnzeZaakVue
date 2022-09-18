<template>


<div :class="classObject">
  
  <div>drank</div>
<ul id="menukaart">
<li   v-for="(gerecht,index) in menukaart" :key="gerecht._id" :gerecht="gerecht" class="item" >
  {{gerecht.naam}} <br/>{{gerecht.prijs}} euro 
<div v-if="gerecht.aantal>0"> Aantal: {{gerecht.aantal}}</div> <br>
<button @click="keuze(index)" class="plus"> + </button>
<button v-if="gerecht.aantal>0" @click="verwijderen(index)">-</button>
</li>
</ul>
</div>

{{eenheid}}





</template>

<script>



export default {
  data(){
return{




}


},

computed:{
classObject(){
  return {hidden:this.cat!=='alles'&&this.cat!=='drank'}

}},
 //ternary operator was ook mogelijk geweest, maar eventuaal nog
//een klasse voor als je bij this.cat=='drank' anders wilt reageren 

  props:['menukaart', 'cat'],

  
methods:{

keuze(index)
{

let gerecht=this.menukaart[index]

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

#menukaart{

display:flex;
flex-wrap: wrap;
list-style: none;


}


.hidden{

display:none

}

.item{

  margin-left: 2vw;
   margin-right:2vw ;
border: solid black 0.5px;
margin-bottom: 2vw;


}

.plus{

margin-bottom: 1vh;
margin-right: 1.5vw;


}









</style>

