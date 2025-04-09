<template>
  <div class="appSwiper" :style="{}">
    <div class="banner">

    </div>
    <div class="download">
      <router-link to="/download">
        <img src="@/assets/images/download.png" alt="">
      </router-link>
      <img src="@/assets/images/download.png" alt="">
    </div>
  </div>
</template>


<script setup>
import { onMounted ,onUnmounted} from 'vue';
import changeImage from '@/assets/js/banner';
let imgList = [
  'http://p1.music.126.net/E_Uqil1B07oZuOF4JeQcfQ==/109951170671763245.jpg?imageView&quality=89',
  'http://p1.music.126.net/Q0jslbg0_6J9SlRt0eggPQ==/109951170672902228.jpg?imageView&quality=89',
  'http://p1.music.126.net/cRmQ_Z9kM4sHgJkcr_pHMA==/109951170671763302.jpg?imageView&quality=89',
  'http://p1.music.126.net/V-Lv_FVkLtCS5ywYXI00qQ==/109951170671769223.jpg?imageView&quality=89',
  'http://p1.music.126.net/BUURIYUfekfykdTz3qx98w==/109951170673063452.jpg?imageView&quality=89',
  'http://p1.music.126.net/m3pWskosDB96JzKn7FMAWw==/109951170671789605.jpg?imageView&quality=89',
  'http://p1.music.126.net/NKgzvsSGfWxhAgNvzYJOjA==/109951170671791327.jpg?imageView&quality=89',
  'http://p1.music.126.net/3OQ9BWdlx_L8wGhlrQd-xA==/109951170671789902.jpg?imageView&quality=89',
  'http://p1.music.126.net/7jgw3cqhAWhe1tnyf73zVg==/109951170673060876.jpg?imageView&quality=89',
  'http://p1.music.126.net/pvPXWpFzKxMWrdE4o6FtnA==/109951170671812113.jpg?imageView&quality=89'
]
onMounted(() => {
  changeImage.changeStyle = 'Fade';
  changeImage.lastIcon = 'icon-qianhou1';
  changeImage.nextIcon = 'icon-qianhou2';
  changeImage.pageEvent = 'click';
  changeImage('.banner', imgList, 730, 285, 1000, 5000);
  setInterval(()=>{
    document.documentElement.style.setProperty('--imgurl', `url(${imgList[changeImage.imgPos]})`);
  },100)
})
onUnmounted(()=>{
  // 销毁定时器
  changeImage.clear();
});

</script>
<style lang="less">
.banner {
  position: relative;

  i {
    color: rgb(232, 232, 232) !important;
    font-size: 40px !important;
    cursor: pointer;

    &:hover {
      font-size: 42px !important;
      color: white !important;
    }
  }
}

.last {
  position: absolute;
  left: -70px !important;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent !important;
}

.next {
  position: absolute;
  right: -330px !important;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent !important;
}

.page {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);

  div {
    width: 6.5px;
    height: 6.5px;
    margin: 0 8px;
    background-color: rgba(218, 218, 218, 0.648);
    overflow: hidden;
    line-height: 50px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: rgb(194, 12, 12);
    }
  }

  .active-page {
    background-color: rgb(194, 12, 12);
  }
}
</style>
<style lang="less" scoped>
:root{
  --imgurl:url('http://p1.music.126.net/E_Uqil1B07oZuOF4JeQcfQ==/109951170671763245.jpg?imageView&quality=89');
}
.appSwiper {
  width: 100%;
  min-width: 980px;
  height: 285px;
  display: flex;
  justify-content: center;
  position: relative;
  /* 确保伪元素相对于.appSwiper进行定位 */
  overflow: hidden;
}

.appSwiper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--imgurl);
  filter: blur(30px);
  /* 确保伪元素在子元素的后面 */
}

.download {
  width: 254px;
  height: 285px;
  overflow: hidden;
  position: relative;

  a>img {
    position: absolute;
    opacity: 0;
    bottom: 37px;
    left: 19px;
    clip: rect(290px, 220px, 345px, 0);

    &:hover {
      opacity: 1;
    }
  }
}
</style>
