<template>
    <div class='comments'>
        <div class="mine">
            <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt="">
            <div>
                <textarea name="" id=""></textarea>
                <div>
                    <div class="icon">
                        <i class="iconfont icon-xiaolian"></i>
                        <i class="iconfont icon-aite"></i>
                    </div>
                    <div class="btn">评论</div>
                </div>
            </div>
        </div>

        <div class="title">
            精彩评论
        </div>
        <ul class="commentsUl">
            <li v-for="(item,index) in newComment" :key="index">
                <img src="http://p1.music.126.net/GmB-3pDppdoM6PkEu_4gIA==/109951167961026021.jpg?param=50y50" alt="">
                <div>
                    <p><span class="name">{{ item.commentName }}</span>: <span class="content">{{ item.commentContext }}</span></p>
                    <div class="date">
                        <span>{{ item.commentDate }}</span>
                        <div>
                            <i class="iconfont icon-dianzan">(123)</i>
                            <a href="">丨回复</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="title">
            最新评论（225211）
        </div>
        <ul class="commentsUl">
            <li v-for="(item,index) in newComment" :key="index">
                <img src="http://p2.music.126.net/jwCIwQ8wLXgWgQ4vHSH2lQ==/109951170683448741.jpg?param=50y50" alt="">
                <div>
                    <p><span class="name">{{ item.commentName }}</span>: <span class="content">{{ item.commentContext }}</span></p>
                    <div class="date">
                        <span>{{ item.commentDate }}</span>
                        <div>
                            <i class="iconfont icon-dianzan">(123)</i>
                            <a href="">丨回复</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
    newComment: {
        type: Array,
        default: () => []
    }
});
</script>

<style lang='less' scoped>
.comments {
    width: 670px;
    margin-top: 20px;

    .mine {
        width: 100%;
        display: flex;
        justify-content: space-between;

        img {
            width: 50px;
            height: 50px;
        }

        textarea {
            width: 608px;
            height: 63px;
        }

        >div>div {
            display: flex;
            justify-content: space-between;

            >.btn {
                width: 46px;
                height: 25px;
                border: 1px solid #297ac7;
                background-color: #3b8ad4;
                border-radius: 3px;
                color: white;
                font-size: 12px;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    background-color: #4c97de;
                }
            }
        }

        .icon {
            .iconfont {
                font-size: 25px;
                color: #9c9c9c;
            }
        }
    }

    .title {
        font-size: 12px;
        color: #333;
        margin-top: 10px;
        padding: 3px 0;
        border-bottom: 1px solid #cfcfcf;
        font-weight: bold;
    }
    .commentsUl {
        li{
            display: flex;
            padding: 15px 0 ;
            border-bottom: 1px dotted #cfcfcf;
            img{
                width: 50px;
                height: 50px;
            }
            >div{
                width: 100%;
                margin-left: 10px;
                font-size: 12px;
                p{
                    color: #333;
                    .name{
                        color: #0c73c2;
                    }
                }
                .date{
                    margin-top: 15px;
                    color: #999;
                    display: flex;
                    justify-content: space-between;
                    .iconfont{
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>