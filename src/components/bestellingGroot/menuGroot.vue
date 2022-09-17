<template>
    <div id="geheel">
<div id="drank">
<drank/>
</div>
<div id="voorgerecht">
<voorgerecht/>
</div>
<div id="vlees">
<vlees/>
</div>
<div id="vis">
<vis/>
</div>
<div id="nagerecht">
<nagerecht/>
</div>
</div>








</template>

<script>
 import drank from './drank.vue'
 import voorgerecht from './voorgerecht.vue'
import vlees from './vlees.vue'
import vis from './vis.vue'
import nagerecht from './nagerecht.vue'
export default{
   
data(){
return{
datum:''



}},
components:{drank,voorgerecht,vlees,vis,nagerecht},

methods:{


herbeginnen(){

this.$store.dispatch('Bestelling/herbeginnen')

},

plaatsen(){
  console.log(this.datum)
this.$store.dispatch('Bestelling/plaatsen', {totaal: this.totaal, datum: this.datum})
this.$router.push('/winkelkar')







},
created(){
 
 return{
   
   menu: this.$store.dispatch('Bestelling/menukaart')
  
 }

}}}




</script>

<style>

#geheel{
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-template-areas:
"drank vis nagerecht"
"voorgerecht vlees ."

}

#drank{
grid-area:drank

}
#voorgerecht{
grid-area:voorgerecht

}
#vlees{
grid-area:vlees

}
#vis{
grid-area:vis

}
#nagerecht{
grid-area:nagerecht

}



</style>