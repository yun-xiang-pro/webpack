<template>
    <div class="title">{{nameRef}}</div>
    <!-- <img :src="testJpg"/> -->
    <div class="imgContainer">
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
        <div class="imgItem">
            <img class="imgel" :src="testJpg"/>
        </div>
    </div>
</template>
<script setup>
import { ref} from 'vue';
import testJpg from '/assets/test.jpg';
import './index.css'
console.log('testJpg:', testJpg)

const nameRef = ref('aspect-ratio属性实现等比缩放')
</script>
