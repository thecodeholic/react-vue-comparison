import PropTypes from 'prop-types';

export default function PostItem({post}) {
  return (
    <div>
      <pre>{JSON.stringify(post, undefined, 2)}</pre>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}