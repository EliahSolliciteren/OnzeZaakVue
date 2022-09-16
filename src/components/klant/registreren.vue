<template>
    <form  @submit="nieuweKlant" id="formulier">
    
    <label for="voornaam">voornaam:</label>
        <input id='voornaam' name="voornaam" v-model="formulier.voornaam" /> 
        <span ></span>
        <br/>
    <label for="familienaam">familienaam:</label>
        <input v-model="formulier.familienaam" />
        <br/>
        <label for="email">email:</label>
    <input  v-model="formulier.email"/>
    <br/>
    <label for="wachtwoord">wachtwoord:</label>
    <input v-model="formulier.wachtwoord" type="password" />
    <br/>
    <label for="telefoonnummer">telefoonnummer:</label>
    <input v-model="formulier.telefoonnummer"/>
    <br/>
    <label for="gemeente">gemeente:</label>
    <input  v-model="formulier.gemeente"/>
    <br/>
    <label for="straat">straat:</label>
    <input v-model="formulier.straat"/>
    <br/>
    <label for="huisnummer">huisnummer:</label>
    <input v-model="formulier.huisnummer"/>
    <br/>
    <button type="submit" > Account Aanmaken</button>
    </form>
    
    </template>
    <script>
        export default{
    data(){
        return{
    formulier:{
    voornaam:'',
    familienaam:'',
    email:'',
    telefoonnummer: '',
    gemeente:'',
    straat:'',
    huisnummer:'',
    wachtwoord:''
    
    }
        }},
    methods:{
    nieuweKlant(e){
        console.log(this.formulier)
    e.preventDefault();
    console.log(e)
    this.$store.dispatch('Klant/klantAanmaken', this.formulier)
    this.$router.push('/')
    
    }
    
    
    
    
    
    
    }
    
    
    
    
        }
    
    </script>
    
    
        
    
    
    
    
    
   
    <style scoped>
    form{
        display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2vw;
  margin-top: 1rem;
  margin-bottom: 1rem;


 
    
    
    }
    
    #formulier{
    
  
    
    
    
    }
    </style>