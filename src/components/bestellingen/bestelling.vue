<template>
  <div :class="(categorie=='alles')?'geheel':''">
    <div :class=classObjectD>
 <drank :menukaart="drank" :cat="categorie"></drank>     
    </div>
<div :class=classObjectVoorgerecht>
<voorgerecht :menukaart="voorgerecht" :cat="categorie"></voorgerecht>
</div>
<div :class=classObjectVlees><vlees :menukaart="vlees" :cat="categorie"></vlees>
</div>

<div :class=classObjectVis>
<vis :menukaart="vis" :cat="categorie"></vis>
</div>
<div :class=classObjectNagerecht>
<nagerecht :menukaart="nagerecht" :cat="categorie"></nagerecht>
</div>
<div id="background"></div>
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
  //loggen: console.log(this.$refs.gerechtenlijst/*.innerText*/)

}

  },
  computed:{
    /*
totaal(){
const bestelling=this.$store.getters["Bestelling/bestelling"]
let totaal=0
if (bestelling.length>0){
bestelling.forEach(gerecht=>{
totaal=totaal+gerecht.prijs*gerecht.aantal




})}
else{
totaal=0
}
return totaal




},*/
bestelling(){
return this.$store.getters["Bestelling/bestelling"]


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

},
classObjectD(){
  return {hidden:this.categorie!=='alles'&&this.categorie!=='drank',
  drank:this.categorie=='alles'&&this.categorie!=='drank',
  alleen:this.categorie=='drank'

}
},
classObjectVis(){
  return {hidden:this.categorie!=='alles'&&this.categorie!=='vis',
  vis:this.categorie=='alles'&&this.categorie!=='vis',
  alleen:this.categorie=='vis'

}
},
classObjectVlees(){
  return {hidden:this.categorie!=='alles'&&this.categorie!=='vlees',
  vlees:this.categorie=='alles'&&this.cat!=='vlees',
  alleen:this.categorie=='vlees'

}
},
classObjectVoorgerecht(){
  return {hidden:this.categorie!=='alles'&&this.categorie!=='voorgerecht',
  voorgerecht:this.categorie=='alles'&&this.categorie!=='voorgerecht',
  alleen:this.categorie=='voorgerecht'

}
},
classObjectNagerecht(){
  return {hidden:this.categorie!=='alles'&&this.categorie!=='nagerecht',
  nagerecht:this.categorie=='alles'&&this.categorie!=='nagerecht',
  alleen:this.categorie=='nagerecht'

}
},





















  



methods:{

keuze(index)
{

let gerecht=this.menukaart[index]//this.$refs.gerechtenlijst[index]
//console.log()
this.$store.dispatch('Bestelling/toevoegenAanBestelling', gerecht)


},

verwijderen(index){

  let gerecht=this.menukaart[index]
console.log(gerecht)
  this.$store.dispatch('Bestelling/verwijderen', gerecht)

}






}}}





  
 

</script>

<style scoped>
*{
height: 100%;
width: 100%;
  font-size:1.4rem;
color: white;
background-color: grey;
/*font-family...*/
}
.menukaart{

display:flex;
flex-wrap: wrap;
list-style: none;


}

.aantal{

display: flex;
flex-direction: row;

}

.geheel{

display: grid;
grid-template-areas:
"drank vis nagerecht"
"voorgerecht vlees background"

}


.drank{

grid-area:drank;

}
.voorgerecht{

grid-area:voorgerecht;

}

.vlees{

grid-area:vlees;

}
.vis{

grid-area:vis;

}

.nagerecht{

grid-area:nagerecht;

}
.hidden{

  display:none
}



#background{

  background-color: grey;
}

@media only screen and (max-width: 900px) {
*{font-size:1rem} /*overgaan op een lijst knoppen er onder ipv ernaast*/
} /* aanmelden 1 enkele button veranderen. Bij klikken een aparte component. */

</style>

