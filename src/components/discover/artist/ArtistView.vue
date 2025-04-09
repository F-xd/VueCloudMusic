<template>
  <div class='artistView'>
    <SingerList
      v-for="(item,index) in singerList"
      :key="index"
      :title="item.title"
      :items="item.items"
    ></SingerList>
    <ul class='singers'>
      <li v-for="(singer,index) in singers" :key='index'>
        {{ singer }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import SingerList from './SingerList.vue';
const singerList = [
  {
    title: "入驻歌手",
    items: [
      "张惠妹",
      "吴莫愁",
      "孙楠",
      "老狼",
      "陈楚生",
      "陶喆",
      "蔡健雅",
      "黄小琥",
      "胡海泉",
      "杨宗纬"
    ]
  },
  {
    title: "热门歌手",
    items: [
      "林俊杰",
      "陈奕迅",
      "郑润泽",
      "G.E.M.邓紫棋",
      "方大同",
      "汪苏泷",
      "颜人中",
      "LBI利比",
      "王力宏",
      "陶喆"
    ]
  }
];
const singers = [
  "薛之谦",
  "蔡健雅",
  "毛不易",
  "h3R3",
  "孙燕姿",
  "许嵩",
  "张杰",
  "单依纯",
  "赵雷",
  "王菲",
  "李荣浩",
  "DJ阿智",
  "周杰伦",
  "华晨宇",
  "五月天",
  "Justin Bieber",
  "EXO",
  "容祖儿",
  "Taylor Swift",
  "队长",
  "梁静茹",
  "徐佳莹",
  "张碧晨",
  "马思唯",
  "王贰浪",
  "初音ミク",
  "张信哲",
  "周深",
  "郭顶",
  "宝宝巴士",
  "王唯旖",
  "Beyond",
  "The Weeknd",
  "告五人",
  "蔡依林",
  "杨丞琳",
  "郭静",
  "Wiz_H张子豪",
  "陈粒",
  "莫文蔚",
  "黄丽玲",
  "陈楚生",
  "ET",
  "罗言",
  "By2",
  "张韶涵",
  "任然",
  "余佳运",
  "杜宣达",
  "无面小生",
  "梁博",
  "BIGBANG",
  "罗森涛",
  "周传雄",
  "胡彦斌",
  "梨冻紧",
  "卢广仲",
  "贝乐虎",
  "王赫野",
  "林忆莲",
  "张学友",
  "口口古",
  "刘大拿",
  "Happer",
  "Bruno Mars",
  "Imagine Dragons",
  "法老",
  "Lil Ghost小鬼",
  "王宇宙Leto",
  "海洋Bo",
  "HOYO-MIX",
  "杨宗纬",
  "陈绮贞",
  "Zy",
  "王心凌",
  "徐良",
  "邵帅",
  "Muyoi",
  "古巨基",
  "Charlie Puth",
  "儿歌多多",
  "Capper",
  "鹿晗",
  "艾志恒Asen",
  "沈以诚",
  "江辰",
  "TizzyT",
  "韦礼安",
  "薛凯琪",
  "乔浚丞",
];
</script>

<style lang='less' scoped>
.artistView {
  background-color: #ffffff;
  width: 800px;
  padding: 40px;
  .singers{
    margin-top: 40px;
    border-top: 1px #999999 dotted;
    display: flex; 
    flex-wrap: wrap;
    li{
      width: 20%;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>