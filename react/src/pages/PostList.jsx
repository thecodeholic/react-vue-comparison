import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostItem from "../components/PostItem.jsx";
import { useStateContext } from "../ContextProvider.jsx";

export default function PostList() {
  const { posts } = useStateContext();

  return (
    <>
      <p>
        <Link to="/new" className="btn btn-success">
          Add new
        </Link>
      </p>
      <div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post}/>
        ))}
      </div>
    </>
  );
}
