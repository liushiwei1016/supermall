import {$axios} from "./request";

export function getDetailData(iid) {
  return $axios({
    url: '/detail',
    params:{
      iid
    }
  })
}
