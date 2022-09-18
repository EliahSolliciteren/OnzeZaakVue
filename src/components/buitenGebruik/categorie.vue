<template>

<ul>
<li @click="selectie('drank')" :class="(cat=='drank')?'geselecteerd':'item'"> drank </li>
<li @click="selectie('voorgerecht')" :class="(cat=='voorgerecht')?'geselecteerd':'item'"> voorgerecht </li>
<li @click="selectie('vis')" :class="(cat=='vis')?'geselecteerd':'item'"> vis </li>
<li @click="selectie('vlees')" :class="(cat=='vlees'?'geselecteerd':'item')"> vlees </li>
<li @click="selectie('nagerecht')" :class="(cat=='nagerecht')?'geselecteerd':'item'"> nagerecht </li>
<li @click="selectie('alles')" :class="(cat=='alles')?'geselecteerd':'item'"> alles </li>
<li><router-link :class="(cat=='overzicht')?'geselecteerd link':'link'" to="/overzicht">Overzicht bestelling</router-link> </li>

</ul>


</template>

<script>
export default{
data(){
    return{
cat: this.$store.state.Bestelling.categorie
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