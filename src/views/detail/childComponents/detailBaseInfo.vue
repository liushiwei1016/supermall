<template>
  <div v-if="Object.keys(goods).length!==0" class="info-box">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-Price">{{goods.newPrice}}</span>
      <span class="old-Price">{{goods.oldPrice}}</span>
      <span class="info-discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info-box {
    padding: 20px 10px;
    border-bottom: 3px solid #e7e7e7;

    .info-title {
      font-size: 16px;
      color: $textColor;
    }

    .info-price {
      padding: 10px 0;

      .new-Price {
        font-size: 20px;
        color: $bgColor;
      }

      .old-Price {
        font-size: 14px;
        color: #969696;
        text-decoration: line-through;
      }

      .info-discount {
        display: inline-block;
        padding: 4px;
        background-color: $bgColor;
        color: #fff;
        font-size: 12px;
        border-radius: 5px;
      }

      & span {
        margin-right: 10px;
      }
    }

    .info-other {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #969696;
    }

    .info-service {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #3c3c3c;

      .info-service-item {
        display: flex;
        align-items: center;
        img {
          width: 13px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
