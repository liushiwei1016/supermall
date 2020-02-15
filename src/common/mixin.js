/**
 * 混入代码抽取注意事项：
 * 1，如果是生命周期里面的代码块可以对其抽取
 * 2，如果是methods里面的方法，只能抽取整个方法，不抽取方法里面的代码块
 * 3，如果抽取代码有用到组件或函数的，需要对其引入
 **/

import {debounce} from "./utils";
import BackTop from "components/content/backTop/backTop";

//混入的代码
export const itemListenerMixin = {
  data(){
    return{
      itemImgListener:null
    }
  },
  mounted() {
    //监听goodsListItem里面的图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    //对监听的时间进行保存
    this.itemImgListener = () => {
      refresh()
    };
    this.$bus.$on('itemImageLoad', this.itemImgListener);
  }
};


export const backTopMinin = {
  components:{
    BackTop,
  },
  data() {
    return {
      showBtn: false
    }
  },
  methods:{
    //点击返回顶部
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    //判断会到顶部按钮是否显示
    isShowBtn(position){
      this.showBtn = (-position.y) > 1000
    }
  }
};
