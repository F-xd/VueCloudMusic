<template>
  <div class='musicPlayer'>
    <h2>正在播放</h2>
    <img  :src="music.src" alt="暂无歌曲">
    <p>{{ music.name }}</p>
  </div>
</template>

<script setup>
import { ref, reactive,watch } from 'vue';
import { useMusic } from '../stores/music';
const music = useMusic();
const isShow = ref(false);
window.addEventListener('mousemove',e=>{
    const musicPlayer = document.querySelector('.musicPlayer');
    if(e.clientY>window.innerHeight-50){
        if(!isShow.value){
            musicPlayer.style.transition = 'all 0.1s ease-in-out';
            musicPlayer.style.bottom = '0';
        }
        isShow.value = true;
    }
    else{
        if(isShow.value){
            musicPlayer.style.transition = 'all 1s ease-in-out';
            musicPlayer.style.bottom = '-50px';
        }
        isShow.value = false;
    }
})
watch(()=>(music), (newVal, oldVal)=>{
    console.log(newVal, oldVal);
    document.querySelector('.musicPlayer').style.bottom = '0';
},{deep:true})
</script>

<style lang='less' scoped>
.musicPlayer {
    width: 100%;
    height: 50px;
    background-color: #2d2c2c;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: -50px;
    transition: all 0.2s;
    h2{
        color: #fff;
    }
    img{
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    p{
        color: #fff;
    }
}
</style>