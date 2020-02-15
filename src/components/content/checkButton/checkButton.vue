<template>
  <div :class="[{CheckButton:isChecked} ,'check']">
    <img src="~images/cart/tick.svg" alt="">
  </div>
</template>

<script>

  export default {
    name: "checkButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style lang="scss" scoped>
  .check {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #aaa;
    position: relative;

    & > img {
      width: 80%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .CheckButton.check {
    background-color: $sbgColor;
    border: none;
  }
</style>
