//中央仓库，用来管理需要共享的状态
import Vue from "vue"
import Vuex from "vuex"

//安装vuex

Vue.use(Vuex)

//通过vuex来创建一个公共仓库，用来管理共享状态
//1.需要存放共享数据
//2.store需要提供一些接口给组件，用来更新或者获取最新状态
let index = new Vuex.Store({
  //存放所有需要共享的状态
  state:{
    isLogin:0
  },
  //更新状态值的地方
  mutations:{  //负责更新num
    LOGININC(state,args){
      console.log("收到actions的请求：修改state为1")
      state.isLogin++
      console.log(state.isLogin)
    }
  },
  //用来接收外部的请求（更新或者获取），并把合法的请求提交到mutations
  //仓库大门，接收外部请求
  actions:{
    //当外部提交了    事件监听机制  //提交（触发）到mutations  "INC"
    LOGIN(store,args){
      console.log("收到dispatch的动作：ADD",args)
      store.commit("LOGININC")
    }
  },
  //用来获取最新的状态
  //state是readonly,通过getter来获取值    仓库是基于事件的监听机制
  // getters:{
  //   GETNUM(state){
  //     return state.num
  //   }
  // }
})

export default index

// store
// actions
// mutations
// getters

//流程
//->action(发起请求)({type:"ADD"})->actions(接收外部请求)->mutations(修改)->getters(更新状态)
