<template>
    <div class="appTitle">
        <div class="titleDiv">
            <i class="iconfont icon-yuanhuan"></i>
            <a class="title">{{title.title}}</a>
            <a class="subheading" v-for="(item,index) in title.subheading" :key="index">
                {{ item }} <span v-if="index!== title.subheading.length-1">丨</span>
            </a>
        </div>
        <div class="more">
            <router-link :to="title.toUrl" >更多</router-link>
            <i class="iconfont icon-youjiantou"></i>
        </div>
    </div>
</template>

<script setup>
    const props= defineProps({
        title: {
            type: Object,
            required:true
        }
    })
</script>

<style scoped>
    .appTitle {
        width: 690px;
        height: 35px;
        box-sizing: border-box;
        padding: 0 15px;
        border-bottom: 2px solid #c10d0c;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .titleDiv{
            display: flex;
            align-items: center;
            .iconfont{
                font-size: 14px;
                color: #c10d0c;
            }
            .title{
                font-size: 20px;
                color: #333333;
                padding: 0 12px;
            }
            .subheading{
                font-size: 12px;                
                color: #666666;
                span{
                    padding: 0 8px;
                    color: #d2d2d2;
                }
            }
        }
        .more{
            font-size: 12px;
            color: #666666;
            .iconfont{
                padding: 0 5px;
                font-size: 13px;
                color: #c10d0c;
            }
        }
    }
</style>