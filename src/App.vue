<template>
    <div>{{nameRef}}</div>
    <img :src="testJpg"/>
</template>
<script setup>
import { ref} from 'vue';
import testJpg from '/assets/test.jpg';
import {add} from './test-remove-console'

console.log('add(1,2):', add(1,2))


const nameRef = ref('vue 项目搭建')
</script>
