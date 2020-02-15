<template>
  <div id="detail">
    <!--顶部标题-->
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            @scroll="scrollTop"
    >
      <!--轮播图-->
      <mt-swipe class="mint-swipe" :auto="4000">
        <mt-swipe-item v-for="item in topImages">
          <img :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"
                         @imageLoad="imageLoad"
      >
      </detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <!--底部菜单栏-->
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <!--返回顶部按钮-->
    <back-top v-show="showBtn" @click.native="backClick"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/detailNavBar";
  import {getDetailData, getRecommend, Goods, Shop, GoodsParam} from "../../network/detail";
  import DetailBaseInfo from "./childComponents/detailBaseInfo";
  import DetailShopInfo from "./childComponents/detailShopInfo";
  import DetailGoodsInfo from "./childComponents/detailGoodsInfo";
  import Scroll from "../../components/common/scroll/scroll";
  import DetailParamInfo from "./childComponents/detailParamInfo";
  import DetailCommentInfo from "./childComponents/detailCommentInfo";
  import GoodsList from "components/content/goods/goodsList";
  //导入混入
  import {itemListenerMixin, backTopMinin} from "common/mixin";
  import {debounce} from "common/utils";
  import DetailBottomBar from "./childComponents/detailBottomBar";
  //vueX 别名导入
  import {ADD_CAR} from "../../store/actions-type";


  export default {
    name: "detail",
    components: {
      DetailBottomBar,
      GoodsList,
      DetailCommentInfo,
      DetailParamInfo,
      Scroll,
      DetailGoodsInfo,
      DetailShopInfo,
      DetailBaseInfo,
      DetailNavBar
    },
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommend: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    created() {
      // 一,拿到商品的 iid
      this.iid = this.$route.params.iid;

      // 二,获取商品数据
      getDetailData(this.iid).then(res => {
        const data = res.result;
        //1，获取顶部轮播图片
        this.topImages = data.itemInfo.topImages;
        //2，获取商品详细信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        //3，获取店铺信息
        this.shop = new Shop(data.shopInfo);
        //4，获取商品详情信息
        this.detailInfo = data.detailInfo;
        //5，获取商品参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //6，获取评论的信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      });

      // 三,获取推荐数据
      getRecommend().then(res => {
        this.recommend = res.data.list
      });

      // 四，给getThemeTopY赋值(给this.themeTopYs赋值炒作进行防抖)
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        console.log(this.themeTopYs);
      }, 150)
    },

    //使用混入
    mixins: [itemListenerMixin, backTopMinin],
    mounted() {
      //已添加混入
    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      //图片加载完的回调函数
      imageLoad() {
        this.$refs.scroll.refresh();
        this.getThemeTopY()
      },
      //点击详情顶部导航，跳到对应的主体内容模块
      titleClick(index) {
        this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },
      //监听scroll滚动事件，实现内容与顶部导航的联动
      scrollTop(position) {
        //获取scrollY的值
        const positionY = -position.y;
        let length = this.themeTopYs.length;
        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex1 = this.currentIndex
          }
        }
        //判断回顶按钮是否显示
        this.isShowBtn(position)
      },
      // //点击返回顶部(已经在混入中添加)
      // backClick() {
      //   this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      // },

      //点击添加购物车
      addToCart() {
        // 1.创建对象
        const product = {};
        // 2.添加对象信息
        product.iid = this.iid;
        product.imgURL = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.Price = this.goods.realPrice;
        // 将product里面的数据添加到vuex里面
        this.$store.dispatch(ADD_CAR, product).then(res => {
          console.log(res);
          this.$toast.show(res)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #detail .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  #detail .mint-swipe {
    height: 300px;
    margin-top: 44px;

    img {
      width: 100%;
    }
  }

  #detail .navBar {
    position: static;
  }

  #detail /deep/ .mint-swipe-indicator {
    opacity: 1;
    background-color: #fff;
  }

  #detail /deep/ .mint-swipe-indicator.is-active {
    background-color: #ff3d00;
  }
</style>
