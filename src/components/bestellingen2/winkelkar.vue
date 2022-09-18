<template>
<div id="overzicht">
    <div id="buitenste">
<div id="lijn1"><div>gerecht</div> <div>aantal</div> <div>eenheisprijs </div><div>totaal</div></div>
<ul id="opsomming"  v-for="gerecht in bestelling">
<li id="gerecht" v-if="gerecht.aantal>0">
    <div>{{gerecht.naam}} </div>  
    <div>{{gerecht.aantal}}</div>
<div>{{gerecht.prijs}}</div>
<div>{{gerecht.prijs*gerecht.aantal}}</div>
</li>

</ul>
<span v-if="Validatiefouten.gerechten">{{Validatiefouten.gerechten}}</span>
</div>
<adres/>
<span v-if="Validatiefouten.adres">{{Validatiefouten.adres}}</span>


<div v-if="datum2">bestelling wordt geleverd op: {{datum2}}</div>
<input @input="this.datum2=true" v-else type="datetime-local"/>
<span v-if="Validatiefouten.datum">{{Validatiefouten.datum}}</span>
<br>
<button @click="bevestigen">Bevestig de bestelling</button>
</div>
</template>

<script>
    

import adres from './adres.vue'
    export default{
data(){
return{
datum3:'',   
datum2:false,
bestelling: this.$store.state.Bestelling.bestelling,
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
if (this.$store.getters["Bestelling/totaal"]==0){
    console.log(this.$store.getters["Bestelling/totaal"])
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
emits:['adresNaarStore'],
components:{
adres



}


}
</script>

<style scoped>
*{

font-size:1.4rem


}
#overzicht{
 margin-left: 10%;
 margin-top: 5rem;
background-color: lightskyblue;
width:60%;



}

#lijn1{
color:black;
display:flex;
flex-direction: row;
justify-content: space-between;

/*justify-content: center;*/
}
#gerecht{

display:flex;
justify-content:space-between


}

#opsomming{

list-style: none;




}

#opsomming li{
list-style-position: outside;
}

#buitenste{

margin-left:1vw;
margin-right: 1vw;
margin-top: 10vh;
margin-bottom: 1vh

}








</style>