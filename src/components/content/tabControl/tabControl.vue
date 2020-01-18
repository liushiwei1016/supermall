<template>
  <div class="tabControl">
    <div v-for="(item, index) in title"
         :class="[{active:index===currentIndex},'tabControl-item']"
         @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('currentClick',index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabControl {
    display: flex;
    height: 44px;
    align-items: center;
    background-color: #fff;
    position: sticky;
    top: 44px;

    .active.tabControl-item {
      span {
        border-bottom: 2px solid $bgColor;
        color: $bgColor;
      }
    }

    .tabControl-item {
      flex: 1;
      text-align: center;

      span {
        border-bottom: 2px solid #fff;
        padding-bottom: 2px;
        font-size: 15px;
        color: $textColor;
      }
    }
  }
</style>
