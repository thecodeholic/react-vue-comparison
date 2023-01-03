import { createBrowserRouter } from "react-router-dom";
import PostForm from "./pages/PostForm";
import PostList from "./pages/PostList";

const routes = [
  {
    path: '/',
    element: <PostList />
  },
  {
    path: '/new',
    element: <PostForm />
  },
  {
    path: '/edit/:id',
    element: <PostForm />
  }
]

const router = createBrowserRouter(routes)

export default router;