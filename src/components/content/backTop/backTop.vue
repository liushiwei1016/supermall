<template>
   <div class="btnTop">
     <img src="~images/common/top.png" alt="">
   </div>
</template>

<script>
  export default {
    name: "backTop"
  }
</script>

<style scoped>
.btnTop{
  position: fixed;
  bottom: 55px;
  right: 5px;
  z-index: 999;
  width: 45px;
}
</style>
