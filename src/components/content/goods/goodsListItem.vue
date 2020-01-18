<template>
  <div class="goodsListItem" @click="itemClick">
    <div class="item_img">
      <img :src="item.show.img" alt="" @load="imageLoad">
    </div>
    <div class="item_p">
      <p class="item_title">{{item.title}}</p>
      <div class="item_btn">
        <span>{{item.price}}</span>
        <span>
          <div class="icon"></div>
          {{item.cfav}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodsListItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad');
      },
      itemClick() {
        this.$router.push('/detail/' + this.item.iid)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goodsListItem {
    width: 48%;
    font-size: 15px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    .item_img {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        border-radius: 5px;
      }
    }

    .item_p {
      .item_title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 95%;
        text-align: center;
        color: #3c3c3c;
        padding: 5px 0;
      }

      .item_btn {
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & span:first-child {
          color: $sbgColor;
        }

        & span:last-child {
          display: flex;
          align-items: center;
          color: $sbgColor;

          .icon {
            width: 20px;
            height: 20px;
            background: url("~images/detail/detail_bottom.png") no-repeat;
            background-size: 20px;
          }
        }
      }
    }
  }

</style>
