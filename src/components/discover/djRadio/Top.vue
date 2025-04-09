<template>
    <div class='top'>
        <div class="main">
            <i class="iconfont icon-qianhou1"></i>
            <i class="iconfont icon-qianhou2"></i>
            <a class="topItem" v-for="i in 18" :key="i">
                <i class="iconfont icon-wuguan"></i>
                <p>网易云音乐</p>
            </a>
        </div>
        <div class="topPages">
            <div class="active"></div>
            <div></div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>

<style lang='less' scoped>
.top {
    width: 100%;
    padding:20px 0;

    .main {
        width: 100%;
        height: 190px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
        position: relative;
        >.iconfont{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: #ebebeb;
            cursor: pointer;
            font-size: 22px;
            &:hover{
                color: #a5a5a5;
            }
        }
        .icon-qianhou1{
            left: -30px;
        }
        .icon-qianhou2{
            right: -30px;
        }
    }

    a {
        display: block;
        width: 70px;
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-radius: 3px;
        cursor: pointer;
        align-items: center;

        &:hover {
            background-color: #f6f7f7;
        }

        >i {
            font-size: 30px;
            color: #7d7d7d;
        }

        >p {
            font-size: 12px;
            color: #888;
        }
    }
    .topPages{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 5px 0;
        >div{
            width: 7px;
            height: 7px;
            background-color: #dddddd;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
            &:hover{
                background-color: #ba2300;
            }
        }
        .active{
            background-color: #ba2300;
        }
    }

}
</style>