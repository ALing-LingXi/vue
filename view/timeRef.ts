import { customRef } from "vue";
 export default function (sendvalue:string,time:number){
  let setTime:number
  let msgRef = customRef((track,trigger)=>{
  return {
    get() {
      track()
      return sendvalue
    },
    set(value){
    clearTimeout(setTime)
    setTime = setTimeout(()=>{
      sendvalue = value
      trigger()
      },time)
    }
  }
})
return {msgRef}
}
