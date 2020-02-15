<template>
  <div>
    <nav-bar>
      <div slot="left" @click="prev">
        <img src="~images/common/back.svg" alt="">
      </div>
      <div slot="middle"
           v-for="(item,index) in title"
           @click="detailNavClick(index)"
           :class="[{activeTitle:currentIndex1===index},'title']"
      >
        {{item}}
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/navBar";

  export default {
    name: "detailNavBar",
    components: {NavBar},
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex1: 0
      }
    },
    methods: {
      detailNavClick(index) {
        this.currentIndex1 = index;
        this.$emit('titleClick',index)
      },
      prev() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navBar {
    background-color: #fff;
  }

  .middle {
    display: flex;

    & div {
      flex: 1;
      width: 100%;
      height: 100%;
    }

    .title {
      font-size: 14px;
    }

    .activeTitle {
      color: $bgColor;
    }
  }
</style>
