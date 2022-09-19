<template>

<overzicht/>

<span v-if="Validatiefouten.gerechten">{{Validatiefouten.gerechten}}</span>
<div class="marge">
<adres/>
<div v-if="Validatiefouten.adres">{{Validatiefouten.adres}}</div>


<div v-if="datum2">bestelling wordt geleverd op: {{datum2}}</div>
<input @input="this.datum2=true" v-else type="datetime-local"/>
<span v-if="Validatiefouten.datum">{{Validatiefouten.datum}}</span>
<br>
<button @click="bevestigen">Bevestig de bestelling</button>

{{totaal}}
</div>


</template>

<script>
    

import adres from './adres.vue'
import overzicht from './overzicht.vue'
    export default{
data(){
return{
datum3:'',   
datum2:false,
Validatiefouten:{datum:'',gerechten:'',adres:'' },
validatiefout:false

}
},
computed:{

datum2(){
const datum2=this.$store.state.Bestelling.datum
let dag=datum2.substring(8,10)
let maand=datum2.substring(5,7)
let uur = datum2.substring(11,17)
console.log('dag:' + dag)
console.log('maand:' + maand)
//this.dag2=dag
//this.maand2=maand
//this.uur2=uur
if(uur&&maand&&uur){this.datum2=true

return dag +'/' + maand +' rond '+ uur 
}
else return


},


},
methods:{
bevestigen() 
{
   this.Validatiefouten={datum:'',gerechten:'',adres:'' }
   this.validatiefout=false

if (!this.datum2){
this.Validatiefouten.datum='Gelieve de datum na te kijken'
this.validatiefout=true

}
if (this.$store.getters['Bestelling/totaal']=0){
    
    this.Validatiefouten.gerechten='Je hebt geen gerechten geselecteerd'
this.validatiefout=true; console.log('gezocht:'+this.$store.getters["Bestelling/adres"].gemeente)
}

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

this.$store.dispatch('Bestelling/bevestigen', {datum:this.$store.state.Bestelling.datum, adres:{gemeente:this.gemeente,straat:this.straat,huisnummer:this.huisnummer}})
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

font-size:1.4rem


}

.marge{

margin-left: 3vw;



}









</style>