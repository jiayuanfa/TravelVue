<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  // 此处的~@代表就是src目录，也就是../../../
  @import '~@/assets/styles/varibles.styl';
.header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
  .header-left
    width: 0.64rem
    float: left
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .12rem
    text-align: left
    background: #fff
    padding-left: .3rem
    border-radius: .1rem
    color: #ccc
    .search-icon
     font-size: .3rem
  .header-right
    width: 1.24rem
    float: right
    text-align: center
    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem
</style>
