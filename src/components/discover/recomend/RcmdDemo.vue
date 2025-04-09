<template>
    <div class="rcmDemo">
        <div>
            <a :title="rcmdDemo.dec" :href="rcmdDemo.href">
                <img :src="rcmdDemo.img" alt="">
            </a>
            <div class="bottom">
                <p><i class="iconfont icon-erji"></i>{{ rcmdDemo.data }}</p>
                <a @click="changeMusic(rcmdDemo.dec,rcmdDemo.img)" class="iconfont icon-bofang"></a>
            </div>
        </div>
        <p class="dec">
            <a :title="rcmdDemo.dec" :href="rcmdDemo.href">{{ rcmdDemo.dec }}</a>
        </p>
    </div>
</template>

<script setup>
    import { useMusic } from '../../../stores/music';
    const props = defineProps({
        rcmdDemo:{
            type:Object,
            default: () => ({ href: '', imgSrc: '', des: '',data: '' })
        }
    })
    const music = useMusic();
    const changeMusic = (name,src)=>{
        music.setName(name);
        music.setSrc(src);
    }
</script>

<style scoped>
    .rcmDemo {
        width: 100%;
        height: 100%;
        >div{
            width: 100%;
            height: 140px;
            display: block;
            position: relative;
            a{
                img{
                    display: block;
                    width: 100%;
                    height: 100%;

                }
            }
            .bottom{
                width: 100%;
                height: 27px;
                border-top: 1px solid #071008;
                box-sizing: border-box;
                padding: 0 10px;
                background-color: rgba(0,0,0,0.5);
                bottom: 0;
                position: absolute;
                display: flex;
                justify-content: space-between;
                align-items: center;
                >p{
                    .iconfont{
                        margin-right: 10px;
                        font-size: 14px;
                    }
                    font-size: 12px;
                    color: #cccccc;
                }
                >.iconfont{
                    font-size: 22px;
                    color: #cccccc;
                    &:hover{
                        color: white;
                        cursor: pointer;
                    }
                }
            }
        }
        p{
            a{
                font-size: 14px;
                color:#000;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
</style>