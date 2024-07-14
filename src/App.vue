<template>
    <div>{{nameRef}}</div>
    <img :src="testJpg"/>
</template>
<script setup>
import { ref} from 'vue';
import testJpg from '/assets/test.jpg'
console.log('testJpg:', testJpg)

const nameRef = ref('vue 项目搭建')
</script>
