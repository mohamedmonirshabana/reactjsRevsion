import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import classes from './PostList.module.css';

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1>Not Post yet</h1>
          <p>Start Adding some!</p>
        </div>
      )}
    </>
  );
}
export default PostsList;
