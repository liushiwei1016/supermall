<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
  export default {
    name: "toast",
    data() {
      return {
        isShow: false,
        message: ''
      }
    },
    methods: {
      show(message, time=1500) {
        console.log('111');
        this.isShow = true;
        this.message = message;

        setTimeout(() => {
          this.isShow = false;
          this.message = ''
        }, time)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    background-color: rgba(0, 0, 0, .75);
    padding: 10px;
    border-radius: 5px;
    z-index: 99;
  }
</style>
