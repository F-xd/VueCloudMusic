<template>
  <div class='playList'>
    <div class="title">
      <div class="name">
        <h2>{{ titlename }}</h2>
        <div @click="categoryShow =!categoryShow" class="choose">选择分类</div>
        <div v-if="categoryShow" class="category">
          <div class="header"><div @click="clcikHandler('全部')">全部风格</div></div>
          <div class="body">
            <div v-for="(item,index) in categoryArray" :key="index" class="bodyCategory">
              <div class="categoryTitle">{{ item.category }}</div>
              <div class="categoryItem">
                <p @click="clcikHandler(item)" v-for="(item,index) in item.items" :key="index" class="item"><span>{{ item }}</span>丨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hot">热门</div>
    </div>
    <ul>
      <li v-for="(item,index) in playList " :key="index">
        <RcmdDemo
          :rcmdDemo="{ href: '#', dec: item.hotContext, img: item.hotImg, data: item.num }" />
      </li>
    </ul>
    <Pages :num="35" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import RcmdDemo from '@/components/discover/recomend/RcmdDemo.vue';
import Pages from '../../../components/discover/Pages.vue';
import axios from '../../../utils/request'
const playList = reactive([]);
const getData = async()=>{
  const {data:{data}} = await axios.get('/discover/playlist');
  playList.splice(0,0,...data.playList);
}
getData();

const categoryShow = ref(false);
const titlename = ref('全部');
const categoryArray = [
    {
        category: "语种",
        items: ["华语", "欧美", "日语", "韩语", "粤语"]
    },
    {
        category: "风格",
        items: ["流行", "摇滚", "民谣", "电子", "舞曲", "说唱", "轻音乐", "爵士", "乡村", "R&B/Soul", "古典", "民族", "英伦", "金属", "朋克", "蓝调", "雷鬼", "世界音乐", "拉丁", "New Age", "古风", "后摇", "Bossa Nova"]
    },
    {
        category: "场景",
        items: ["清晨", "夜晚", "学习", "工作", "午休", "下午茶", "地铁", "驾车", "运动", "旅行", "散步", "酒吧"]
    },
    {
        category: "情感",
        items: ["怀旧", "清新", "浪漫", "伤感", "治愈", "放松", "孤独", "感动", "兴奋", "快乐", "安静", "思念"]
    },
    {
        category: "主题",
        items: ["综艺", "影视原声", "ACG", "儿童", "校园", "游戏", "60后", "70后", "80后", "90后", "网络歌曲", "KTV", "经典", "翻唱", "吉他", "钢琴", "器乐", "榜单", "00后"]
    }
];
const clcikHandler = (name) => {
  titlename.value = name;
  categoryShow.value = false;
};
</script>

<style lang='less' scoped>
.playList {
  background-color: #fff;
  width: 900px;
  padding: 40px;
  border: 1px solid #d3d3d3;
  margin: 0 auto;

  .title {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #c20c0c;

    .name {
      display: flex;
      align-items: center;
      position: relative;
    }

    h2 {
      font-size: 24px;
      color: #333333;
      font-weight: normal;
    }

    .choose {
      margin-left: 12px;
      width: 86px;
      height: 31px;
      box-sizing: border-box;
      border: 1px solid #d4d4d4;
      font-size: 12px;
      color: #0c73c2;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f2f2f2;
      border-radius: 3px;
      cursor: pointer;
      &:hover{
        background-color: #ffffff;
      }
      &:active{
        background-color: #eeeeee;
      }
    }

    .hot {
      color: white;
      background-color: #af090a;
      border: 1px solid #8b0303;
      border-radius: 3px;
      width: 46px;
      height: 29px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
  }
  .category{
    position: absolute;
    top: 40px;
    left: -30px;
    z-index: 99;
    width: 720px;
    border: 1px solid #c6c6c6;
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(0, 0, 0);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .header{
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      align-items: center;
      >div{
        width: 75px;
        height: 26px;
        font-size: 12px;
        color: #333333;
        border: 1px solid #bebebe;
        border-radius: 3px;
        text-align: center;
        line-height: 26px;
        background: linear-gradient(to bottom, #fefefe, #f4f4f4);
        margin-left: 20px;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    .body{
      width: 100%;
      display: flex;
      flex-direction: column;
      .bodyCategory{
        display: flex;
        .categoryTitle{
          flex:0 0 auto;
          font-size: 12px;
          color:#333;
          font-weight: bold;
          width: 70px;
          text-align: center;
          padding-top: 15px;
          border-right: 1px solid #e6e6e6;
        }
        .categoryItem{
          font-size: 12px;
          display: flex;
          flex-wrap: wrap;
          padding: 16px 15px;
          >p{
            color: #d8d8d8;
            margin-left: 10px;
            margin-right: 8px;
            >span{
              color:#333;
              &:hover{
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
  ul {
    width: 900px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    li {
      width: 140px;
      height: 188px;
      padding-left: 40px;
      margin-bottom: 30px;
    }
    li:nth-child(5n+1) {
      padding-left: 0;
    }
  }

  >img {
    width: 900px;
  }
}
</style>