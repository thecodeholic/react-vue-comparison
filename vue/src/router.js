import { createRouter, createWebHistory } from "vue-router";
import PostList from './pages/PostList.vue'
import PostForm from './pages/PostForm.vue'

const routes = [
  {
    path: '/',
    component: PostList
  },
  {
    path: '/new',
    component: PostForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;