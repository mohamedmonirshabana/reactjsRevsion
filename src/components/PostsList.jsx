import { useState } from 'react';

import Post from './Post';
import Modal from './Modal.jsx';
import classes from './PostList.module.css';
import NewPost from './NewPost.jsx';
function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manual" body="Next JS 's Development" />
      </ul>
    </>
  );
}
export default PostsList;
