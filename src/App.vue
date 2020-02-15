<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabar v-if="tabarShow"></main-tabar>
  </div>
</template>


<script>
  import MainTabar from "./components/content/mainTabar/MainTabar";

  export default {
    components: {MainTabar},
    data() {
      return {
        tabarShow: true
      }
    },
    watch: {
      $route(e) {
        var that = this;
        if (e.name == 'detail') {
          that.tabarShow = false
        } else {
          that.tabarShow = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
