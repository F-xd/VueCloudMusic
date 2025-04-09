<template>
    <div class="newDemo">
        <a class="a-img" :title="newDemo.song[0]" :href="newDemo.song[1]">
            <img :src="newDemo.img">
            <a href="#" @click="changeMusic(newDemo.song,newDemo.img)" class="iconfont icon-bofang"></a>
        </a>
        <a class="a-song" :title="newDemo.song" href="#">{{ newDemo.song }}</a>
        <a class="a-author" :title="newDemo.author" href="#">{{ newDemo.author }}</a>
    </div>
</template>

<script setup>
    import { useMusic } from '../../../stores/music';
    const porps = defineProps({
        newDemo: {
            type: Object,
            default: () => ({img:'',song:'',author:''})
        }
    })
    const music = useMusic();
    const changeMusic = (name,src)=>{
        music.setName(name);
        music.setSrc(src);
    }
</script>

<style lang="less" scoped>
    .newDemo {
        display: flex;
        flex-direction: column;
        .a-img {
            position: relative;
            background-image: url('@/assets/images/coverall2.png');
            background-size: 100% 100%;
            &:hover >.iconfont{
                display: block;
            }
            >.iconfont{
                position: absolute;
                color: #cdcdce;
                font-size: 30px;
                bottom:0;
                right: 20px;
                display: none;
            }
            img{
                width: 85%;
                box-sizing: border-box;
                border: 1px solid #dbdcd7;
                box-shadow: 3px 3px 3px #0000007e;
            }
        }
        .a-song {
            width: 80%;
            font-size: 12px;
            color: #000000;
            margin-top: 5px;
            
            /* 超出范围省略号 */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &:hover {
                text-decoration: underline;
            }
        }
        .a-author {
            width: 80%;
            font-size: 12px;
            color: #666666;
            /* 超出范围省略号 */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &:hover{
                text-decoration: underline;
            }
        }
    }
</style>