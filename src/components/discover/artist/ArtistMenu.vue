<template>
  <div class='artistMenu'>
    <MenuItem  v-for="(item,i) in menuList" :title="item.title" :key="i">
        <ul>
            <li @click="currentI=i;currentJ=j" :class="{active:currentI===i&&currentJ===j}" v-for="(item,j) in item.items" :key="j"><span>{{item}}</span></li>
        </ul>
    </MenuItem>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import MenuItem from './MenuItem.vue';
const menuList = [
  {
    title: "推荐",
    items: [
      "推荐歌手",
      "入驻歌手",
    ],
  },
  {
    title: "华语",
    items: [
      "华语男歌手",
      "华语女歌手",
      "华语组合/乐队",
    ],
  },
  {
    title: "欧美",
    items: [
      "欧美男歌手",
      "欧美女歌手",
      "欧美组合/乐队",
    ],
  },
  {
    title: "日本",
    items: [
      "日本男歌手",
      "日本女歌手",
      "日本组合/乐队",
    ],
  },
  {
    title: "韩国",
    items: [
      "韩国男歌手",
      "韩国女歌手",
      "韩国组合/乐队",
    ],
  },
  {
    title: "其他",
    items: [
      "其他男歌手",
      "其他女歌手",
      "其他组合/乐队",
    ],
  },
];
const currentI = ref(0);
const currentJ = ref(0);
</script>

<style lang='less' scoped>
.artistMenu{
    flex:0 0 auto;
    width: 180px;
    box-sizing: border-box;
    border-right: 1px solid #dadada;
    padding: 40px 10px;
    background-color: #f9f9f9;
}
.menuItem{
    padding-top: 16px;
    border-bottom: 1px solid #d3d3d3;
    &:nth-last-child(1){
        border: none;
    }
    ul{
        font-size: 12px;
        color: #333;
        li{
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
            cursor: pointer;
            &::before{
                content: "·";
                margin-right: 5px;
            }
            span{
                &:hover{
                    text-decoration: underline;
                }
            }
        }
        .active{
            color: #c20c0c;
            background-color: #fbfbfb;
            border: 1px solid #d3d3d3;
            border-radius: 2px;
            box-sizing: border-box;
            >span{
                text-decoration: none !important;
            }
        }
    }

}

</style>