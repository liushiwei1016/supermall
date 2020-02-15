import {ADD_CAR} from "./actions-type";
import {ADD_COUNTER, ADD_TOCART} from "./mutations-type";

export default {
  //payload是新添加的商品
  [ADD_CAR](context, payLoad) {
    return new Promise((resolve, reject) => {
      //1，在查找之前判断是否有该商品
      let oldProduct = context.state.carList.find(item => item.iid === payLoad.iid);

      //2，判断oldProduct，如果有该商品数量加一，没有就添加到carList中
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve('数量加一')
      } else {
        payLoad.count = 1;
        context.commit(ADD_TOCART, payLoad);
        resolve('添加成功')
      }
    })
  }
}
