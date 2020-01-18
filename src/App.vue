<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabar></main-tabar>
  </div>
</template>


<script>
  import MainTabar from "./components/content/mainTabar/MainTabar";

  export default {
    components: {MainTabar}
  }
</script>

<style lang="scss" scoped>

</style>
