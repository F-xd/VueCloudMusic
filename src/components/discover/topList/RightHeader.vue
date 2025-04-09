<template>
  <div class='right-header'>
    <div class="img">
        <img src="http://p2.music.126.net/rIi7Qzy2i2Y_1QD7cd0MYA==/109951170048506929.jpg?param=150y150" alt="">
    </div>
    <div class="info">
        <h2>{{ rightHeader.rankName }}</h2>
        <p>{{ rightHeader.ranlDate }}</p>
        <div class="Controls">
            <a title="播放" class="bofang iconfont icon-bofang"><span>播放</span></a>
            <a title="添加到播放列表" class="tianjia iconfont icon-tianjia"></a>
            <a class="shoucang iconfont icon-shoucang"><span>（{{ rightHeader.rankNumOne }}）</span></a>
            <a class="fenxiang iconfont icon-fenxiang"><span>（{{ rightHeader.rankNumTwo }}）</span></a>
            <a class="xiazai iconfont icon-xiazai"><span>下载</span></a>
            <a class="pinglun iconfont icon-pinglun"><span>（{{ rightHeader.rankNumThere }}）</span></a>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
    rightHeader:{
        typeof: Object,
        default: () => ({})
    }
})
</script>

<style lang='less' scoped>
.right-header{
    width: 660px;
    height: 155px;
    margin: 40px 0;
    display: flex;
    align-items: center;
    .img{
        width: 155px;
        height: 155px;
        box-sizing: border-box;
        border: 1px solid #cccccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 150px;
        height: 150px;
    }
    .info{
        margin-left: 30px;
        >h2{
            font-size: 20px;
            color:#333;
            font-weight: normal;
        }
        >p{
            height: 35px;
            line-height: 35px;
            font-size: 12px;
            color: #666;
            margin-bottom: 20px;
        }
    }
   .Controls{
        display: flex;
        >div{
            display: inline;
        }
        .bofang{
            border-radius: 5px 0 0 5px;
            background:linear-gradient(to bottom, #4392db, #1e6fbf);
            border-right: 1px solid #316ea8;
            color: #ffffff;
            >span{
                color: #ffffff;
            }
        }
        .tianjia{
            border-radius: 0 5px 5px 0;
            background:linear-gradient(to bottom, #4392db, #1e6fbf);
            border-left: 1px solid #5ca4e7;
            color: #ffffff;
        }
        a{
            padding: 5px;
            border: 1px solid #d4d4d4;
            border-radius: 5px;
            font-size: 22px;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        a:nth-child(n+3){
            color:#666666;
            margin-left: 5px;
            background:linear-gradient(to bottom, #fefefe, #f1f1f1);
        }
        span{
            font-size: 12px;
            color: #333;
         
        }
   }
}
</style>