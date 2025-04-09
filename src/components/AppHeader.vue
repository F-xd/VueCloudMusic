<template>
    <div class="header">
        <div class="containter">
            <div class="logo">
                <img src="../assets/images/logo.png" alt="">
            </div>
            <ul>
                <li @click="clickHandler(index)" :class="{active:currentPath.includes(item.url)}" v-for="(item,index) in options" :key="index">{{item.name}}</li>
            </ul>
            <div class="inputDiv">
                <i class="iconfont"></i>
                <input type="text" placeholder="音乐/视频/电台/用户">
            </div>
            <a target="_blank" href="https://music.163.com/#/creatorcenter" class="creator">创作者中心</a>
            <div class="login"><a >登录</a></div>
        </div>
    </div>
</template>

<script setup>
    import { ref ,watch} from 'vue';
    import { useRouter,useRoute } from 'vue-router';
    const router = useRouter();
    const route = useRoute();
    const currentPath = ref(route.path);
    const options = [
        { name: '发现音乐',url: '/discover' },
        { name: '我的音乐',url: '/my' },
        { name: '关注',url: '/friend' },
        { name: '商城',url: 'https://music.163.com/store/product' },
        { name: '音乐人',url: 'https://music.163.com/st/musician' },
        { name: '云推歌',url: 'https://music.163.com/st/ad-song' },
        { name: '下载客户端',url: '/download' }
    ]
    const clickHandler = (index) => {
        if(options[index].url.startsWith('http')){
            open(options[index].url)
        }
        else{
            router.push(options[index].url);
        }
    }
    watch(()=>(route.path), (newVal, oldVal)=>{
        currentPath.value = newVal;
    })
</script>

<style scoped lang="less">
    .header{
        width: 100%;
        min-width: 1100px;
        height: 70px;
        background-color: #242424;
        display: flex;
        justify-content: center;
    }
    .containter{
        width: 1100px;
        height: 100%;
        color: #cccccc;
        font-size: 14px;
        display: flex;
        align-items: center;
        >.logo{
            width: 176px;
            height: 100%;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        >ul{
            height: 100%;
            display: flex;
            >li{
                flex: 0 0 auto;
                padding: 0 20px;
                display: flex;
                align-items: center;
                &:hover{
                    background-color: #000000;
                    color: #ffffff;
                }
            }
            .active{
                background-color: #000000;
                    color: #ffffff;
            }
        }
    }
    .inputDiv{
        width: 158px;
        height: 32px;
        background-color: #ffffff;
        border-radius: 16px;
        overflow: hidden;
        >input{
            width: 100%;
            background-color: #ffffff;
            border: none;
            line-height: 32px;
            margin-left: 10px;
            outline: none;
            &::placeholder{
                color: #909090;
                font-size: 12px;
            }
        }
    }
    .creator{
        width: 90px;
        height: 30px;
        box-sizing: border-box;
        border: 1px solid #4f4f4f;
        border-radius: 15px;
        margin-left: 10px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        &:hover{
            border-color: #ffffff;
            color: #fff;
        }
    }
    .login{
        height: 100%;
        padding: 0 20px;
        >a{
            height: 100%;
            line-height: 70px;
            display: block;
            font-size: 12px; 
            color: #787878;
            &:hover{
               color: #999999;
               text-decoration: underline;
            }
        }
    }
</style>