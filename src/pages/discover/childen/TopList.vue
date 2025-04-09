<template>
  <div class='topList'>
    <TopLeft
      :featured="featured"
      :media="media"
    ></TopLeft>

    <TopRight
      :rankDate="rankDate"
      :songList="songList"
      :newComment="newComment"
    ></TopRight>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import TopRight from '../../../components/discover/topList/TopRight.vue';
import TopLeft from '../../../components/discover/topList/TopLeft.vue';
import axios from '../../../utils/request'
const rankDate = reactive({});
const featured = reactive([]);
const media = reactive([]);
const songList = reactive([]);
const newComment = reactive([]);
const getData = async () => {
  try{
    const {data:{data}} = await axios.get('/discover/toplist')
    Object.assign(rankDate, data.rankDate);
    featured.splice(0,0,...data.featured);
    media.splice(0,0,...data.media);
    songList.splice(0,0,...data.songList);
    newComment.splice(0,0,...data.newComment);
  }
  catch(err){
    console.log(err);
  }
}
getData();
</script>

<style lang='less' scoped>
.topList {
  width: 980px;
  display: flex;
  margin: 0 auto;
  >div{
    border: 1px solid #d3d3d3;
    border-top: none;
    border-bottom: none;
  }
}
</style>