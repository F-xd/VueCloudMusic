<template>
    <div class="singer">
        <div>
            <p>入驻歌手</p>
            <a href="#">查看全部></a>
        </div>
        <ul class="singerList">
            <a href="" v-for="(item, index) in 5" :key="index">
                <img src="http://p2.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=62y62" alt="">
                <div  class="info">
                    <p class="name">孙楠</p>
                    <p class="desc">歌手孙楠 代表作《你快回来》《燃烧》</p>
                </div>
            </a>
        </ul>
        <a target="_blank" href="https://music.163.com/st/musician" class="recruit">申请成为网易音乐人</a>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.singer {
    width: 100%;
    height: 454px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    >div {
        display: flex;
        justify-content: space-between;
        width: 210px;
        height: 23px;
        border-bottom: 1px solid #cccccc;

        >p {
            font-size: 12px;
            color: #333333;
            font-weight: bold;
        }

        a> {
            font-size: 12px;
            color: #666666;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.singerList {
    display: flex;
    flex-direction: column;
    >a {
        cursor: pointer;
        display: flex;
        margin-top: 14px;
        img {
            width: 62px;
            height: 62px;
        }

        >div {
            width: 148px;
            height: 60px;
            box-sizing: border-box;
            border: 1px solid #e9e9e9;
            border-left: none;
            padding-left: 14px;

            .name {
                width: 90%;
                font-size: 14px;
                color: #333333;
                margin-top: 8px;
                font-weight: bold;
                /* 超出范围省略号 */
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .desc {
                width: 90%;
                font-size: 12px;
                color: #666666;
                margin-top: 8px;
                /* 超出范围省略号 */
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
.recruit {
    width: 205px;
    height: 31px;
    margin-top: 14px;
    box-sizing: border-box;
    box-shadow: inset 0 0 2px #c3c3c3;
    border: 1px solid #c3c3c3;
    border-radius: 4px;
    line-height: 28px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: #333333;
    cursor: pointer;
    background: linear-gradient(to bottom, #ffffff, #f1f1f1);
    &:hover {
        background: linear-gradient(to bottom, #ffffff, #f8f8f8);
    }
}
</style>