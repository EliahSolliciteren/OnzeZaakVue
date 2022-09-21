<template>

<h1>Welkom op de website van ons zaakje</h1>


<div class="tekst">Afhaalmaaltijden vers aan huis geleverd
<br> Met onderstaande knoppen kunt u een maaltijd bestellen.
<br>Optioneel kunt u zich eerst registreren
</div>



<div id="flex">
<div @click="this.$router.push('/bestellen')" id="bestellen">
<img src="../../assets/afbeeldingen/bestellen.jpg"/>
    
    <div class="onderschrift">Een maaltijd bestellen</div>
</div>
<div id="mydiv">
<div @click="this.$router.push('/registreren')" id="registreren"></div>
<div id="span">registreren</div>

</div>
</div>




</template>
<script></script>


<style>
#bestellen{

width: 20vw;
height: 20vw;
background-color: white;
border: black solid 2px;
margin-top: 5vh;
margin-left: 3vw;
cursor:pointer;
text-align:center;
}

#registreren{
width: 20vw;
height: 20vw;
background: linear-gradient(to top, #CDB59D 0%, #E6D6C7 50%,#CDB59D 100%);
border: black solid 2px;
margin-top: 5vh;
margin-bottom: 0.7vh;
margin-left: 3vw;
cursor:pointer;
text-align:center;

}
#span{
    
text-align: center;
margin-top: 0;
padding-top: 0%;
border: solid black 0.5px;
margin-left: 3vw;
}
#flex{
display:flex;

flex-direction: row;

}

*{
font-size: 1.4rem;



}



.tekst,h1{

margin-left: 5vw



}





hr {

border-top: 1px;
border-left: 1px;
border-right: 1px;
color: black;

height:50% ;
}
img{max-width:100;
max-height:100%

}

.onderschrift{

border: solid 1px;
padding-top: 0px;
margin-top: 0;



}

</style>

