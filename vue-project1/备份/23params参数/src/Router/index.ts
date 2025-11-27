//引入
import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";
//组件
import Home from "@/view/Home.vue";
import about from "@/view/about.vue";
import News from "@/view/News.vue";
import detail from "@/view/detail.vue";
//创建
const Router = createRouter(
  {history:createWebHistory(),
    routes:[
     {name:"shouye",path:"/home",component:Home},
     {name:"xinwen",path:"/news",component:News,
      children:[{name:"neirong",path:"detail/:id/:title/:content?",component:detail}]
     },
     {name:"guanyu",path:"/about",component:about}
    ]
  }
)
export default Router