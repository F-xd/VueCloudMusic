<template>
  <div class='albumList'>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <NewDemo :newDemo="{song:item.discAuthor,author:item.discContent,img:item.discImg}"></NewDemo>
        </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import NewDemo from '../recomend/NewDemo.vue';
const props = defineProps({
    list: {
        type: Array,
        default: () => []
    }
});
</script>

<style lang='less' scoped>
.albumList {
    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 153px;
            padding: 20px 0;
        }
    }
}
</style>