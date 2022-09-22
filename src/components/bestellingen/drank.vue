<template>


<div>
  
  <div class="categorie">drank</div>
  <div id="grid">
  
<ul class="menukaart">
 
<li   v-for="(gerecht,index) in menukaart" :key="gerecht._id" :gerecht="gerecht" class="item" >
 <div class="product">{{gerecht.naam}} <br>{{gerecht.prijs}} euro <br>
<span :class="(gerecht.aantal>0)?'':'onzichtbaar'"> Aantal: {{gerecht.aantal}}</span> 
</div>
<div class="aantal">
<button @click="keuze(index)" class="plus"> + </button>
<button :class="(gerecht.aantal>0)?'':'onzichtbaar'" @click="verwijderen(index)">-</button>

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


},




 //ternary operator was ook mogelijk geweest, maar eventuaal nog
//een klasse voor als je bij this.cat=='drank' anders wilt reageren 

  props:['menukaart', 'cat'],

  
methods:{

keuze(index)
{

let gerecht=this.menukaart[index]

this.$store.dispatch('Bestelling/toevoegenAanBestelling', gerecht)
this.$forceUpdate()

},

verwijderen(index){

  let gerecht=this.menukaart[index]
console.log(gerecht)
  this.$store.dispatch('Bestelling/verwijderen', gerecht)

},






  



},
watch:{
  gerecht(oud,nieuw){console.log('!!!')}
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

/*display:none*/
display: none;
}

.onzichtbaar{
visibility: hidden;

}



.item{
min-width: 25vw;
max-width: 25vw;
min-height: 19vh;
max-height: 19vh;
  margin-left: 3vw;
   margin-right:2vw ;
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

#grid{

margin-left: 1vw;


}









</style>

