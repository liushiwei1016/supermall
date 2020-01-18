<template>
  <div class="goods_box">
    <goods-list-item v-for="item in goods"
                     :item="item"
                     class="goods-list-item"
    >

    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./goodsListItem";

  export default {
    name: "goodsList",
    components: {GoodsListItem},
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods_box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
  }

</style>
