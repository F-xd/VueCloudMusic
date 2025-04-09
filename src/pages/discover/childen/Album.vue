<template>
  <div class='album'>
    <AlbumTitle title="热门新碟"></AlbumTitle>
    <AlbumList :list="list1"></AlbumList>

    <AlbumTitle title="全部新碟">
      <ul>
        <li><span>全部</span></li>
        <li><span>华语</span></li>
        <li><span>欧美</span></li>
        <li><span>韩国</span></li>
        <li><span>日本</span></li>
      </ul>
    </AlbumTitle>
    <AlbumList :list="list2"></AlbumList>
    <Pages :num="15"></Pages>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import AlbumTitle from '../../../components/discover/album/AlbumTitle.vue';
import AlbumList from '../../../components/discover/album/AlbumList.vue';
import Pages from '../../../components/discover/Pages.vue'
import axios from '../../../utils/request'
const list1 = reactive([]);
const list2 = reactive([]);
const getData = async()=>{
  const {data:{data:{album}}}= await axios.get('/discover/album');
  list1.splice(0,0,...album.filter((item,index)=>index<10));
  list2.splice(0,0,...album.filter((item,index)=>index>=10));
}
getData();

</script>

<style lang='less' scoped>
.album {
  width: 980px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 40px;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  .li{
    width: 200px;
    height: 200px;
  }
}
.albumTitle{
  ul{
    display: flex;
    font-size: 12px;
    color: #666;
    margin-left: 20px;
    margin-top: 12px;
    span:hover{
      text-decoration: underline;
      cursor: pointer;
    }
    li::after{
      content: '丨';
      margin: 0 10px;
    }
    li:last-child::after{
      content: '';
    }
  }
}
</style>