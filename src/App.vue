<template>
    <div>{{nameRef}}</div>
    <!-- <img :src="testJpg"/> -->
</template>
<script setup>
import './index.css'
import { ref} from 'vue';
import testJpg from '/assets/test.jpg'
// import {operationAdd,subtract,multiplication,division} from './operation.js'
import {operation} from './operation.js'
// operation.operationAdd = () => {
//     console.log('修改属性')
// }


console.log('operationObj:', operation.operationAdd(0.1,0.2))
console.log('subtract:', operation.subtract(0.33,0.2))
console.log('multiplication:', operation.multiplication(0.6,0.2))
console.log('division:', operation.division(0.6,0.01))
const nameRef = ref('')
</script>
