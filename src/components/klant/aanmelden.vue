<template>
    <div>
        <div v-if="(this.$store.state.Klant.gebruiker)">
    Welkom terug op onze site {{this.$store.state.Klant.gebruiker.voornaam}}!</div>
    <div v-else>
    <p>Aanmelden</p>
    <label for="email">email:</label>
    <input id="email" v-model="email"/>
    <br/>
    <label for="wachtwoord"> wachtwoord:</label>
    <input id="wachtwoord" v-model="wachtwoord"/>
    <br/>
    <button @click='aanmelden' type="submit">aanmelden</button>
    
    </div>
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
}
}


}


    </script>