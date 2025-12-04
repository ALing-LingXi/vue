import { defineStore } from "pinia";
export const usecountStore = defineStore("count",
  {
    actions:{
      increment(value:number){
        this.sum+=value
      }
    },
    state() { 
      return {sum:6}
    },
    getters:{
     bigSum():number{
      return this.sum*10
     }
    }
  }
)