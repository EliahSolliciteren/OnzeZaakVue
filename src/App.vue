<template>

<div id="geheel">
<div id="aanmelden"> <aanmelden/></div>
<div id="rechtsboven"> </div>
<div id="routerview">
<keep-alive><router-view ></router-view></keep-alive> </div>
<div id="navigatiebalk"><component :is="banner"></component></div>
<div id="footer"></div>
<div id="linkerbalk"> <router-view name="links"></router-view></div>
<div id="rechterbalk"></div> 
<div id="rechtsonder"></div>
</div>
  
  </template> 



  <script>
    import bestelling from '/src/components/bestellingen/bestelling.vue'
import categorie from '/src/components/bestellingen/categorie.vue'
import aanmelden from '/src/components/klant/aanmelden'
import banner1 from '/src/components/welkom/bannerRegistreren.vue'
import banner2 from '/src/components/welkom/bannerVers'
import banner3 from '/src/components/welkom/bannerPromotie.vue'


export default {
  name: 'App',
  data(){
    return{
banner:banner1,
teller:0

    }


  },
  computed(){
return{
  
}


  },
  components: {
    bestelling, categorie, aanmelden, banner1, banner2, banner3
},
created(){
  let $vm = this;
  
  
  setInterval(function(){
    $vm.teller=$vm.teller+1

     
    if ($vm.teller%3==0)
    {return $vm.banner=banner1}
    else if($vm.teller%3==1)
    {return $vm.banner=banner2}
    else
    {return $vm.banner=banner3
    }}
    
    
    
    ,10000)}
}








</script>

<style scoped>
  *{
margin: 0;
padding:0;


  }
#geheel{
margin:0;
padding:0;
display: grid;
grid-template-rows: auto 1fr auto;
grid-template-columns: auto 1fr auto;
grid-template-areas:
"aanmelden navigatiebalk rechtsboven"
"linkerbalk routerview rechterbalk"
"linksonder footer .";
height: 100vh;
}

#aanmelden{

grid-area: aanmelden;
background-color: darkcyan;
height: fit-content;

}
#routerview{

grid-area: routerview;
background: lightskyblue;


min-height: 100%;
max-height: 100%;
overflow-y: scroll;
}

#footer{

grid-area: footer;
background-color: rosybrown;
min-height: 0vh;
max-height: 0vh;
/*align-content: center;*/
;
}
#navigatiebalk{
position: relative;
grid-area: navigatiebalk;
background-color: lightcyan;
justify-content: center;
align-items: center;
display: flex;

}

#linksonder{
grid-area: linksonder;
background-color: azure;
}
#linkerbalk{

grid-area: linkerbalk;
background-color: green;
min-width: 10vw;

}
#rechtsboven{

grid-area:rechtsboven

}

#rechterbalk{

grid-area:rechterbalk



}

</style>
