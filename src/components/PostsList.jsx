import { useState } from 'react';

import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost.jsx';
function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');

  function getData(data) {
    setEnteredBody(data);
  }

  return (
    <>
      <NewPost handle={getData} />
      <ul className={classes.posts}>
        <Post author="Maximilian" body={enteredBody} />
        <Post author="Manual" body="Next JS 's Development" />
      </ul>
    </>
  );
}
export default PostsList;
