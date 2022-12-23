import PropTypes from 'prop-types';

export default function PostItem({post}) {
  return (
    <div className='card mb-4'>
      <div className="card-body">
        <h5 className='post-title'>{post.title}</h5>
        <p className='post-body'>{post.body}</p>
        <div class="text-end">
          <button class="btn btn-primary me-2">Edit</button>
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}