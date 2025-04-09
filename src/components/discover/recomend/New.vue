<template>
    <div class="new">
        <AppTitle :title="{title:'新碟上架',toUrl:'/discover/album'}" />
        <ul class="newUl">
            <a href="" class="iconfont icon-qianhou1"></a>
            <li v-for="(item,index) in discList" :key="index">
                <NewDemo
                    :newDemo="{img:item.discImg,song:item.discContent,author:item.discAuthor}"
                ></NewDemo>
            </li>

            <a href="" class="iconfont icon-qianhou2"></a>
        </ul>
    </div>
</template>

<script setup>
    import AppTitle from './AppTitle.vue';
    import NewDemo from './NewDemo.vue';
    const props = defineProps({
        discList: {
            type: Array,
            default: () => []
        }
    });
</script>

<style scoped>
    .new{
        width: 690px;
        height: 250px;
        margin-bottom: 30px;
    }
    .newUl{
        width: 690px;
        height: 185px;
        background-color: #f5f5f5;
        box-sizing: border-box;
        border: 1px solid #d3d3d3;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .iconfont{
            color: #898989;
            font-size: 14px;
            font-weight: 800;
            padding: 0 5px;
            margin-top: 75px;
            &:hover{
                color: #656565;
            }
        }
        li{
            width: 118px;
            height: 150px;
            margin-top: 30px;
        }
    }
    
</style>