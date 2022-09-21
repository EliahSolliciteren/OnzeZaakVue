<template>

<overzicht :totaal="totaal"></overzicht>

<span class="validatie" v-if="Validatiefouten.gerechten">{{Validatiefouten.gerechten}}</span>
<div class="marge">
<adres/>
<div class="validatie" v-if="Validatiefouten.adres">{{Validatiefouten.adres}}</div>


<div v-if="this.$store.getters['Bestelling/datum']">bestelling wordt geleverd op: {{datum2}}</div>
<input  class="datum" @input="datumOpslaan" v-model="datum3" v-else type="datetime-local"/>
<span class="validatie" v-if="Validatiefouten.datum">{{Validatiefouten.datum}}</span>
<br>
<button class="bevestigen" @click="bevestigen">Bevestig de bestelling</button>

<button class="corrigeren" @click="this.$router.push('/bestellen')">Toch nog iets corrigeren?</button>

</div>
{{now}}

</template>

<script>
    


import store from '@/store/store'
import adres from './adres.vue'
import overzicht from './overzicht.vue'
    export default{
data(){
return{
datum3:false,   
datum2:false,
Validatiefouten:{datum:'',gerechten:'',adres:'' },
validatiefout:false

}
},
computed:{


datum2(){
const datum2=this.$store.getters["Bestelling/datum"]


let dag=datum2.substring(8,10)
let maand=datum2.substring(5,7)
let uur = datum2.substring(11,17)
console.log('dag:' + dag)
console.log('maand:' + maand)

console.log(datum2)
if(!uur||!maand||!dag){
    return false
}

return dag +'/' + maand +' rond '+ uur 
},



 totaal(){
const bestelling=this.$store.getters["Bestelling/bestelling"]
let totaal=0
if (bestelling.length>0){
bestelling.forEach(gerecht=>{
totaal=totaal+gerecht.prijs*gerecht.aantal
//totaal=totaal +gerecht*prijs+gerecht*aantal
if(this.$store.getters["Klant/klant"]){totaal=(Math.round(0.9*totaal*100)/100)}
this.$store.dispatch['Bestelling/totaal', (this.totaal)]

})}
else{
  

totaal=0 
 this.$store.dispatch['Bestelling/totaal', this.totaal]
}
return totaal


    },


},


methods:{

datumOpslaan(){
this.$store.dispatch('Bestelling/tijd', this.datum3)
console.log("datum: "+this.datum3)



},    
bevestigen() 
{
   this.Validatiefouten={datum:'',gerechten:'',adres:'' }
   this.validatiefout=false

if (!store.getters["Bestelling/datum"]){
   
this.Validatiefouten.datum='Gelieve de datum na te kijken'
this.validatiefout=true

}else{
if (-Date.now()+Date.parse(this.$store.getters["Bestelling/datum"])<360000){
   
   this.Validatiefouten.datum='Gelieve een uur voor de leverdatum te bestellen'
   this.validatiefout=true
   this.$store.dispatch('Bestelling/tijd','')
}
}
if (this.totaal==0){
    
    this.Validatiefouten.gerechten='Je hebt geen gerechten geselecteerd'
this.validatiefout=true; console.log('gezocht:'+this.$store.getters["Bestelling/adres"].gemeente)
}else{store.dispatch('Bestelling/totaal',this.totaal)}

//console.log(this.Validatiefouten) 

if(this.$store.getters["Klant/klant"]){
if ((!this.$store.getters["Klant/klant"].gemeente && !this.$store.getters["Bestelling/adres"].gemeente)||(!this.$store.getters["Klant/klant"].straat && !this.$store.getters["Bestelling/adres"].straat)||(!this.$store.getters["Klant/klant"].huisnummer && !this.$store.getters["Bestelling/adres"].huisnummer)) {
 
    this.Validatiefouten.adres='We kunnen geen bestelling leveren zonder een volledig adres'
this.validatiefout=true
console.log(this.Validatiefouten)
}}else{
    if ( !this.$store.getters["Bestelling/adres"].gemeente|| !this.$store.getters["Bestelling/adres"].straat||(!this.$store.getters["Bestelling/adres"].huisnummer)) {
 
 this.Validatiefouten.adres='We kunnen geen bestelling leveren zonder een volledig adres'
this.validatiefout=true
console.log(this.Validatiefouten)




}}




if (this.validatiefout==false){

this.$store.dispatch('Bestelling/bevestigen', {adres:{gemeente:this.gemeente,straat:this.straat,huisnummer:this.huisnummer}})
this.$router.push('/smakelijk')
}



}






},

components:{
adres, overzicht



}


}
</script>

<style scoped>
*{

font-size:1.4rem;
background: lightskyblue

}
.validatie{
color:red;
margin-top: 1vh;
margin-bottom: 2vh;
}

.marge{

margin-left: 3vw;



}

.datum{

margin-top: 3vh;
margin-bottom: 6vh;
background-color: white;


}

.bevestigen{

margin-right:2vw

}







</style>