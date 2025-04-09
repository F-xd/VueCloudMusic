<template>
    <div class="bill">
        <AppTitle :title="{title:'榜单',toUrl:'/discover/toplist'}"/>
        <div class="content">
            <div v-for="(item, i) in 3" class="blk" :key="i">
                <div class="top">
                    <a href="#" title="飙升榜">
                        <img src="http://p3.music.126.net/rIi7Qzy2i2Y_1QD7cd0MYA==/109951170048506929.jpg?param=100y100" alt="">
                    </a>
                    <div>
                        <a title="飙升榜">飙升榜</a>
                        <div class="icon">
                            <a title="播放" href="#" class="iconfont icon-bofang"></a>
                            <a title="收藏" href="#" class="iconfont icon-shoucang"></a>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <ul class="songUl">
                        <li v-for="(item,index) in rankList.slice(i*10,10*i+10)" :key="index">
                            <a :title="item.songName" href="#">
                                <span class="num">{{ index+1 }}</span>
                                <span class="name">{{ item.songName }}</span>
                                <div class="liIcon">
                                    <a title="播放" class="iconfont icon-bofang"></a>
                                    <a title="添加到我的列表" class="iconfont icon-tianjia"></a>
                                    <a title="收藏" class="iconfont icon-shoucang"></a>
                                </div>
                            </a>
                        </li>
                        <div class="more"><a href="#">查看全部></a></div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import AppTitle from './AppTitle.vue';
    const props = defineProps({
        rankList: {
            type: Array,
            default: () => []
        }
    });
</script>

<style lang="less" scoped>
    .bill{
        width: 690px;
        height: 530px;
    }
    .content{
        width: 100%;
        height: 472px;
        margin-top: 20px;
        display: flex;
    }
    .blk{
        flex: 1 1 auto;
        width: 30%;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #d2d2d2;
        box-shadow: 0px 0px 3px #e8e8e8;
        margin-right: -1px;
    }
    .top{
        width: 100%;
        height: 120px;
        background-color: #f4f4f4;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            cursor: pointer;
        }
        img{
            width: 80px;
            height: 80px;
        }
        >div{
            width: 116px;
            height: 52px;
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            >a{
                color: #333333;
                font-size: 14px;
                font-weight: bold;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
        .iconfont{
            color: #c0c0c0;
            font-size: 30px;
            margin-left: -5px;
            margin-right: 5px;
            &:hover{
                color: #818181;
            }
        }
    }
    .songUl{
        width: 100%;
        height: 352px;
        display: flex;
        flex-direction: column;

        li{
            width: 100%;
            background-color: #e8e8e8;
            font-size: 12px;
            color:#000;
            display: flex;
            align-items: center;
            >a{
                width: 100%;
                display: flex;
                align-items: center;
                position: relative;
                &:hover .iconfont{
                    display: block !important;
                }
                &:hover .name{
                    width: 100px;
                    text-decoration: underline;
                }
                .liIcon{
                    position: absolute;
                    right: 10px;
                }
            }
            .num{
                flex: 0 0 auto;
                display: block;
                width: 35px;
                height: 32px;
                color: #666666;
                font-size: 16px;
                text-align: center;
                line-height: 32px;
                padding-left: 10px;
            }
            .name{
                flex: 0 0 auto;
                display: block;
                width: 100%;
                // 文本超出一行显示省略号
                overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
            }
        }
        li:nth-child(2n){
            background-color: #f4f4f4;
        }
        li:nth-child(-n+3){
            .num{
                color: #c10d0c;
            }
        }
        >.more{
            flex: 1 1 auto;
            font-size: 12px;
            color:#000;
            background-color: #e8e8e8;
            padding-right: 32px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    .liIcon{
        display: flex;
        width: 140px;
        justify-content: flex-end;
        .iconfont{
            font-size: 25px;
            color: #757474;
            display: none;
            &:hover{
                color: #575757;
            }
        }
    }
</style>