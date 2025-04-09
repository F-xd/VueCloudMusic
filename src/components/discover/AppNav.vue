<template>
    <div class="nav">
        <div class="containter">
            <ul>
                <li @click="clickHandler(index)" v-for="(item,index) in navlist" :key="index" :class="{active:currentPath.includes(item.url)}">{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { ref ,watch,computed} from 'vue'
    import { useRouter,useRoute } from 'vue-router'
    const router = useRouter();
    const route = useRoute();
    const navlist = [
        {name:'推荐',url:'/discover/recomend'},
        {name:'排行榜',url:'/discover/toplist'},
        {name:'歌单',url:'/discover/playlist'},
        {name:'播客有声书',url:'/discover/djradio'},
        {name:'歌手',url:'/discover/artist'},
        {name:'新碟上架',url:'/discover/album'}
    ]
    const clickHandler = (index) => {
        router.push(navlist[index].url)
    }
    const currentPath = computed(()=>{
        return route.path;
    })
</script>

<style scoped>
.nav {
    width: 100%;
    min-width: 1100px;
    height: 35px;
    background-color: #c20c0c;
    display: flex;
    justify-content: center;
    align-items: center;
}

.containter {
    width: 1100px;
    height: 100%;
    color: #fff;
    font-size: 13px;

    >ul {
        margin-left: 200px;
        height: 100%;
        display: flex;

        align-items: center;

        >li {
            height: 20px;
            margin-right: 33px;
            padding: 0 13px;
            line-height: 20px;

            &:hover {
                background-color: #9b0909;
                border-radius: 10px;
            }
        }

        .active {
            background-color: #9b0909;
            border-radius: 10px;
        }
    }
}
</style>