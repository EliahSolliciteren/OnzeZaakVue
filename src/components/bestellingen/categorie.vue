<template>
<div id="categorie">
<div>
<ul id="catLijst">
<li @click="selectie('drank')" :class="(cat=='drank')?'geselecteerd':'item'"> drank </li>
<li @click="selectie('voorgerecht')" :class="(cat=='voorgerecht')?'geselecteerd':'item'"> voorgerecht </li>
<li @click="selectie('vis')" :class="(cat=='vis')?'geselecteerd':'item'"> vis </li>
<li @click="selectie('vlees')" :class="(cat=='vlees'?'geselecteerd':'item')"> vlees </li>
<li @click="selectie('nagerecht')" :class="(cat=='nagerecht')?'geselecteerd':'item'"> nagerecht </li>
<li @click="selectie('alles')" :class="(cat=='alles')?'geselecteerd':'item'"> alles </li>


</ul>
</div>


<div id="input">
    <label for="datum">datum te leveren:</label>
    <br>
<input id="datum" v-model="datum" type="datetime-local"/> <br/>
<button id="plaatsen" @click="plaatsen">Bestelling plaatsen</button>

<br>
<button id="herbeginnen" @click="herbeginnen">Herbegin selectie</button>

 </div>







</div>
</template>

<script>
export default{
data(){
    return{
cat: this.$store.getters["Bestelling/categorie"],
datum:''
}




},

computed(){
return{



}



},
methods:{

selectie(categorie){
this.cat=categorie
this.$store.dispatch('Bestelling/andereCategorie', categorie)

},

herbeginnen(){

this.$store.dispatch('Bestelling/herbeginnen')
this.$store.dispatch('Bestelling/menukaart')
},

plaatsen(){
  console.log(this.datum)
this.$store.dispatch('Bestelling/plaatsen', {totaal: this.totaal, datum: this.datum})
this.$router.push('/winkelkar')

}

}






}





</script>

<style scoped>
*{

font-size: 1.4rem;

}

#categorie{

   height: 90%;
display:flex;
flex-direction:column;
justify-content: space-between;
}

ul{
padding-left: 0;

}

li{

margin-bottom: 2vh;
list-style-position: inside;
text-align: justify;

}

li:hover{

cursor: pointer;


}

ul{

margin-top: 3vh;
list-style: none;

}


.geselecteerd{
background-color: rgb(193, 9, 165);


}
.link{

text-decoration: none;
color: black;

}
.link:hover .link:active{

color: black;
background-color:  rgb(193, 9, 165);

}

#plaatsen{

margin-top: 1vh;
margin-bottom: 1vh;
padding-top: 1vh;
padding-bottom: 1vh;
background-color: green ;
border: none;
width:100%;
text-align: justify;
}




#plaatsen:hover{

background-color:  rgb(193, 9, 165);
  cursor: pointer;


}

#herbeginnen{
 margin-top: 1vh;
margin-bottom: 1vh;
padding-top: 1vh;
padding-bottom: 1vh;
background-color: green ;
border: none;
width:100%;
text-align: justify;
}
#herbeginnen:hover{

background-color:rgb(193, 9, 165) ;
cursor:pointer;

}




</style>