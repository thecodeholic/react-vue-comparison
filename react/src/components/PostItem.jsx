import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useStateContext } from "../ContextProvider";

export default function PostItem({ post }) {
  const { deletePost } = useStateContext();

  function onDeleteClick(post) {
    if (!window.confirm("Are you sure you want to delete post?")) {
      return;
    }
    deletePost(post.id)
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="post-title">{post.title}</h5>
        <p className="post-body">{post.body}</p>
        <div className="text-end">
          <Link to={`edit/${post.id}`} className="btn btn-primary me-2">
            Edit
          </Link>
          <button onClick={() => onDeleteClick(post)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};
