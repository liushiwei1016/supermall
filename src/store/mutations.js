//导入vueX别名
import {ADD_COUNTER, ADD_TOCART} from "./mutations-type";

/*mutations 的唯一目的就是修改state中的状态，并且每个方法做的事情尽可能单一一点*/
export default {
  //点击商品数量加一
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  //点击添加购物车
  [ADD_TOCART](state, payload) {
    payload.checked = true;
    state.carList.push(payload)
  },
}
