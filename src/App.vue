<template>

<div id="geheel">
<div id="aanmelden"> <aanmelden/></div>
<div id="rechtsboven"> </div>
<div id="routeview">
<router-view ></router-view> </div>
<div id="navigatiebalk"></div>
<div id="footer"></div>
<div id="linkerbalk"><categorie/></div>
 </div>
  
  </template> 



  <script>
    import bestelling from '/src/components/bestellingen1/bestelling.vue'
import categorie from '/src/components/bestellingen1/categorie.vue'
import aanmelden from '/src/components/klant/aanmelden'
export default {
  name: 'App',
  components: {
    bestelling, categorie, aanmelden
}
}
</script>

<style scoped>
#geheel{

display: grid;
grid-template-rows: 1fr 4fr 1fr;
grid-template-columns: 1fr 3fr 1fr;
grid-template-areas:
"aanmelden navigatiebalk rechtsboven"
"linkerbalk routerview rechterbalk"
"linksonder footer rechtsonder";

}

#aanmelden{

grid-area: aanmelden;
background-color: darkcyan;

}
#routerview{

grid-area: routerview;
background-color: darkmagenta;


}

#footer{

grid-area: footer;
background-color: rosybrown;




}
#navigatiebalk{

grid-area: navigatiebalk;
background-color: darkslategrey;



}

#linksonder{
grid-area: linksonder;
background-color: azure;
}
#linkerbalk{

grid-area: linkerbalk;
background-color: green;


}
#rechtsboven{

grid-area:rechtsboven

}
</style>
