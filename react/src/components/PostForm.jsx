import { useState } from "react";
import router from "../router";

export default function PostForm() {
  const [model, setModel] = useState({
    title: "",
    body: "",
  });

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
      <form onSubmit={onSubmit}>
        <h1>Create new Post</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            onInput={(ev) => setModel({ ...model, title: ev.target.value })}
            placeholder="Post Title"
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
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
