<template>
  <div id="app">
    <router-view></router-view>
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
