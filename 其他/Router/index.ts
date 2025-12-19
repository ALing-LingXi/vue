//引入
import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
//组件
import Home from "@/view/Home.vue";
import about from "@/view/about.vue";
import News from "@/view/News.vue";
//创建
const Router = createRouter(
  {history:createWebHistory(),
    routes:[
     {name:"shouye",path:"/home",component:Home},
     {name:"xinwen",path:"/news",component:News},
     {name:"guanyu",path:"/about",component:about}
    ]
  }
)
export default Router