<template>
  <tab-bar>
    <tab-bat-item path="/home" activeColor="deeppink">
      <img slot="icon" src="~images/tabar/home.png">
      <img slot="icon_active" src="~images/tabar/home_active.png">
      <div slot="text">首页</div>
    </tab-bat-item>
    <tab-bat-item path="/categroy" activeColor="deeppink">
      <img slot="icon" src="~images/tabar/category.png">
      <img slot="icon_active" src="~images/tabar/category_active.png">
      <div slot="text">分类</div>
    </tab-bat-item>
    <tab-bat-item path="/car" activeColor="deeppink">
      <img slot="icon" src="~images/tabar/car.png">
      <img slot="icon_active" src="~images/tabar/cat_active.png">
      <div slot="text">购物车</div>
    </tab-bat-item>
    <tab-bat-item path="/profile" activeColor="deeppink">
      <img slot="icon" src="~images/tabar/profile.png">
      <img slot="icon_active" src="~images/tabar/profile_active.png">
      <div slot="text">我的</div>
    </tab-bat-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabar/TabBar";
  import TabBatItem from "components/common/tabar/TabBatItem";

  export default {
    name: "MainTabar",
    components: {
      TabBar,
      TabBatItem
    },
  }
</script>

<style scoped>

</style>
