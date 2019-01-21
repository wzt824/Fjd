
import {SHOPCARTSAJAXURL} from "../commons/URLSchema";
import {SWIPERAJAXURL} from "../commons/URLSchema";
import {INDEXMENUAJAXURL} from "../commons/URLSchema";
import {INDEXACTIVEAJAXURL} from "../commons/URLSchema";
import {INDEXSCHOOLAJAXURL} from "../commons/URLSchema";
import {SELECTSAJAXURL} from "../commons/URLSchema";
import {LISTSAJAXURL} from "../commons/URLSchema";
export default {

  /**
   * 通过用户的编号来获取购物车信息
   * @param cb
   */
    getShopCartsData(cb){
        fetch(SHOPCARTSAJAXURL).then(res=>{
            res.json().then(data=>{
              cb(data)
            })
        })
    },

  /**
   * 轮播图
   * @param cb
   */
  getSwiperData(cb){
      fetch(SWIPERAJAXURL).then(res=>{
        res.json().then(data=>{
          cb(data)
        })
      })
    },
  /**
   * 得到index  menu 数据
   * @param cb
   */
  getIndexMenuData(cb){
    fetch(INDEXMENUAJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  },
  /**
   * 得到  index  active 数据
   * @param cb
   */
  getIndexActiveData(cb){
    fetch(INDEXACTIVEAJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  },

  /**
   * 得到 index school 数据
   * @param cb
   */
  getIndexSchoolData(cb){
    fetch(INDEXSCHOOLAJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  },

  getSelectsData(cb){
    fetch(SELECTSAJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  },

  getListsData(cb){
    fetch(LISTSAJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }

}
