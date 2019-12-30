<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style lang="scss" scoped>
  .tabBar {
    height: 49px;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, .06);
  }
</style>
