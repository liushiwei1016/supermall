import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const home = ()=> import('views/home/home')
const car = ()=> import('views/car/car')
const categroy = ()=> import('views/categroy/categroy')
const profile = ()=> import('views/profile/profile')
const detail = ()=> import('views/detail/detail')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/categroy',
    name: 'categroy',
    component: categroy
  },
  {
    path: '/car',
    name: 'car',
    component: car
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/detail/:iid',
    name: 'detail',
    component: detail
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
