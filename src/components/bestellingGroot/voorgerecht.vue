<template>

    <div id="categorie">{{categorie}} </div>
    <ul>
    <li v-for="(gerecht,index) in menu" :key="gerecht._id" :gerecht="gerecht">
    <div id="naam"> {{gerecht.naam}}
    </div>
    <div id="prijs"> {{gerecht.prijs}}
    </div>

    <div id="aantal" v-if="gerecht.aantal>0"> {{gerecht.aantal}}
    </div>
    <div>
        <button @click="keuze(index)">+</button>
    </div>
 <div>
<button v-if="gerecht.aantal>0" @click="verwijderen(index)">-</button>
    </div> 
    
    
    
    </li>
    
    
    
    
    
    
    </ul>
    
    
    
    
    </template>
    <script>
        export default{
        data(){
            return{
    categorie:'voorgerecht'
    
            }},
    computed:{
        
    menu(){
        const categorie2 =this.categorie
        console.log(this.categorie)
    let menu=this.$store.state.Bestelling.menukaart
    
    return menu.filter(e=>e.categorie==categorie2)
    }},
   methods:{
    keuze(index)
{

let gerecht=this.menu[index]//this.$refs.gerechtenlijst[index]

this.$store.dispatch('Bestelling/toevoegenAanBestelling', gerecht)


},
verwijderen(index){

let gerecht=this.menu[index]

this.$store.dispatch('Bestelling/verwijderen', gerecht)

},
    
   } 
    
    }
    
    
    </script>