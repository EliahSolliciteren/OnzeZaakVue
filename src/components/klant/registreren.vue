<template>
 <div id="formulierGrid">
    
    <Form  @submit="nieuweKlant" id="formulier">
<div class="wrapper">    
        <div class="verplicht">
        <label for="voornaam"> voornaam</label>
        <input type="text" id='voornaam' name="voornaam" v-model="formulier.voornaam" />
        <span class="validatie" v-if='validatieObject.voornaam'>{{validatieObject.voornaam}}</span>
        <br>
    <label for="familienaam">familienaam:</label>
        <input v-model="formulier.familienaam" />
        <span class="validatie" v-if='validatieObject.familienaam'>{{validatieObject.familienaam}}</span>

        <br>
        <label for="email">email:</label>
    <input  v-model="formulier.email"/>
    <span class="validatie" v-if='validatieObject.email'>{{validatieObject.email}}</span>

    <br>
    <label for="wachtwoord">wachtwoord:</label>
    <input v-model="formulier.wachtwoord" type="password" />
    <div v-if="this.validatieObject.wachtwoord">
<ul class="validatie"><ul><li class="lijstTitel">wachtwoorden zouden:</li></ul>
<li>Op zijn minst 5 tekens lang moeten zijn</li>
<li> Minstens één hoofdletter moeten hebben</li>
<li>Minstens één getal of speciaal teken hebben </li>
</ul>
    </div>
    <br>
    
    <label for="wachtwoordBevestigen">Herhaal het wachtwoord:</label>
    <input v-model="formulier.wachtwoordBevestigen" type="password" />
    <span class="validatie" v-if="validatieObject.wachtwoordBevestigen"> {{validatieObject.wachtwoordBevestigen}}</span>

    <br>
</div>
    <div class="optioneel">
    <label for="telefoonnummer">telefoonnummer:</label>
    <input v-model="formulier.telefoonnummer"/>
    <span class="validatie" v-if="validatieObject.telefoonnummer"> {{validatieObject.telefoonnummer}}</span>
    <br>
    <label for="gemeente">gemeente:</label>
    <input  v-model="formulier.gemeente"/>
    <br>
    <label for="straat">straat:</label>
    <input v-model="formulier.straat"/>
    <br>
    <label for="huisnummer">huisnummer:</label>
    <input v-model="formulier.huisnummer"/>
   <br>
   <br>
    <button type="submit" > Account Aanmaken</button>
</div>
    
</div>

    
</form>    
</div>
    
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
    wachtwoord:'',
    wachtwoordBevestigen:'',
validatieFout:false   
},
    validatieObject:{voornaam:'', familienaam:'',email:'',wachtwoord:'',wachtwoordBevestigen:'', telefoonnummer:''}
        }},
    methods:{
    nieuweKlant(e){
        console.log(this.formulier)
    e.preventDefault()
    console.log(e)
    this.validatieObject={voornaam:'', familienaam:'',email:'',wachtwoord:'',wachtwoordBevestigen:'', telefoonnummer:''}
    this.validatieFout=false 
if (this.formulier.voornaam.length<2)
{this.validatieObject.voornaam='Gelieve je voornaam te geven'
this.validatieFout=true
;console.log(this.formulier.voornaam.length)}
if (this.formulier.familienaam.length<3)
{this.validatieObject.familienaam='Gelieve je familienaam te geven'
this.validatieFout=true
}
const emailRegexp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
if (!emailRegexp.test(this.formulier.email)){
{this.validatieObject.email='Gelieve een geldig emailadres te geven'
this.validatieFout=true}}
const eenGetalRegexp = new RegExp(/\d/)
const speciaalTekenRegexp = new RegExp(/[*@!#%&()^~{}]+/)
const eenHoofdletterRegexp= new RegExp(/[A-Z]+/)
if (this.formulier.wachtwoord.length<5 ||(!eenGetalRegexp.test(this.formulier.wachtwoord)&&!speciaalTekenRegexp.test(this.formulier.wachtwoord))||!eenHoofdletterRegexp.test(this.formulier.wachtwoord))
{this.validatieObject.wachtwoord='ww fout'
this.validatieFout=true}
if (this.formulier.wachtwoord!==this.formulier.wachtwoordBevestigen){
    this.validatieObject.wachtwoordBevestigen='De wachtwoorden komen niet overeen'
this.validatieFout=true
}
this.formulier.telefoonnummer=this.formulier.telefoonnummer.replace('/','')
const regExpTelefoonNummer= new RegExp(/^\d{8,12}/ )
if(!regExpTelefoonNummer.test(this.formulier.telefoonnummer)){
    this.validatieObject.telefoonnummer='gelieve een geldig telefoonnummer te geven'
    this.validatieFout=true



}




if (!this.validatieFout){

    this.$store.dispatch('Klant/klantAanmaken', this.formulier)
    this.$router.push('/')
    
    }
    
    
    
    
    
    
    }
    
    
    
    
}}
    
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
    .wrapper{

display: flex;
flex-direction:row;
column-gap:8vw

    }
    
    .verplicht{
    
  display: flex;
  flex-direction:column ;
margin-left: 4vw;    
}

    .optioneel{
    
    display: flex;
    flex-direction:column ;
      }  
.validatie{

color:rgb(223, 3, 3)


 }   

.lijstTitel{
list-style: none;

    }
    </style>