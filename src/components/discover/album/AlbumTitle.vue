<template>
  <div class='albumTitle'>
    <span>{{ title }}</span>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
});
</script>

<style lang='less' scoped>
.albumTitle{
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    >span{
        font-size: 24px;
        color: #333;
    }
}
</style>