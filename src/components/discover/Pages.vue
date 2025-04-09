<template>
  <div class='pages'>
    <div @click="currentNum>1?currentNum--:currentNum" class="lastPage">上一页</div>
    <div @click="currentNum=i" :class="{'active':i==currentNum}" v-if="num<10" v-for="i in num" class="pagenum"></div>
    <div @click="currentNum=i" :class="{'active':i==currentNum}" v-if="num>=10" v-for="i in 8" :key="i" class="pagenum">{{ i }}</div>
    <div v-if="num>=10" class="omit">…</div>
    <div v-if="num>=10" class="pagenum">{{ num }}</div>
    <div @click="currentNum<num?currentNum++:currentNum" class="nextPage">下一页</div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
    num: {
        type: Number,
        default: 1
    }
});
const currentNum = ref(1)

</script>

<style lang='less' scoped>

.pages{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .pagenum{
        height: 22px;
        padding: 0 8px;
        margin-left: 2px;
        margin-right: 1px;
        border: 1px solid #d5d5d5;
        border-radius: 2px;
        box-shadow: 0 0 2px #d5d5d5;
        font-size: 12px;
        color: #333;
        background-color: #fff;
        cursor: pointer;
        &:hover{
            border-color: #666666;
        }
    }
    .lastPage,.nextPage{
        height: 22px;
        padding: 0 10px;
        font-size: 12px;
        color: #333;
        background-color: #f9f9f9;
        border: 1px solid #d5d5d5;
        border-radius: 2px;
        box-shadow: 0 0 2px #d5d5d5;
        cursor: pointer;
        &:hover{
            background-color: #f2f2f2;
        }
    }
    .active{
        background-color: #e0141b;
        color: #fff;
    }
}
</style>