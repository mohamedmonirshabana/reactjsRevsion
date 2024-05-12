import { useState } from 'react';

import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost.jsx';
function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} />
      <ul className={classes.posts}>
        <Post author="Maximilian" body={enteredBody} />
        <Post author="Manual" body="Next JS 's Development" />
      </ul>
    </>
  );
}
export default PostsList;
