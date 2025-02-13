import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/article/:aid(\\d{2,3})',
    name: 'ArticleView',
    component: ArticleView,
    props: true
  },
  {
    path: '/article/:aid',
    name: 'Article2View',
    component: Article2View,
    redirect: '10'
  },
  {
    path: '/search/:keywd',
    name: 'Search',
    component: Search,
    props: true
  },
  {
    path: '/search',
    name: 'SearchQuery',
    redirect: to => `/search/${to.query.keywd}`
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
