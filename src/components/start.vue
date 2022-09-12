<template>
  <div>
    start
 <ul v-for="gerecht in menukaart" :key="gerecht._id">
    <li> {{gerecht}}</li>
</ul>
  </div>
  
</template>

<script>
//import { createDOMCompilerError } from '@vue/compiler-dom';

export default {
  data(){
return{
  menukaart: this.$store.getters.menukaart

  
}

  },
  created()
  {
return{
menu:this.$store.dispatch('menukaart')




}


  },
  computed(){
return{

}
  }
 
}
</script>

