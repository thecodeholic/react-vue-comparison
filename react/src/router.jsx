import { createBrowserRouter } from "react-router-dom";
import PostList from "./pages/PostList";

const routes = [
  {
    path: '/',
    element: <PostList />
  }
]

const router = createBrowserRouter(routes)

export default router;