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
  },
  {
    path: '/edit/:id',
    component: PostForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;