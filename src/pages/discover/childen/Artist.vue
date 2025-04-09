<template>
  <div class='artist'>
    <ArtistMenu></ArtistMenu>
    <ArtistView></ArtistView>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from '../../../utils/request'
import ArtistMenu from '../../../components/discover/artist/ArtistMenu.vue';
import ArtistView from '../../../components/discover/artist/ArtistView.vue';
const getData = async () => {
  const {data:{data}} = await axios.get('/discover/artist')
}
getData();
</script>

<style lang='less' scoped>
.artist {
  width: 980px;
  margin: 0 auto;
  display: flex;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
}
</style>