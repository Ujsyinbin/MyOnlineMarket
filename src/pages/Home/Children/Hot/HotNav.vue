<template>
  <div class="hot-nav">
    <div class="hot-nav-content">
      <div class="nav-content-inner">
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon01.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon02.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon03.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon04.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon05.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon06.gif" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon07.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon08.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon09.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon10.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon11.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon12.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon13.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon14.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon15.png" alt=""/>
          <span>限时打折</span>
        </a>
        <a class="inner-item">
          <img src="../../imgs/nav/nav_icon16.png" alt=""/>
          <span>限时打折</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"HotNav"
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot-nav
    width 100%
    height 180px
    position relative
    background-color #FFFFFF
    padding-bottom 10px
    .hot-nav-content
      width 100%
      overflow-x scroll
      .nav-content-inner
        width 720px
        height 180px
        display flex
        flex-wrap wrap
        .inner-item
          width 90px
          height 90px
          display flex
          flex-direction column
          justify-content center
          align-items center
          font-size 14px
          color #666
          img
            width 40%
            margin-bottom 5px
</style>
