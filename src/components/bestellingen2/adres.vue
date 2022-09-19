<template>


<div>adres van levering</div>
<div id="adres">
<div v-if="gemeente">gemeente:
 {{gemeente}}</div>
  <div v-else>
<label for="gemeente">gemeente: </label>
 <input @input="storeGemeente"  v-model="gemeente2"/>      
</div>
<div v-if="straat">straat:
 {{straat}}</div>
  <div v-else>
<label for="straat">straat: </label>
 <input @input="storeStraat"  v-model="straat2" />      
</div>
<div v-if="huisnummer">huisnummer:
 {{huisnummer}}</div>
  <div v-else>
<label for="huisnummer">huisnummer</label>
 <input @input="storeHuisnummer"  v-model="huisummer2" />      
</div>
</div>












</template>

<script>
export default{
data(){
return{
//gemeente2:'',
//straat2:'',
//huisnummer2:''



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
{max-width: 8vw;
display:flex;
column-gap:3vh
}





</style>