import home from "@/componets/home.vue";
import book from "@/componets/book.vue";
import title from "@/componets/title.vue";
import { createRouter,createWebHistory } from "vue-router";
const Router = createRouter(
  {
    history:createWebHistory(),
    routes:[
      {
        path:"/home",
        component:home
      },{
        path:"/news",
        component:book
      },
      {
        path:"/title",
        component:title
      }
    ]
  }
)
export default Router