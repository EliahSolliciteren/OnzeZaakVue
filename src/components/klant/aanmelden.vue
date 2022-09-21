<template>
    
<div class="wrapper"  v-if="(this.$store.state.Klant.klant)">
   
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
    <input  type="password" id="wachtwoord" v-model.trim="wachtwoord"/>
</div>
<span class="validatie" v-if="error">Zijn de inloggegevens juist?</span>
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
this.wachtwoord=""

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
height:70%
}
*{
font-size: 1rem;
    margin-left: 2%;
    margin-top: 1%;
    padding:0%;
   
}

#aanmelden{
margin-left: 0%;
padding-left: 0% ;
min-height: max-content;
display: flex;
flex-direction: column;
/*justify-content:center;*/
gap: 0;
justify-content: center;
vertical-align: flex-start;

}
 #aanmeldknop{

width:70%;
padding-top:0 ;
margin-bottom: 1vh;
margin-left: 0.5vw;

 }

 #aangemeld{

display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

 }

 .validatie{

color:rgb(23, 4, 152);
margin-bottom:0vh;
padding: bottom;
 }

.wrapper{

display: flex;
flex-direction: row;
vertical-align: middle;
text-align:center;
justify-content: center;
margin-top:12%;
margin-bottom: 12%;
font-size: 1.4rem;

}





    </style>