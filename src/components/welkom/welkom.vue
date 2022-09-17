<template>

<h1>Welkom op de website van ons zaakje</h1>


<div>Afhaalmaaltijden vers aan huis geleverd</div>


<div @click="this.$router.push('/bestellen')" id="bestellen">

    <hr>
    <div>Een maaltijd bestellen</div>
</div>







</template>
<script></script>


<style>
#bestellen{

width: 8vw;
height: 8vw;
background-color: darkorchid;
border: black solid 2px;
margin-top: 3vw;
margin-left: 3vw;
cursor:pointer;
text-align:center;
}

hr {

border-top: 1px;
border-left: 1px;
border-right: 1px;
color: white;
height:70% ;
}


</style>

