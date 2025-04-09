<template>
  <table class="song-table" border="0">
      <thead>
        <tr>
          <th class="songNum"></th>
          <th class="songName">标题</th>
          <th class="songTime">时长</th>
          <th class="songSinger">歌手</th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="(item,index) in songList" :key="index">
          <td class="td-num">
            <span>{{ index+1 }}</span>
            <i class="iconfont icon-new3"></i>
          </td>
          <td class="td-name">
            <img v-if="index<4" src="http://p1.music.126.net/l7ZQ-9lThHWoLMNx4G72YQ==/109951170539612724.jpg?param=50y50&quality=100" alt="">
            <i class="iconfont icon-bofang"></i>
            <span>{{item.songName}}</span>
            <span></span>
          </td>
          <td class="td-time">
            <span>{{ item.songTime }}</span>
          </td>
          <td class="td-singer">
            <span>{{ item.songAuthor }}</span>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
  songList: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang='less' scoped>
.song-table{
  width: 670px;
  border-collapse: collapse;

  thead{
    height: 34px;
    >tr{
      background: linear-gradient(to bottom, #ffffff, #f0f0f0);
    }
    th{
        font-size: 12px;
        color: #666;
        border: 1px solid #e0e0e0;
        text-align: left;
        padding-left: 10px;
      }
  }
  tbody{
      border: 1px solid #e0e0e0;
      tr:nth-child(2n){
        background-color: #ffffff;
      }
      tr:nth-child(2n+1){
        background-color: #f7f7f7;
      }
      tr:nth-child(n+1){
        height: 70px;
      }
      tr:nth-child(n+4){
        height: 30px;
      }
      td{
        font-size: 12px;
        text-align: left;
        padding-left: 10px;
      }
  }
  .songNum{
    width: 77px;
  }
  .songName{
    width: 326px;
  }
  .songTime{
    width: 90px;
  }
  .songSinger{
    width: 174px;
  }
}
.td-num{
    color:#999;
    span{
        margin-left: 10px;
        width: 20px;
        display: inline-block;
    }
    .iconfont{
        font-size: 12px;
        color: #268330;
    }
}
.td-name{
    >img{
        margin-right: 10px;
    }
    >.iconfont{
        color: #b3b3b3;
        font-size: 25px;
    }
    >span:first-child{
        color: #333;
        align-items: center;
    }
    >span:last-child{
        color: #aeaeae;
    }
}
.td-time{
    color: #666;
}
.td-singer{
    color: #333;
}
</style>