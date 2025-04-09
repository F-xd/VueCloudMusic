<template>
  <div class='recomend'>

    <AppSwiper></AppSwiper>
    <main>
      <div class="left">
        <Rcmd :hotList="hotList"></Rcmd>
        <New :discList="discList"></New>
        <Bill :rankList="rankList"></Bill>

      </div>
      <div class="right">
        <div class="vipCard">
          <a href="#"><img src="@/assets/images/vipCard.png" alt=""></a>
        </div>
        <div class="myInfo">
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a class="userLogin">用户登录</a>
        </div>
        <Singer></Singer>
        <Dj></Dj>
      </div>
    </main>
  </div>
</template>

<script setup>
import AppSwiper from '@c/discover/recomend/AppSwiper.vue';
import Rcmd from '@c/discover/recomend/Rcmd.vue';
import New from '@c/discover/recomend/New.vue';
import Bill from '@c/discover/recomend/Bill.vue';
import Singer from '@c/discover/recomend/Singer.vue';
import Dj from '@c/discover/recomend/Dj.vue';
import axios from '../../../utils/request'
    import {ref ,reactive} from 'vue'
    const hotList = reactive([]);
    const discList = reactive([]);
    const rankList = reactive([]);
    const getdata =async ()=>{
        const {data:{data:response}} = await axios.get('/discover/home')
        const {hot,disc,rank} = response;
        hotList.splice(0,0,...hot);
        rankList.splice(0,0,...rank);
        discList.splice(0,0,...disc);
    } 
    getdata();
</script>

<style lang='less' scoped>
@widthLeftDiv: 690px;
  main{
    width: 980px;
    margin: 0 auto; 
    background-color: #ffffff;
    box-sizing: border-box;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    display: flex;
  }
  .left{
    flex:1 1 auto;
    box-sizing: border-box;
    padding: 20px 0 40px 0;
    border-right: 2px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right{
    width: 250px;
  }
  .vipCard{
    width: 100%;
    height: 90px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .myInfo{
    width: 100%;
    height: 125px;
    box-sizing: border-box;
    border: 1px solid #ffffff;
    box-shadow: 0 2px 2px #b8b8b8;
    background: linear-gradient(to bottom, #fdfdfd, #e7e7e7);
    >p{
      padding: 16px 0;
      margin: 0 22.5px;
      font-size: 12px;
      color: #666666;
      line-height: 22px;
    }
    >a{
      display: block;
      width: 100px;
      height: 30px;
      cursor: pointer;
      border: 1px solid #ae090e;
      border-radius: 3px;
      margin: 0 75px;
      color: #ffffff;
      font-size: 12px;
      background:linear-gradient(to bottom, #ec2028, #bc070c);
      text-align: center;
      line-height: 31px;
      &:hover{
        background:linear-gradient(to bottom, #f63b45, #d4171e);
      }
    }
  }
</style>