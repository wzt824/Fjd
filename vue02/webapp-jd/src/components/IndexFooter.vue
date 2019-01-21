<template>
    <div class="footer">
      <router-link class="foot" to="/index"><i class="iconfont icon-shouye"></i>首页</router-link>
      <router-link class="foot" to="/selects"><i class="iconfont icon-fenlei"></i>分类</router-link>
      <router-link class="foot" to="/find"><i class="iconfont icon-faxian"></i>发现</router-link>
      <router-link class="foot" to="/shopcarts"><i class="iconfont icon-lanmangouwuche"></i>购物车 <span>2</span></router-link>
      <router-link class="foot" to="/my"><i class="iconfont icon-wode"></i>我的</router-link>
    </div>
</template>

<script>
    export default {
        name: "IndexFooter"
    }
</script>

<style lang="stylus" scoped>
  $active-color = #ba2924
.footer
  z-index 9999
  display flex
  align-items center
  justify-content space-around
  width 100%
  background-color #ffffff
  border-top 1px solid #e2e2e2
.foot
  display flex
  justify-content space-around
  align-items center
  font-size .15rem
  flex-direction column
  color #4c4c4c
  position relative
i
  font-size .35rem

.router-link-active
  color $active-color
span
  display block
  width .2rem
  height .2rem
  border 1px solid $active-color
  color $active-color
  border-radius 50%
  text-align center
  line-height .2rem
  font-weight 600
  position absolute
  right 0
  top .05rem
</style>
