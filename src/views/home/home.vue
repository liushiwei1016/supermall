<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <mt-swipe class="mint-swipe" :auto="4000">
      <mt-swipe-item v-for="item in banners">
        <img :src="item.image" @load="imgLoad" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <recommdend :recommends="recommends" class="recommends"></recommdend>
    <feature></feature>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/navBar";
  import {getHomeMultidata} from "network/home";
  import Recommdend from "./childComps/recommdend";
  import Feature from "./childComps/feature";

  export default {
    name: "home",
    components: {
      Feature,
      Recommdend,
      NavBar
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    methods: {
      imgLoad() {
        console.log('111');
      }
    }

  }
</script>

<style lang="scss" scoped>
  #home {
    padding: 44px 0 49px 0;
  }

  .home-nav {
    background-color: $bgColor;
    color: #fff;
  }

  #home .mint-swipe {
    height: 195px;

    img {
      width: 100%;
    }
  }

  #home /deep/ .mint-swipe-indicator {
    opacity: 1;
    background-color: #fff;
  }

  #home /deep/ .mint-swipe-indicator.is-active {
    background-color: #ff3d00;
  }

  #home .recommends {
    border-bottom: 8px solid #e6e6e6;
    padding: 10px 0 20px 0;
  }
</style>
