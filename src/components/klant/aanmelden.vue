<template>
    
        <div v-if="(this.$store.state.Klant.klant)">
   <div>Welkom terug op onze site {{this.$store.state.Klant.klant.voornaam}}!</div>
<div> <button @click="afmelden"> Afmelden</button> </div>
</div> 
   <div id="aanmelden" v-else>
    <div id="email">
    <label for="email">email:</label> <br>
    <input id="email" v-model.trim="email"/>
    </div>
    <br>
    <div id="wachtwoord">
    <label for="wachtwoord"> wachtwoord:</label> <br>
    <input id="wachtwoord" v-model.trim="wachtwoord"/>
</div>
    <br/>
    <button @click='aanmelden' type="submit">aanmelden</button>
    <span v-if="error">Zijn de inloggegevens juist?.</span>
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


}},
computed:{
error()
{
return this.$store.getters['Klant/aanmeldError']
}
}


}


    </script>

    <style scoped>
input{
width: 60%;

}
*{

    margin-left: 2%;
    margin-top: 1%;
    padding:0%
}








    </style>