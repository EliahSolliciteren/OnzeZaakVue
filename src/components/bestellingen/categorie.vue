<template>

<ul>
<li @click="selectie('drank')" :class="(cat=='drank')?'geselecteerd':'item'"> drank </li>
<li @click="selectie('voorgerecht')" :class="(cat=='voorgerecht')?'geselecteerd':'item'"> voorgerecht </li>
<li @click="selectie('vis')" :class="(cat=='vis')?'geselecteerd':'item'"> vis </li>
<li @click="selectie('vlees')" :class="(cat=='vlees'?'geselecteerd':'item')"> vlees </li>
<li @click="selectie('nagerecht')" :class="(cat=='nagerecht')?'geselecteerd':'item'"> nagerecht </li>
<li @click="selectie('alles')" :class="(cat=='alles')?'geselecteerd':'item'"> alles </li>


</ul>


</template>

<script>
export default{
data(){
    return{
cat: this.$store.getters["Bestelling/categorie"]
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

}



}






}





</script>

<style scoped>
*{

font-size: 1.4rem;

}

li{

margin-bottom: 2vh;


}

li:hover{

cursor: pointer;


}

ul{

margin-top: 3vh;



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


</style>