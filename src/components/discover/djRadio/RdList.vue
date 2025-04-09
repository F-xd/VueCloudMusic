<template>
  <div class='rdList'>
    <slot></slot>
    <div>
        <div v-for="(item,index) in arr" :key="index">
            <img src="http://p2.music.126.net/LORkKxHUfKnvUta4PaXnIQ==/109951170650760569.jpg?param=200y200" alt="">
            <div>
                <p class="p1">{{ item.title }}</p>
                <p class="p2">{{ item.context }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
    arr: {
        type: Array,
        default: () => []
    }
});
</script>

<style lang='less' scoped>
.rdList {
    width: 100%;
    margin-bottom: 40px;
    >div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        >div{
            width: 435px;
            padding: 20px 0;
            display: flex;
            align-items: center;
            img{
                width: 120px;
                height: 120px;
            }
            >div{
                width: 100%;
                height: 66px;
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .p1{
                    font-size: 18px;
                    color: #333;
                    font-weight: bold;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                .p2{
                    font-size: 12px;
                    color: #999;
                }
            }
        }
        >div:nth-child(-n+2){
            border-bottom: 1px solid #e7e7e7;
        }
    }
}
</style>