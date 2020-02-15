<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :isChecked="itemInfo.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="itemInfo.imgURL" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-text">
        <div class="item-title">{{itemInfo.title}}</div>
        <div class="item-desc">{{itemInfo.desc}}</div>
      </div>
      <div class="info-bottom">
        <div class="item-price">¥{{itemInfo.Price}}</div>
        <div class="item-count">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/checkButton";

  export default {
    name: "cartListItem",
    components: {CheckButton},
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mounted() {
      console.log(this.itemInfo)
    },
    methods: {
      //点击checked反选
      checkClick() {
        this.itemInfo.checked = !this.itemInfo.checked
      }
    }
  }
</script>

<style lang="scss" scoped>
  #shop-item {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1.2;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    flex: 2.5;
  }

  .item-img img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 8;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>
