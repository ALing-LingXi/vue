import { defineStore } from "pinia";
import { reactive } from "vue";
// export const useLovestore= defineStore("sayLovestore",{
//   state(){
//     return{
//       talkList:JSON.parse(localStorage.getItem("talkList") as string) || []
// //       talkList:([
// //   {id:"1321",title:"saki,saki,saki"},
// //   {id:"2737",title:"wadaxi aixielu you"},
// //   {id:"1839",title:"I Love You"}
// // ])
//     }
//   }
// })

export const useLovestore = defineStore("sayLovestore", () => {
  const talkList = reactive(
    JSON.parse(localStorage.getItem("talkList") as string) || []
  );

  return { talkList };
});
