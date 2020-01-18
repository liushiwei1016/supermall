<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <mt-swipe class="mint-swipe" :auto="4000">
      <mt-swipe-item v-for="item in topImages">
        <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponants/detailNavBar";
  import {getDetailData} from "../../network/detail";

  export default {
    name: "detail",
    components: {DetailNavBar},
    data() {
      return {
        iid: null,
        topImages: null
      }
    },
    created() {
      // 1,拿到商品的 iid
      this.iid = this.$route.params.iid;
      // 2,获取商品数据
      getDetailData(this.iid).then(res => {
        console.log(res);
        this.topImages = res.result.itemInfo.topImages
      })
    },
  }
</script>

<style lang="scss" scoped>
  #detail .mint-swipe {
    height: 300px;
    margin-top: 44px;

    img {
      width: 100%;
    }
  }

  #detail .navBar {
    position: static;
  }

  #detail /deep/ .mint-swipe-indicator {
    opacity: 1;
    background-color: #fff;
  }

  #detail /deep/ .mint-swipe-indicator.is-active {
    background-color: #ff3d00;
  }
</style>
