<template>
  <div class="recommend">
    <a class="box" v-for="item in recommends" :href="item.link">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </a>
  </div>
</template>

<script>
  export default {
    name: "recommdend",
    props: {
      recommends: Array
    }
  }
</script>

<style lang="scss" scoped>
  .recommend {
    display: flex;
    .box{
      flex: 1;
      text-align: center;
      color: #3c3c3c;
      font-size: 14px;
      img{
        width: 80%;
        margin: 10px 0;
      }
    }
  }
</style>
