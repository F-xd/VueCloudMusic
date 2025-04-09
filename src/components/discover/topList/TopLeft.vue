<template>
    <div class='topLeft'>
        <h2 class="title">云音乐特色榜</h2>
        <ul class="list">
            <LeftDemo 
            v-for="(item,index) in featured" 
            :class="{active:(currentId==item.id)||index==0&&currentId==''}" 
            :leftDemo="item" 
            :key="index" 
            @click="cilckHandler(item.id)" />
        </ul>
        <h2 class="title">全球媒体榜</h2>
        <ul class="list">
            <LeftDemo 
            :class="{active:currentId==item.id}" 
            :leftDemo="item" 
            v-for="(item,index) in media" 
            :key="index" 
            @click="cilckHandler(item.id)" />
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive,watch,onMounted } from 'vue';
import LeftDemo from './LeftDemo.vue';
import { useRouter,useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const currentId = ref(route.query.id??'');
const cilckHandler = (id) => {
    router.push('?id=' + id);
}
const props = defineProps({
    featured: {
        type: Array,
        default: () => []
    },
    media:{
        type:Array,
        default:()=>[]
    }
});

watch(()=>(route.query.id), (newVal)=>{
    currentId.value = newVal;
})
</script>

<style lang='less' scoped>
.topLeft {
    width: 240px;
    background-color: #f9f9f9;
    padding-top: 20px;
}
.title{
    font-size: 14px;
    color: #000;
    font-weight: normal;
    margin-top: 20px;
    margin-left: 15px;
    margin-bottom: 12px;
}
.list{
    width: 100%;

}
.left-demo{
    &:hover{
        background-color: #f4f2f2;
    }
}
.active{
    background-color: #e6e6e6 !important;
}
</style>