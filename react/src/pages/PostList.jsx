import { useEffect, useState } from "react"
import PostItem from "../components/PostItem.jsx"

export default function PostList() {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        setPostList(posts)
      })
    return () => {
      console.log("Destroy")
    }
  }, [])
  


  return (
    <div>
      {postList.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
