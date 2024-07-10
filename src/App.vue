<template>
    <div>{{nameRef}}</div>
   <div class="imgbox">
    <img class="imgel" :src="testJpg"/>
   </div>
</template>
<script setup>
import { ref} from 'vue';
import testJpg from '/assets/test.jpg';
const nameRef = ref('vue 项目搭建')
</script>
<style>
.imgbox{
    width: 50%;
    /* height: 100px; */
    background-color: antiquewhite;
    overflow: hidden;
   
    aspect-ratio: 16/9;
}
.imgel{
    width: 100%;
    height: 100%;
}

</style>
