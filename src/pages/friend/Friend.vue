<template>
  <div class='friend'>
    <img src="@/assets/images/nav-friend.png" alt="">
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
</script>

<style lang='less' scoped>
.friend{
  width: 100%;
  height: 100%;
  img{
    display: block;
    width: 980px;
    height: 700px;
    margin: 0 auto;
  }
}

</style>