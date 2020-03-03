<template>
    <div class="hot">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../imgs/s1.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../imgs/s2.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../imgs/s3.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../imgs/s4.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../imgs/s5.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../imgs/s6.png" alt="" width="100%"></div>
            <div class="swiper-slide"><img src="../imgs/s7.png" alt="" width="100%"></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'

    export default {
        name: "Hot",
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
