<template>
<div id="voorModaal">

    <div id="modaal" @click="this.modaal=false" v-if="modaal"> afbeelding <br>gevonden op <br> <a href="https://www.freepik.com/free-vector/elegant-chef-logo_893774.htm#page=3&query=menu%20logo&position=3&from_view=keyword"> www.freepik.com</a>
</div>



    <a id='bron' v-if="(!this.modaal)" @click="this.modaal=true"> bron</a>
</div>
</template>

<script>
export default{
data(){
return{
modaal:false

}
}




}


    
</script>



<style>

#voorModaal{
display:flex;
height:100%;
width: 100%;
justify-content: center;

}

#modaal, #bron{


display:inline-block;
align-self: flex-end;

margin-bottom: 1vh;}





</style>