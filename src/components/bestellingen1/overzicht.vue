<template>
<ul v-for="gerecht in bestelling">
<li>{{gerech.naam}} </li>





</ul>

</template>

<script>
    export default{
data(){
return{

bestelling: this.$store.state.Bestelling.bestelling



}
}


}
</script>