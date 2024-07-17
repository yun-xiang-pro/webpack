<template>
    <div>{{nameRef}}</div>
    <img :src="testJpg"/>
</template>
<script setup>
import { ref} from 'vue';
import testJpg from '/assets/test.jpg'
import {add} from './test-remove-console'
add()

const nameRef = ref('vue 项目搭建')
</script>
