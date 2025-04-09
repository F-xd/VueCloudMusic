<template>
    <div class="footer">
        <ul>
            <li>
                <div class="iconDiv">
                    <span class="iconfont icon-wangyiyunyinyuemusic1193417easyiconnet"></span>
                </div>
                <span class="text">音乐开放平台</span>
            </li>
            <li>
                <div class="iconDiv">
                    <span class="iconfont icon-odbc"></span>
                </div>
                <span class="text">云村交易所</span>
            </li>
            <li>
                <div class="iconDiv">
                    <span class="iconfont icon-suijixunhuan"></span>
                </div>
                <span class="text">X StudioAI歌手</span>
            </li>
            <li>
                <div class="iconDiv">
                    <span class="iconfont icon-shidirenzheng"></span>
                </div>
                <span class="text">用户认证</span>
            </li>
            <li>
                <div class="iconDiv">
                    <span class="iconfont icon-wuguan"></span>
                </div>
                <span class="text">AI 免费写歌</span>
            </li>
            <li>
                <div class="iconDiv">
                    <span class="iconfont icon-douyinxiaohuohua"></span>
                </div>
                <span class="text">云推歌</span>
            </li>
            <li>
                <div class="iconDiv">
                    <span class="iconfont icon-dashang"></span>
                </div>
                <span class="text">赞赏</span>
            </li>
        </ul>
        <div class="footer-bottom">
            <img src="@/assets/images/footer.png" alt="">
            
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
ul,
li {
    list-style: none;
}

.footer {
    width: 100%;
    min-width: 1100px;
    height: 325px;
    background-color: #f2f2f2;
    border-top: 1px solid #d3d3d3;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer ul {
    width: 980px;
    height: 72px;
    margin-top: 33px;
    box-sizing: border-box;
    padding: 0 60px;
    display: block;
    display: flex;
    justify-content: space-between;
}

.footer li {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.iconDiv {
    width: 50px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border: 1px rgb(255, 39, 88) solid;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    color: rgb(255, 39, 88);
}
.iconDiv:hover{
    background-color: #ff3a47;
    color: white !important;
}
.iconDiv .iconfont {
    font-size: 30px;
}

.text {
    font-size: 12px;
    color: rgb(121, 121, 121);
}
.footer-bottom{
    width: 980px;
    height: 160px;
    img{
        width: 100%;
    }
}
</style>