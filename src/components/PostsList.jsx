import { useState } from 'react';

import Post from './Post';
import Modal from './Modal.jsx';
import classes from './PostList.module.css';
import NewPost from './NewPost.jsx';
function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts([postData, ...posts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={Math.random()} author={post.author} body={post.body} />
        ))}
        {/* <Post author="Manual" body="Next JS 's Development" /> */}
      </ul>
    </>
  );
}
export default PostsList;
