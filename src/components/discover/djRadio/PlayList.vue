<template>
  <div class='playList'>
    <slot></slot>
    <ul>
        <li v-for="(item,index) in arr" :key="index">
            <i class="iconfont icon-bofang"></i>
            <img src="http://p2.music.126.net/4QC0mHTS8ku2z35eCQpSWw==/109951170702046822.jpg?param=40x40" alt="">
            <div>
                <p class="p1">{{ item.title }}</p>
                <p class="p2">{{ item.context }}</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Title from './Title.vue';
const props = defineProps({
    arr: {
        type: Array,
        default: () => []
    }
});
</script>

<style lang='less' scoped>
.playList {
    
}
ul{
    width: 424px;
    border: 1px solid #e2e2e2;
    border-top: none;
    li{
        width: 100%;
        height: 40px;
        padding: 10px 0;
        display: flex;
        align-items: center;
        position: relative;
        &:hover{
            background-color: #eeeeee !important;
        }
        &:hover >i{
            display: inline;
        }
        >i{
            position: absolute;
            left: 30px;
            color: #ffffff;
            font-size: 25px;
            cursor: pointer;
            display: none;
        }
        img{
            width: 40px;
            height: 40px;
            margin-left: 20px;
            cursor: pointer;
        }
        >div{
            margin-left: 10px;
        }
        p{
            cursor: pointer;
            font-size: 12px;
            &:hover{
                text-decoration: underline;
            }
        }
        .p1{
            color: #333;
        }
        .p2{
            color: #999;
        }
    }
    li:nth-child(2n){
        background-color: #f7f7f7;
    }
}
</style>