<template>
  <div class='topRight'>
    <RightHeader :rightHeader="rankDate" />
    <div class="title">
      <span class="name">歌曲列表</span>
      <span class="count">99首歌</span>
      <span class="num">播放：<span>6202573825</span>次</span>
    </div>
    <SongTable :songList="songList"></SongTable>

    <div class="title">
      <span class="name">评论</span>
      <span class="count">共225211条评论</span>
    </div>
    <Comments :newComment="newComment"></Comments>
    <Pages :num="11261"/>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import RightHeader from './RightHeader.vue';
import SongTable from './SongTable.vue';
import Comments from './Comments.vue';
import Pages from '../Pages.vue';
const headerArray = {
  imgUrl: 'http://p2.music.126.net/rIi7Qzy2i2Y_1QD7cd0MYA==/109951170048506929.jpg?param=150y150',
  name: '热歌榜',
  update: '最近更新：04月06日（刚刚更新）',
  collect: '12392785',
  share: '62994',
  review: '301524'
}
const props = defineProps({
  rankDate: {
    type: Object,
    default: () => ({})
  },
  songList:{
    type: Array,
    default: () => []
  },
  newComment:{
    type: Array,
    default: () => []
  }
});
</script>

<style lang='less' scoped>
.topRight {
  background-color: #fff;
  width: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  width: 670px;
  height: 35px;
  box-sizing: border-box;
  border-bottom: 2px solid #c20c0c;
  display: flex;
  align-items: center;
  position: relative;
  .name {
    font-size: 20px;
    color: #333;
  }
  
  .count{
    font-size: 12px;
    color: #666;
    margin: 9px 0 0 20px;
  }

  .num {
    position: absolute;
    right: 0;
    font-size: 12px;
    color: #666;
    >span{
      color: #c20c0c;
    }
  }
}

</style>