import Post from './Post';
import classes from './PostList.module.css';
function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Maximilian" body="Reactjs is awesome!" />
      <Post author="Manual" body="Next JS 's Development" />
    </ul>
  );
}
export default PostsList;
