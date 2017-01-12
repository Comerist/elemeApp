<template>
<div>
  <v-header :sellers="sellers"></v-header>
  <div class="nav border-1px">
    <div class="nav-item"><a v-link="{path: '/wares'}">商品</a></div>
    <div class="nav-item"><a v-link="{path: '/comments'}">评价</a></div>
    <div class="nav-item"><a v-link="{path: '/sellers'}">商家</a></div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import header from './components/header/header'

const ERR_OK = 0;

export default {
  components: {
    'v-header': header
  },
  data () {
    return {
      sellers: {}
    }
  },
  created () {
    this.$http.get('/api/sellers').then((response) => {
      // success callback
      response = response.body;
      if (response.errno === ERR_OK) {
        this.sellers = response.data;
      }
    }, (response) => {
      // error callback
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin.styl';
    #app
        .nav
            width: 100%
            height: .4rem
            display: flex
            line-height: .4rem
            background-color: #fff
            // border-bottom: 1px solid rgba(7, 17, 27, .1)
            border-1px(rgba(7, 17, 27, .1))
            .nav-item
                flex: 1
                & > a
                  display: block
                  font-size: .14rem
                  color: rgb(77, 85, 93)
                  text-align: center
                  &.active
                    color: rgb(240, 20, 20)

</style>
