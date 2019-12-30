<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navBar"
  }
</script>

<style lang="scss" scoped>
  .navBar {
    height: 44px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .left {
      width: 60px;
      height: 100%;
    }

    .middle {
      flex: 1;
      height: 100%;
    }

    .right {
      width: 60px;
      height: 100%;
    }
  }
</style>
