<template>
   
    <div class="test">  
    <div id="winkelkarGrid" class="lijn" >
        <div >gerecht</div> <div>aantal</div> <div class="opsomming">eenheisprijs </div ><div class="lijnT">totaal</div>
    </div> 
        <span class="opsomming"  v-for="gerecht in bestelling">
    <div id="gerecht" v-if="gerecht.aantal>0"></div> 
        <div class="G">{{gerecht.naam}} </div>  
        <div class="A" >{{gerecht.aantal}}</div>
    <div class="P">{{gerecht.prijs}}</div>
    <div class="T">{{gerecht.prijs*gerecht.aantal}}</div>
        </span>
    </div>  
    
<div id="totaal">totaal te betalen: {{totaal}}</div>

</template>

<script>
export default{
   data(){
return{}


   },
   computed:{
    totaal(){
const bestelling=this.$store.state.Bestelling.bestelling
let totaal=0
if (bestelling.length>0){
bestelling.forEach(gerecht=>{
totaal=totaal+gerecht.prijs*gerecht.aantal
//totaal=totaal +gerecht*prijs+gerecht*aantal

this.$store.dispatch['Bestelling/totaal', totaal]

})}
else{
  

totaal=0 
 this.$store.dispatch['Bestelling/totaal', this.totaal]
}
return totaal


    },




bestelling(){

    return this.$store.getters["Bestelling/bestelling"]
}  ,},

mounted(){

return{
    totaal:this.$store.dispatch["Bestelling/totaal",this.totaal]
}
    


},
}


   
   
  



</script>

<style scoped>
*{

font-size: 1.4rem

}

.opsomming{
    
    display:flex;
flex-direction:row;
justify-content: space-around;
margin-left: 0;

}
.lijn{

display: flex;
justify-content: space-around;
flex-direction: row;
}

 .G{

display: inline-flex;
margin-left: 0;


 }
 #totaal{

margin-left: 70vw;
margin-top: 2vh;
font-weight: bold;

 }


</style>