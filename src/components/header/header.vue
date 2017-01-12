<template>
  <div class="header">
    <div class="content-wrapper clearfix">
      <div class="avatar">
        <img :src="sellers.avatar" alt="avatar" width="64">
      </div>
      <div class="content">
        <h1 class="title">
          <span class="brand"></span>
          <span class="name">{{ sellers.name }}</span>
        </h1>
        <p class="desc">{{ sellers.description }} / {{ sellers.deliveryTime }}分钟送达</p>
        <p class="support" v-if="sellers.supports" >
          <span class="icon" :class="supportClassMap[sellers.supports[0].type]"></span>
          <span class="text"> {{ sellers.supports[0].description}} </span>
        </p>
      </div>
      <div class="support-count" v-if="sellers.supports">
        <span class="count"> {{ sellers.supports.length }}个 </span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-icon"></span>
      <p class="text"> {{ sellers.bulletin }} </p>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      sellers: {
        type: Object
      }
    },
    created () {
      this.supportClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

@import '../../common/stylus/mixin.styl';

  .header
    color: #fff
    background-color: #777
    font-size: .3rem
    .content-wrapper
      position: relative
      padding-top: .24rem
      padding-right: .12rem
      padding-left: .24rem
      .avatar
        float: left
        margin-right: .16rem
        & > img
          display: block
          border-radius: .02rem
      .content
        float: left
        .title
          margin-top: .02rem
          margin-bottom: .08rem
          font-size: 0
          .brand
            width: .3rem
            height: .18rem
            display: inline-block
            media-image("brand")
            background-repeat: no-repeat
            background-size: cover
            vertical-align: top
          .name
            font-size: .16rem
            font-weight: bold
        .desc
          margin-bottom: .1rem
          font-size: .12rem
        .support
          line-height: .12rem
          font-size: 0
          .icon
            width: .12rem
            height: .12rem
            display: inline-block
            vertical-align: top
            background-repeat: no-repeat
            background-size: cover
            &.decrease
              media-image('decrease_1')
            &.discount
              media-image('discount_1')
            &.guarantee
              media-image('guarantee_1')
            &.invoice
              media-image('invoice_1')
            &.special
              media-image('special_1')
          .text
            font-size: .1rem
      .support-count
        height: .24rem
        line-height: .24rem
        position: absolute
        right: .12rem
        bottom: .18rem
        padding: 0 .08rem
        background-color: rgba(0, 0, 0, .2)
        border-radius: .14rem
        text-align: center
        .count
          font-size: .1rem
          vertical-align: middle
        .icon-keyboard_arrow_right
          font-size: .12rem
          vertical-align: middle
    .bulletin-wrapper
      height: .28rem
      line-height: .28rem
      padding: 0 .22rem 0 .12rem
      text-overflow: ellipsis
      white-space: nowrap
      overflow: hidden
      .bulletin-icon
        width: .22rem
        height: .12rem
      .text
        display: inline
</style>
