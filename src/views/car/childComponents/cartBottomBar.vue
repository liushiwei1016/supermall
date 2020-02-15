<template>
  <div class="bottom-menu">
    <div class="left" @click="checkClick">
      <check-button :is-checked="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="right">
      <span class="total-price">合计: ¥{{allPeice}}</span>
      <span class="buy-product" @click="allCheckClick">去计算({{allCheck}})</span>
    </div>

  </div>
</template>

<script>

  import CheckButton from "components/content/checkButton/checkButton";
  import {mapGetters} from 'vuex'

  export default {
    name: "cartBottomBar",
    components: {CheckButton},
    data() {
      return {
        isChecked: this.$store.state.carList.checked
      }
    },
    computed: {
      ...mapGetters(['cartList']),

      allPeice() {
        //先使用find 方法过滤出所有选中的商品，再使用reduce计算汇总
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.Price * item.count
        }, 0).toFixed(2)
      },

      //选中的长度
      allCheck() {
        return this.cartList.filter(item => item.checked).length
      },

      //是否全选
      isSelectAll() {
        if (this.cartList.length === 0) return false;
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      //点击checked反选
      checkClick() {
        //全部选中的情况下
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          //部分选中或全部没选中
          this.cartList.forEach(item => item.checked = true)
        }
      },
      allCheckClick(){
        if(!this.isSelectAll){
          this.$toast.show('请选择要结算的商品')
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    font-size: 14px;
    color: #888;
    padding-left: 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom-menu .left {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .bottom-menu .left span {
    margin-left: 5px;
  }

  .bottom-menu .right {
    line-height: 44px;
  }

  .bottom-menu .total-price {
    margin-right: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
