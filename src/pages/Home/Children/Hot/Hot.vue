<template>
    <div class="hot">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../imgs/rowing/s1.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../../imgs/rowing/s2.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../../imgs/rowing/s3.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../../imgs/rowing/s4.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../../imgs/rowing/s5.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../../imgs/rowing/s6.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../../imgs/rowing/s7.png" alt="" width="100%"></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <hot-nav/>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'

  import HotNav from './HotNav'

    export default {
        name: "Hot",
        components:{
          HotNav
        },
        mounted() {
          new Swiper('.swiper-container', {
            autoplay: true,//等同于以下设置
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        }
        }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .hot
      width 100%
      height 100%
      padding-top 46px
      background #F5F5F5
</style>
