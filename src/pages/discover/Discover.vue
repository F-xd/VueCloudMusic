<template>
  <div class='discover'>
    <AppNav />
    <router-view></router-view>
  </div>
</template>

<script setup>
import AppNav from '@c/discover/AppNav.vue';
</script>

<style lang='less' scoped>
.discover {
  background-color: #f5f5f5;
}
</style>