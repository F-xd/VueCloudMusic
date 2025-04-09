<template>
  <div class='djRadio'>
    <Top></Top>
    <div class="playLists">
      <PlayList :arr="program">
        <Title  :title="'推荐节目'"></Title>
      </PlayList>
      <PlayList :arr="program">
        <Title  :title="'节目排行榜'"></Title>
      </PlayList>
    </div>
    <RdList :arr="programRank">
      <Title :title="'音乐播客·电台'"></Title>
    </RdList>
    <RdList :arr="programRank">
      <Title :title="'生活·电台'"></Title>
    </RdList>
    <RdList :arr="programRank">
      <Title :title="'情感·电台'"></Title>
    </RdList>
    <RdList :arr="programRank">
      <Title :title="'创作翻唱·电台'"></Title>
    </RdList>
    <RdList :arr="programRank">
      <Title :title="'知识·电台'"></Title>
    </RdList>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from '../../../utils/request'
import Top from '../../../components/discover/djRadio/Top.vue';
import Title from '../../../components/discover/djRadio/Title.vue';
import PlayList from '../../../components/discover/djRadio/PlayList.vue';
import RdList from '../../../components/discover/djRadio/RdList.vue';
const program = reactive([]);
const programRank = reactive([]);
const programItem = reactive([]);

const getData = async () => {
  const {data:{data}} = await axios.get('/discover/djradio')
  program.splice(0,0,...data.program);
  programRank.splice(0,0,...data.programRank.splice(0,4));
  programItem.splice(0,0,...data.programItem);
}
getData();
</script>

<style lang='less' scoped>
.djRadio {
  background-color: #fff;
  width: 980px;
  min-height: 200px;
  padding: 0 40px;
  margin: 0 auto;
  box-sizing: border-box;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.playLists {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>