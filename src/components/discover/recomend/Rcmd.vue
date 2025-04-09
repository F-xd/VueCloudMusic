<template>
    <div class="rcmd">
        <AppTitle :title="{title:'热门推荐',subheading:['华语','流行','摇滚','民谣','电子'],toUrl:'/discover/playlist'}" />
          <ul class="rcmdUl">
            <li v-for="(item,index) in hotList" :key="index">
                <RcmdDemo
                    :rcmdDemo="{href:'#',dec:item.hotContext,img:item.hotImg,data:item.hotNum}"
                ></RcmdDemo>
            </li>
          </ul>
    </div>
</template>

<script setup>
    import AppTitle from './AppTitle.vue';
    import RcmdDemo from './RcmdDemo.vue';
    const props = defineProps({
        hotList: {
            type: Array,
            default: () => []
        }
    });
</script>
<style scoped>
    .rcmd{
        width: 690px;
        height: 525px;
        
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: flex-start;
            li{
                width: 140px;
                height: 200px;
                margin-top: 30px;
            }
        }
    }
</style>