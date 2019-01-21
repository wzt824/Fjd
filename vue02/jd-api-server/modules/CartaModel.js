const mongoose = require("./MongoConfig")

const Schema = mongoose.Schema;

let CartsSchema = new Schema({
    "userid" : {type:Number},
    "totalPrice" : {type:Number},
    "checked" : {type:Boolean},
    "shops":{type:Object}
})

let CartsModel = mongoose.model("mycarts",CartsSchema)


module.exports = {

    /**
     * 添加一个用户信息
     * @param u 用户信息
     * @param cb 返回的结果
     */
    addUser(u,cb){
        var user = new CartsModel(u)
        user.save(cb)
    },

    /**
     * 删除指定条件的用户
     * @param where {k:v}
     * @param cb
     */
    delUser(where,cb){
        CartsModel.deleteOne(where,cb)
    },

    /**
     * 根据条件更新用户信息
     * @param where
     * @param setObj
     * @param cb
     */
    updateUser(where,setObj,cb){
        CartsModel.updateOne(where,setObj,cb)
    },

    /**
     * 根据条件查找购物车信息
     * @param where
     * @param cb
     */
    findCart(where,cb){
        CartsModel.find(where,cb)
    },

    /**
     * 根据条件返回分页的用户信息
     * @param where
     * @param pageIndex
     * @param pageSize
     * @param cb
     */
    findUsersByPager(where,pageIndex,pageSize,cb){
        CartsModel.find(where).skip(pageIndex*pageSize).limit(pageSize).exec(cb)
    }
}