import { createRouter, createWebHashHistory } from 'vue-router';
// 组件导入
//一级路由
import Discover from '@p/discover/Discover.vue';
import My from '@p/my/My.vue';
import Friend from '@p/friend/Friend.vue';
import Download from '@p/download/Download.vue';

//二级路由
import Album from '@p/discover/childen/Album.vue';
import Artist from '@p/discover/childen/Artist.vue';
import DjRadio from '@p/discover/childen/DjRadio.vue';
import PlayList from '@p/discover/childen/PlayList.vue';
import Recomend from '@p/discover/childen/Recomend.vue';
import TopList from '@p/discover/childen/TopList.vue';
const routes = [
    {
        path:'/',
        redirect:'/discover',
    },
    {
        path:'/discover',
        component:Discover,
        redirect:'/discover/recomend',
        children:[
            {
                path:'/discover/album',
                component:Album
            },
            {
                path:'/discover/artist',
                component:Artist
            },
            {
                path:'/discover/djradio',
                component:DjRadio,
            },
            {
                path:'/discover/playlist',
                component:PlayList
            },
            {
                path:'/discover/recomend',
                component:Recomend
            },
            {
                path:'/discover/toplist',
                component:TopList
            }
        ]
    },
    {
        path:'/my',
        component:My,
    },
    {
        path:'/friend',
        component:Friend,
    },
    {
        path:'/download',
        component:Download,
    }
]
const router = createRouter({
    // 路由模式有两种：history 和 hash
    // history 模式下，路由地址栏显示 /a 这样的格式
    // hash 模式下，路由地址栏显示 #a 这样的格式
  history: createWebHashHistory(),
  routes
});

export default router;