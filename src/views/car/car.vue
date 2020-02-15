<template>
  <div id="car">
    <!--顶部导航栏-->
    <nav-bar class="middle">
      <div slot="middle">购物车({{length}})</div>
    </nav-bar>
    <!--购物车列表-->
    <cart-list></cart-list>
    <!--底部汇总-->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/navBar";
  import {mapGetters} from 'vuex'
  import CartList from "./childComponents/cartList";
  import CartBottomBar from "./childComponents/cartBottomBar";

  export default {
    name: "car",
    components: {CartBottomBar, CartList, NavBar},
    computed: {
      //语法一
      // ...mapGetters(['cartLength'])
      //语法二(要取另外一个名字就使用对象模式)
      ...mapGetters({
        length: 'cartLength'
      })
    }
  }
</script>

<style lang="scss" scoped>
  #car {
    height: 100vh;
    position: relative;

    .middle {
      background-color: $bgColor;
      color: #fff;
    }
  }
</style>
