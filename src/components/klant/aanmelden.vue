<template>
    
        <div v-if="(this.$store.state.Klant.klant)">
   <div>Welkom terug op onze site {{this.$store.state.Klant.klant.voornaam}}!</div>
<div> <button @click="afmelden"> Afmelden</button> </div>
</div> 
   <div v-else>
    <p>Aanmelden</p>
    <label for="email">email:</label>
    <input id="email" v-model.trim="email"/>
    <br/>
    <label for="wachtwoord"> wachtwoord:</label>
    <input id="wachtwoord" v-model.trim="wachtwoord"/>
    <br/>
    <button @click='aanmelden' type="submit">aanmelden</button>
    
    </div>

    </template>
    <script>
   
    export default{
    data(){
    return {
    email:"",
    wachtwoord:""
    }},
methods:{
   aanmelden()
   {
 this.$store.dispatch('Klant/aanmelden', {email:this.email,wachtwoord: this.wachtwoord })
},
afmelden(){

    this.$store.dispatch('Klant/afmelden')


}
}


}


    </script>

    <style>


    </style>