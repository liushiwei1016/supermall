<template>
  <div class="tabBar-item" @click="activeClick">
    <div v-if="!isActive" class="icon">
      <slot name="icon"></slot>
    </div>
    <div v-else class="icon_active">
      <slot name="icon_active"></slot>
    </div>
    <div :style="activeStyle" class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBatItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'deeppink'
      }
    },
    data() {
      return {}
    },
    methods: {
      activeClick() {
        this.$router.replace(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabBar-item {
    flex: 1;
    text-align: center;

    div img {
      width: 22px;
    }

    .text {
      font-size: 12px;
      margin-top: 5px;
      color: #3c3c3c;
    }
  }
</style>
