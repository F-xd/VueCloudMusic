<template>
  <li class='left-demo'>
    <img src="http://p2.music.126.net/rIi7Qzy2i2Y_1QD7cd0MYA==/109951170048506929.jpg?param=40y40" alt="">
    <div>
        <div class='title'>{{leftDemo.title}}</div>
        <div class='desc'>{{leftDemo.context}}</div>
    </div>
  </li>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
    leftDemo:{
        type: Object
    }
})
</script>

<style lang='less' scoped>
.left-demo{
    width: 240px;
    height: 62px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    >img{
        width: 40px;
        height: 40px;
        margin-left: 20px;
    }
    >div{
        margin-left: 10px;
        font-size: 12px;
        color:#000;
        >.desc{
            color: #999;
        }
    }
}
</style>