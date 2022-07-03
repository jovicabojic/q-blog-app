import Vue from 'vue'
import VueRouter from 'vue-router'
import PostsListPage from '@/pages/PostsListPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PostsListPage',
    component: PostsListPage
  },
  {
    path: '/posts/:id',
    name: 'SinglePostPage',
    component: () => import(/* webpackChunkName: "post" */ '../pages/SinglePostPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
