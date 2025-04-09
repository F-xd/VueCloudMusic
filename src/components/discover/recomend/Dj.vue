<template>
    <div class="dj">
        <div>
            <p>热门主播</p>
        </div>
        <ul class="djList">
            <li v-for="(item, index) in 5" :key="index">
                <a href=""><img
                        src="http://p2.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40"
                        alt=""></a>
                <div class="info">
                    <a href="">
                        <p class="name">刘维-Julius</p>
                    </a>
                    <p class="desc">歌手、播客节目《维维道来》主理人</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.dj {
    width: 100%;
    height: 295px;
    margin-top: 30px;
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
    }

    .djList {
        width: 210px;
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        li {
            height: 50px;
            display: flex;

            img {
                width: 40px;
                height: 40px;
            }

            div {
                width: 75%;
                margin-left: 10px;

                p.name {
                    font-size: 12px;
                    color: #000000;
                    font-weight: bold;
                    /* 超出范围省略号 */
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                >p.desc {
                    font-size: 12px;
                    color: #666666;
                    margin-top: 5px;
                    /* 超出范围省略号 */
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>