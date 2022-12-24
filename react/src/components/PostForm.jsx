import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useStateContext } from "../ContextProvider";
import router from "../router";

export default function PostForm() {
  const [model, setModel] = useState({
    id: "",
    title: "",
    body: "",
  });
  const params = useParams();
  const { getSinglePost, savePost } = useStateContext();

  useEffect(() => {
    setModel(
      getSinglePost(params.id)
    )
  }, []);

  function onSubmit(ev) {
    ev.preventDefault();

    savePost(model)
    router.navigate('/')
  }

  return (
    <div>
      <p>
        <Link to="/" className="btn btn-outline-secondary">
          Back to Posts
        </Link>
      </p>
      <form onSubmit={onSubmit}>
        <h1>{model.id ? "Edit Post" : "Create new Post"}</h1>
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
