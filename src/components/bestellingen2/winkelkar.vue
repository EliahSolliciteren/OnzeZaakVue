<template>
<div id="overzicht">
    <div id="buitenste">
<div id="lijn1"><div>gerecht</div> <div>eenheidsprijs</div> <div>aantal </div><div>totaal</div></div>
<ul id="opsomming"  v-for="gerecht in bestelling">
<li id="gerecht" v-if="gerecht.aantal>0">
    <div>{{gerecht.naam}} </div>  
    <div>{{gerecht.aantal}}</div>
<div>{{gerecht.prijs}}</div>
<div>{{gerecht.prijs*gerecht.aantal}}</div>
</li>

</ul>

<adres/>


<div>bestelling wordt geleverd op: {{datum2}}</div>
</div>
<button @click="bevestigen">Bevestig de bestelling</button>
</div>
</template>

<script>
    import adres from './adres.vue'
    export default{
data(){
return{

bestelling: this.$store.state.Bestelling.bestelling,



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
console.log(uur)

return dag +'/' + maand +' rond '+ uur 



}},
methods:{
bevestigen() 
{
this.$emit('adresNaarStore')
this.$store.dispatch('Bestelling/bevestigen', {datum:this.$store.state.Bestelling.datum, adres:{gemeente:this.gemeente,straat:this.straat,huisnummer:this.huisnummer}})
//this.$router.push('/Smakelijk')



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