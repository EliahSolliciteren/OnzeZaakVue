<template>

<h1>Welkom op de website van ons zaakje</h1>


<div>Afhaalmaaltijden vers aan huis geleverd</div>

<div id="flex">
<div @click="this.$router.push('/bestellen')" id="bestellen">

    <hr>
    <div class="tekst">Een maaltijd bestellen</div>
</div>

<div @click="this.$router.push('/registreren')" id="registreren">

<hr>
<div>registreren</div>
</div>
</div>





</template>
<script></script>


<style>
#bestellen{

width: 12vw;
height: 12vw;
background-color: white;
border: black solid 2px;
margin-top: 3vw;
margin-left: 3vw;
cursor:pointer;
text-align:center;
}

#registreren{
width: 12vw;
height: 12vw;
background-color: darkorchid;
border: black solid 2px;
margin-top: 3vw;
margin-left: 3vw;
cursor:pointer;
text-align:center;
}

#flex{
display:flex;

flex-direction: row;

}

*{
font-size: 1.4rem;



}







hr {

border-top: 1px;
border-left: 1px;
border-right: 1px;
color: white;
height:70% ;
}


</style>

