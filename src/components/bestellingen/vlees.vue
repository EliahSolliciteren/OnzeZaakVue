<template>


<div>
  
  <div class="categorie">vlees</div>
  <div id="grid">
  
<ul class="menukaart">
 
<li   v-for="(gerecht,index) in menukaart" :key="gerecht._id" :gerecht="gerecht" class="item" >
 <div class="product">{{gerecht.naam}} <br/>{{gerecht.prijs}} euro 
<div v-if="gerecht.aantal>0"> Aantal: {{gerecht.aantal}}</div> 
<div v-else class="onzichtbaar" > Aantal: {{gerecht.aantal}}</div> <br>

</div> 
<div class="aantal">
<button @click="keuze(index)" class="plus"> + </button>
<button v-if="gerecht.aantal>0" @click="verwijderen(index)">-</button>
<button v-else class="onzichtbaar" @click="verwijderen(index)">-</button>

</div>
</li>
</ul>
</div>
</div>







</template>

<script>



export default {
  data(){
return{




}


},

computed:{
classObject(){
  return {hidden:this.cat!=='alles'&&this.cat!=='vlees'}

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
.categorie{

padding-left: 2vw;
padding-top: 2vw;

}
.menukaart{



list-style: none;


}

.grid{
display:flex;
flex-direction:column;
flex-wrap: wrap;

}


.hidden{

display:none

}

.onzichtbaar{
visibility: hidden;

}



.item{
min-width: 25vw;
max-width: 25vw;
min-height: 19vh;
max-height: 19vh;
  padding-left: 2vw;
   padding-right:2vw ;
border: solid black 0.5px;

display:flex;
flex-direction: row;
justify-content: space-around;
}



.product{

display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

}



.aantal{

display:flex;
flex-direction: column;
justify-content: space-around;


}









</style>

