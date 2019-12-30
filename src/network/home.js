import {$axios} from './request';

export function getHomeMultidata() {
  return $axios({
    url: '/home/multidata'
  })
}
