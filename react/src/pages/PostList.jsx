import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostItem from "../components/PostItem.jsx";

export default function PostList() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPostList(posts);
      });
    return () => {
      console.log("Destroy");
    };
  }, []);

  function onDelete(post) {
    setPostList(postList.filter((p) => p.id != post.id));
  }

  return (
    <>
      <p>
        <Link to="/new" className="btn btn-success">
          Add new
        </Link>
      </p>
      <div>
        {postList.map((post) => (
          <PostItem key={post.id} post={post} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
}
