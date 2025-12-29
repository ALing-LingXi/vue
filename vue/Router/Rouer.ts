import { createRouter,createWebHashHistory } from "vue-router";
import Login1 from "@/views/Login1.vue";
import Login2 from "@/views/Login2.vue";
import Login3 from "@/views/Login3.vue";
const Router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {name:"log1",path:'/login1',component:Login1},
    {name:"log2",path:'/login2',component:Login2},
    {name:"log3",path:'/login3',component:Login3},
    {path:"/",
      redirect:""
     }
  ]
  
}
)
export default Router