import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function PostItem({
  post, 
  onDelete = () => {}
}) {

  function deletePost(post) {
    if (!window.confirm('Are you sure you want to delete post?')) {
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`).then(
      (res) => {
        if (res.status === 200) {
          onDelete(post);
        }
      }
    );
  }

  return (
    <div className='card mb-4'>
      <div className="card-body">
        <h5 className='post-title'>{post.title}</h5>
        <p className='post-body'>{post.body}</p>
        <div className="text-end">
          <Link to={ `edit/${post.id}` } className="btn btn-primary me-2">Edit</Link>
          <button onClick={() => deletePost(post)} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}