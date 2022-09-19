<template>
    
<div  v-if="(this.$store.state.Klant.klant)">
   
<div id="aangemeld">
<div>Van harte welkom op onze site {{this.$store.getters["Klant/klant"].voornaam}}!</div>

<div> <button @click="afmelden"> Afmelden</button> </div>
</div>
</div > 
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
<span v-if="error">Zijn de inloggegevens juist?</span>
    <br/>
    <button id="aanmeldknop" @click='aanmelden' type="submit">aanmelden</button>
    
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
width: 70%;
}
*{
font-size: 1.2rem;
    margin-left: 2%;
    margin-top: 1%;
    padding:0%
}

#aanmelden{
margin-left: 0%;
padding-left: 0% ;
display: grid;
/*justify-content:center;*/
align-items: center;



}
 #aanmeldknop{

width:70%;
margin-bottom: 2vh;


 }

 #aangemeld{

display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

 }







    </style>