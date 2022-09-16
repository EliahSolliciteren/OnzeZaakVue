<template>


<div>adres van levering</div>
<div id="adres">
<div>gemeente:</div>
<div  v-if="gemeente">{{gemeente}}</div>
<input @input="storeGemeente" v-else v-model="gemeente2"/>      
<div>straat:</div>
<div v-if="straat">{{straat}}</div>
<input @input="storeStraat" v-else v-model="straat2"/> 
<div>huisnummer:</div>
<div v-if="huisnummer">{{huisnummer}}</div>
<input @input="storeHuisnummer" v-else v-model.number="huisnummer2"/> 
<br/><span v-if="(!this.$store.state.Klant.klant)">Wij leren u graag beter kennen: log alstublief in of maak een account aan</span>
</div>












</template>

<script>
export default{
data(){
return{
gemeente2:'',
straat2:'',
huisnummer2:''



}



},
computed:{
gemeente(){
    if (this.$store.state.Klant.klant)
return this.$store.state.Klant.klant.gemeente 
else{
    return null
} 
},
straat(){
    if (this.$store.state.Klant.klant)
  return  this.$store.state.Klant.klant.straat 
  else{return null}
},
huisnummer(){
    if (this.$store.state.Klant.klant)
  return  this.$store.state.Klant.klant.huisnummer 
  else{return null}
   
}
},



methods:{
   
 storeGemeente()
  {return this.$store.dispatch('Bestelling/gemeente', this.gemeente2)},
 storeStraat()
 { return this.$store.dispatch('Bestelling/straat', this.straat2)},
 storeHuisnummer()
    { return this.$store.dispatch('Bestelling/huisnummer', this.huisnummer2 )
 }}

    


  


   }













</script>
<style scoped>

#adres{

display:flex;
flex-direction:column;
padding-top: 1rem;
}

input
{max-width: 8vw;}






</style>