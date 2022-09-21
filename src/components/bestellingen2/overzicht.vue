<template>
   
  
    
    <ul id="lijst">
       <li class="opsomming" >
        <div >gerecht</div><div> aantal</div><div>eenheidsprijs</div>  <div>totaal</div>
       </li>  
    <li class="opsomming"  v-for="gerecht in bestelling">
    
        <div class="g" >{{gerecht.naam}} </div>  
        <div  >{{gerecht.aantal}}</div>
    <div >{{gerecht.prijs}}</div>
    <div >{{gerecht.prijs*gerecht.aantal}}</div>
         
    </li>
     
    </ul>
<div id="totaal">totaal te betalen: {{totaal}}</div>

</template>

<script>
export default{
   data(){
return{}


   },
   computed:{
   
   




bestelling(){

    return this.$store.getters["Bestelling/bestelling"]
} } ,

props:['totaal']



}



   
   
  



</script>

<style scoped>
*{

font-size: 1.4rem;
background-color: lightskyblue;

}

.opsomming{
    
    display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  width:80%;
  margin-left: 10%;
 
}

.g{padding-left: -6px;}


 
 #totaal{

margin-left: 45vw;
margin-top: 2vh;
font-weight: bold;

 }
 #lijst{
padding:0

 }




</style>