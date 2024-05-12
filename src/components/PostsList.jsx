import { useState } from 'react';

import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost.jsx';
function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="Reactjs is awesome!" />
        <Post author="Manual" body="Next JS 's Development" />
      </ul>
    </>
  );
}
export default PostsList;
