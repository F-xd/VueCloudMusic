<template>
  <div class='singerList'>
    <div class="title">
        <span>{{ title }}</span>
        <a class="more">更多></a>
    </div>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            <div>
                <img src="http://p1.music.126.net/ODuFZql3x08Q4AaW7y20Aw==/109951169014571694.jpg?param=130y130" alt="">
                <span class="name">{{ item }}</span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    items:{
        type: Array,
        default: () => []
    }
});
</script>

<style lang='less' scoped>
.singerList {
    .title{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #c20c0c;
        >span{
            font-size: 24px;
            color: #333;
        }
        .more{
            font-size: 12px;
            color: #666;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
ul{
    display: flex;
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
        >div{
          margin-top: 20px;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          span:hover{
            text-decoration: underline;
          }
        }
    }    
}
</style>