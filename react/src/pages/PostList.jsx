import { useEffect, useState } from "react"

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
      <pre>{JSON.stringify(postList, undefined, 2)}</pre>
    </div>
  )
}
