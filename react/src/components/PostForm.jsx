import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import router from "../router";

export default function PostForm() {
  const [model, setModel] = useState({
    id: "",
    title: "",
    body: "",
  });
  const params = useParams()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
      .then((res) => res.json())
      .then((post) => {
        setModel(post);
      });
  }, []);

  function onSubmit(ev) {
    ev.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(model),
    })
      .then((res) => res.json())
      .then((res) => {
        router.navigate("/");
      });
  }

  return (
    <div>
      <p>
        <Link to="/" className="btn btn-outline-secondary">
          Back to Posts
        </Link>
      </p>
      <form onSubmit={onSubmit}>
        <h1>{ model.id ? 'Edit Post' : 'Create new Post' }</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={model.title}
            onInput={(ev) => setModel({ ...model, title: ev.target.value })}
            placeholder="Post Title"
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
            value={model.body}
            onInput={(ev) => setModel({ ...model, body: ev.target.value })}
            placeholder="Post Body"
          ></textarea>
        </div>
        <p>
          <button
            disabled={!model.title || !model.body}
            className="btn btn-success"
            type="submit"
          >
            Submit
          </button>
        </p>
      </form>
    </div>
  );
}
