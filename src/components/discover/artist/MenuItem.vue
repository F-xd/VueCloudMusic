<template>
  <div class='menuItem'>
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
});
</script>

<style lang='less' scoped>
.menuItem {
    width: 100%;
    >h2{
        color: #333;
        font-size: 16px;
        padding-left: 14px;
    }
}
</style>