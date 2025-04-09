<template>
  <div class="app">
    <APPHeader />
    <router-view />
    <AppFooter />

    <MusicPlayer></MusicPlayer>
  </div>
</template>

<script setup>
  import APPHeader from './components/APPHeader.vue';
  
  import AppFooter from './components/AppFooter.vue';
  import MusicPlayer from './components/MusicPlayer.vue';
</script>

<style scoped lang="less">
 
</style>