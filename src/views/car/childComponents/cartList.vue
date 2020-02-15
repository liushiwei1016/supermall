<template>
  <!--scroll必须要有一个固定的高度-->
  <scroll class="content" ref="scroll">
    <cart-list-item
      v-for="(item,index) in cartList"
      :itemInfo="item"
      :key="index"
    >
    </cart-list-item>
  </scroll>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Scroll from "components/common/scroll/scroll";
  import CartListItem from "./cartListItem";

  export default {
    name: "cartList",
    components: {
      CartListItem,
      Scroll
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.scroll.refresh()
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
