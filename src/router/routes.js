import Home from '../views/Home.vue'
import Search from '../views/Search.vue';
import SongList from '../views/SongList.vue'
// import ScanCode from "../views/ScanCode.vue";
export default [
    {path: '/', component: Home},
    {path: '/Search', component: Search},
    {path: '/SongList', component: SongList},
    // {path: '/ScanCode', component: ScanCode},
]