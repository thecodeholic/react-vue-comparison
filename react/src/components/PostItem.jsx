import PropTypes from 'prop-types';

export default function PostItem({post}) {
  return (
    <div className='post-item'>
      <h2 className='post-title'>{post.title}</h2>
      <p className='post-body'>{post.body}</p>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}