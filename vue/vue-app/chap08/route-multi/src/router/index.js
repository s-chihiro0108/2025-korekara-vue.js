import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Article from '../views/Article.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    components: {
      default: Main,
      sub: Article
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
