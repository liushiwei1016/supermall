<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <!--实现吸顶效果-->
    <tab-control :title="title"
                 @currentClick="currentClick"
                 ref="tabContent1"
                 class="tabContent"
                 v-show="isTabFixed"
    ></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="scrollTop"
            @pullingUp="pullingUp"
    >
      <mt-swipe class="mint-swipe" :auto="4000">
        <mt-swipe-item v-for="item in banners">
          <img :src="item.image" alt="" @load="sweipeIMageLoad">
        </mt-swipe-item>
      </mt-swipe>
      <recommdend :recommends="recommends" class="recommends"></recommdend>
      <feature></feature>
      <tab-control :title="title"
                   @currentClick="currentClick"
                   ref="tabContent2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top v-show="showBtn" @click.native="backClick"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/navBar";
  import {getHomeMultidata, getHomeGoods} from "network/home";
  import Recommdend from "./childComponents/recommdend";
  import Feature from "./childComponents/feature";
  import TabControl from "components/content/tabControl/tabControl";
  import GoodsList from "components/content/goods/goodsList";
  import Scroll from "components/common/scroll/scroll";
  import {itemListenerMixin, backTopMinin} from "common/mixin";

  export default {
    name: "home",
    components: {
      Scroll,
      GoodsList,
      TabControl,
      Feature,
      Recommdend,
      NavBar
    },
    data() {
      return {
        banners: [],
        recommends: [],
        title: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        tabOffsetTop: 0,//TabControl距离顶部的距离
        isLoad: false,
        isTabFixed: false,
        saveY: 0, //记录scroll组件滚动的值
      }
    },

    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoodsdata('pop');
      this.getHomeGoodsdata('new');
      this.getHomeGoodsdata('sell')
    },


    //使用混入
    mixins: [itemListenerMixin, backTopMinin],

    mounted() {
      // 已添加混入对象 itemListenerMixin
    },
    methods: {
      /**
       * 网络请求相关方法
       **/
      //请求多个数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      //请求商品数据
      getHomeGoodsdata(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

          this.$refs.scroll.scroll.finishPullUp()
        })
      },

      /**
       * 事件监听相关方法
       **/
      currentClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break
        }
        //让两个tabContent的选中选保持一致
        this.$refs.tabContent1.currentIndex = index;
        this.$refs.tabContent2.currentIndex = index;
      },
      //点击返回顶部(这里已经在混入中添加)
      // backClick() {
      //   this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      // },
      //判断返回顶部按钮的显示与隐藏
      scrollTop(position) {
        //判断回顶按钮是否显示
        this.isShowBtn(position);

        //判断tabControl是否吸顶(position: fixed;)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },

      //上拉加载事件
      pullingUp() {
        //触发上拉加载事件，再次调用获取数据的方法
        this.getHomeGoodsdata(this.currentType);

        /*因为滚动时图片可能还没有加载完，导致scroll计算出来的滚动的高度与实际的高度有误差，
         *所以要通过refresh方法重新计算
        */
        this.$refs.scroll.refresh()
      },

      sweipeIMageLoad() {
        //设置只获取一次offsetTop
        if (!this.isLoad) {
          this.tabOffsetTop = this.$refs.tabContent2.$el.offsetTop;
          this.isLoad = true
        }

      }

    },
    /**
     * 解决页面跳转滚动位置没有保存
     * 方案：1，在deactivated钩子函数里记录离开时的scroll 滚动的高度
     *      2，在activated钩子函数里进入时更新scroll 滚动的高度
     **/
    activated() {
      // 进入时更新 scroll 的高度
      this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0);
      this.$refs.scroll.scroll.refresh()

    },
    deactivated() {
      //1,离开的时候记录 scroll 滚动的高度
      this.saveY = this.$refs.scroll.scroll.y;
      //2,取消全局事件的监听
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    }

  }
</script>

<style lang="scss" scoped>

  #home {
    height: 100vh;
    position: relative;

  }

  #home .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .home-nav {
    background-color: $bgColor;
    color: #fff;
  }

  #home .mint-swipe {
    height: 195px;

    img {
      width: 100%;
    }
  }

  #home /deep/ .mint-swipe-indicator {
    opacity: 1;
    background-color: #fff;
  }

  #home /deep/ .mint-swipe-indicator.is-active {
    background-color: #ff3d00;
  }

  #home .recommends {
    border-bottom: 8px solid #e6e6e6;
    padding: 10px 0 20px 0;
  }

  .tabContent {
    position: relative;
    z-index: 999;
  }
</style>
