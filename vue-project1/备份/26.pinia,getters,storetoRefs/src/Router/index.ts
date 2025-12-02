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
      // children:[{name:"neirong",path:"detail/:id/:title/:content?",component:detail
      children:[{name:"neirong",path:"detail",component:detail,
        // props:true//只能应对params参数
        props(router){
          return router.query
        }
      }]
     },
     {name:"guanyu",path:"/about",component:about},
     {path:"/",
      redirect:"/home"
     }
    ]
  },
  
)
export default Router